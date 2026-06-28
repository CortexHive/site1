import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { db, isFirebaseConfigured } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY;
const DEEPSEEK_API_URL = "https://api.deepseek.com/v1/chat/completions";

const SYSTEM_PROMPT = `You are the AI Concierge for Cortex Hive — Digital Innovation Partners.
Your primary role is to:
1. Explain our services (SaaS Development, Custom AI Tools, Web Apps, Website Design, Marketing & Ads, Video & UGC Content).
2. Answer FAQs about our pricing (Starter: $5k+, Growth: $15k+, Enterprise: $50k+), team (AI-augmented product builders, developers, and creatives), and timeline (typically 4-12 weeks).
3. Qualify leads by collecting their name, business email, project type, budget range, timeline, and project brief.

Be professional, concise, and tech-forward. Do NOT ask for all the lead details at once. Interweave them naturally in the conversation.

ONCE you have gathered all of the following:
- Name
- Email
- Project Type
- Budget
- Timeline
- Brief description

You MUST append a JSON block at the very end of your message. The system will parse this JSON to automatically save the lead to our database.
Format the JSON exactly like this:
\`\`\`json
{
  "lead_captured": true,
  "name": "User's Name",
  "email": "user@example.com",
  "projectType": "SaaS / AI Tool / Web App / Website / Marketing",
  "budget": "Budget Range",
  "timeline": "Timeline",
  "brief": "Short project brief"
}
\`\`\`
Example final transition: "Thank you, John! I've registered your project inquiry. A strategist from our team will contact you within 24 hours. [JSON block]"`;

interface LeadData {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  timeline: string;
  brief: string;
}

// Helper to notify via Slack Webhook or Resend
async function notifyLead(lead: LeadData) {
  try {
    const slackUrl = process.env.SLACK_WEBHOOK_URL;
    if (slackUrl) {
      await fetch(slackUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: `🚨 *New Chatbot Lead* 🚨\n*Name:* ${lead.name}\n*Email:* ${lead.email}\n*Type:* ${lead.projectType}\n*Budget:* ${lead.budget}\n*Timeline:* ${lead.timeline}\n*Brief:* ${lead.brief}`,
        }),
      });
    }

    const resendKey = process.env.RESEND_API_KEY;
    const mailjetKey = process.env.MAILJET_API_KEY;
    const mailjetSecret = process.env.MAILJET_API_SECRET;
    const adminEmail = process.env.LEAD_NOTIFICATION_EMAIL;

    if (adminEmail) {
      // 1. Resend Dispatch
      if (resendKey) {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Cortex Hive Concierge <info@cortexhive.co.uk>",
            to: adminEmail,
            subject: `New Lead: ${lead.name} - ${lead.projectType}`,
            html: `<p><strong>Name:</strong> ${lead.name}</p>
                   <p><strong>Email:</strong> ${lead.email}</p>
                   <p><strong>Project Type:</strong> ${lead.projectType}</p>
                   <p><strong>Budget:</strong> ${lead.budget}</p>
                   <p><strong>Timeline:</strong> ${lead.timeline}</p>
                   <p><strong>Brief:</strong> ${lead.brief}</p>
                   <p><em>Submitted via AI Chatbot Widget</em></p>`,
          }),
        });
      }

      // 2. Mailjet Dispatch
      if (mailjetKey && mailjetSecret) {
        const auth = Buffer.from(`${mailjetKey}:${mailjetSecret}`).toString("base64");
        await fetch("https://api.mailjet.com/v3.1/send", {
          method: "POST",
          headers: {
            Authorization: `Basic ${auth}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Messages: [
              {
                From: {
                  Email: "info@cortexhive.co.uk",
                  Name: "Cortex Hive Concierge",
                },
                To: [
                  {
                    Email: adminEmail,
                    Name: "Cortex Hive HQ",
                  },
                ],
                Subject: `New Lead: ${lead.name} - ${lead.projectType}`,
                HTMLPart: `<p><strong>Name:</strong> ${lead.name}</p>
                           <p><strong>Email:</strong> ${lead.email}</p>
                           <p><strong>Project Type:</strong> ${lead.projectType}</p>
                           <p><strong>Budget:</strong> ${lead.budget}</p>
                           <p><strong>Timeline:</strong> ${lead.timeline}</p>
                           <p><strong>Brief:</strong> ${lead.brief}</p>
                           <p><em>Submitted via AI Chatbot Widget</em></p>`,
              },
            ],
          }),
        });
      }
    }
  } catch (error) {
    console.error("Failed to send notification for chatbot lead:", error);
  }
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid messages array" }, { status: 400 });
    }

    // fallback simulation mode if DEEPSEEK_API_KEY is not configured
    if (!DEEPSEEK_API_KEY || DEEPSEEK_API_KEY.trim() === "") {
      return handleFallbackSimulation(messages);
    }

    const response = await fetch(DEEPSEEK_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("DeepSeek API error:", errText);
      return NextResponse.json({ error: "LLM API Error" }, { status: 502 });
    }

    const data = await response.json();
    let reply = data.choices[0].message.content;

    // Check if a JSON lead is present in the reply
    const jsonMatch = reply.match(/```json\s*(\{[\s\S]*?\})\s*```/);
    let leadSaved = false;

    if (jsonMatch) {
      try {
        const leadData = JSON.parse(jsonMatch[1]);
        if (leadData.lead_captured) {
          const leadPayload = {
            name: leadData.name || "Unknown (Chat)",
            email: leadData.email || "unknown@chat.com",
            projectType: leadData.projectType || "Unspecified",
            budget: leadData.budget || "Unspecified",
            timeline: leadData.timeline || "Unspecified",
            brief: leadData.brief || "Collected in chat",
            source: "chatbot" as const,
          };

          // Store lead in SQLite database with fallback
          try {
            await prisma.lead.create({
              data: leadPayload,
            });
          } catch (dbError) {
            console.warn("Database save failed (likely serverless SQLite read-only), proceeding gracefully:", dbError);
          }

          // Save to Firebase Firestore if configured
          if (isFirebaseConfigured && db) {
            try {
              await addDoc(collection(db, "leads"), {
                ...leadPayload,
                createdAt: new Date().toISOString(),
              });
            } catch (fbError) {
              console.error("Firebase chat lead save failed:", fbError);
            }
          }

          // Trigger optional notifications asynchronously
          notifyLead(leadPayload);
          leadSaved = true;

          // Strip the JSON block so the user does not see it in the conversation
          reply = reply.replace(/```json\s*\{[\s\S]*?\}\s*```/g, "").trim();
        }
      } catch (err) {
        console.error("Failed to parse or save chat lead JSON:", err);
      }
    }

    return NextResponse.json({ message: reply, leadSaved });
  } catch (error) {
    console.error("Chat API route error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

interface MessageItem {
  role: "system" | "user" | "assistant";
  content: string;
}

// Simple rule-based mock flow to simulate DeepSeek if API key is not supplied
function handleFallbackSimulation(messages: MessageItem[]) {
  const userMessages = messages.filter((m) => m.role === "user");
  const lastMessage = userMessages[userMessages.length - 1]?.content?.toLowerCase() || "";

  let reply = "";
  let leadSaved = false;

  // Simple state machine simulation based on number of user interactions
  const count = userMessages.length;

  if (lastMessage.includes("pricing") || lastMessage.includes("cost") || lastMessage.includes("package")) {
    reply = "Cortex Hive offers three pricing tiers: **Starter** ($5k+) for MVP builds, **Growth** ($15k+) for fully featured SaaS and Custom AI integrations, and **Enterprise** ($50k+) for scaled operations. What budget range are you planning for your project?";
  } else if (lastMessage.includes("service") || lastMessage.includes("what do you do") || lastMessage.includes("capabilities")) {
    reply = "We design and build bespoke SaaS products, high-fidelity Web Apps, modern marketing Websites, custom AI tools, and UGC/video content campaigns. Which of these services aligns with your goals?";
  } else if (count === 1) {
    reply = "Welcome to Cortex Hive! 🐝 I'm your AI concierge. I can tell you about our AI-augmented design/development services or pricing. Could you start by sharing your name and what type of project you're thinking of building?";
  } else if (count === 2) {
    reply = "Nice to meet you! To help me understand your project, could you share your business email and your approximate budget range? (e.g. Under $10k, $10k-$30k, or $30k+)";
  } else if (count === 3) {
    reply = "Thank you! What is your ideal timeline for launching this (e.g., within 1 month, 1-3 months, or more)? Also, please give a brief, 1-sentence summary of what the project needs to do.";
  } else {
    // Collect simulated details and save lead
    const name = userMessages[1]?.content?.split(" ").slice(-1)[0] || "Client";
    const email = userMessages[2]?.content?.match(/[\w.-]+@[\w.-]+\.\w+/)?.[0] || "client@cortexhive.co.uk";
    
    const leadPayload = {
      name: name,
      email: email,
      projectType: "SaaS / AI Tool",
      budget: "$10k - $30k (Demo)",
      timeline: "1-3 months (Demo)",
      brief: lastMessage,
      source: "chatbot" as const,
    };

    // Auto-save lead in the database
    prisma.lead.create({
      data: leadPayload,
    }).catch(e => console.warn("Database save failed (likely serverless SQLite read-only), proceeding gracefully:", e));

    // Save to Firebase Firestore if configured
    if (isFirebaseConfigured && db) {
      try {
        addDoc(collection(db, "leads"), {
          ...leadPayload,
          createdAt: new Date().toISOString(),
        }).catch(e => console.error("Firebase chat fallback lead save failed:", e));
      } catch (fbError) {
        console.error("Firebase chat fallback lead save failed:", fbError);
      }
    }

    // Trigger optional notifications asynchronously
    notifyLead(leadPayload);

    leadSaved = true;
    reply = `Thank you, **${name}**! I have successfully registered your project inquiry in our database. A strategist from the Cortex Hive team will review your requirements and reach out to you at **${email}** within 24 hours. Is there anything else about our services I can answer?`;
  }

  return NextResponse.json({ message: reply, leadSaved });
}
