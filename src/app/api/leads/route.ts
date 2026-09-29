import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { db, isFirebaseConfigured } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

interface LeadData {
  name: string;
  company?: string;
  email: string;
  website?: string;
  projectType: string;
  problem?: string;
  budget: string;
  timeline: string;
  brief: string;
}

async function notifyLead(lead: LeadData) {
  try {
    const slackUrl = process.env.SLACK_WEBHOOK_URL;
    if (slackUrl) {
      await fetch(slackUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: `🔥 *New Project Enquiry Received* 🔥\n*Name:* ${lead.name}\n*Company:* ${lead.company || "N/A"}\n*Email:* ${lead.email}\n*Website:* ${lead.website || "N/A"}\n*Service:* ${lead.projectType}\n*Problem to Solve:* ${lead.problem || "N/A"}\n*What to Build:* ${lead.brief}\n*Budget:* ${lead.budget}\n*Timeline:* ${lead.timeline}`,
        }),
      });
    }

    const resendKey = process.env.RESEND_API_KEY;
    const mailjetKey = process.env.MAILJET_API_KEY;
    const mailjetSecret = process.env.MAILJET_API_SECRET;
    const adminEmail = process.env.LEAD_NOTIFICATION_EMAIL;

    if (adminEmail) {
      const emailHtml = `<h2>New Project Enquiry — CortexHive</h2>
                         <p><strong>Name:</strong> ${lead.name}</p>
                         <p><strong>Company:</strong> ${lead.company || "N/A"}</p>
                         <p><strong>Email:</strong> ${lead.email}</p>
                         <p><strong>Website:</strong> ${lead.website || "N/A"}</p>
                         <p><strong>Service Required:</strong> ${lead.projectType}</p>
                         <p><strong>Problem to Solve:</strong> ${lead.problem || "N/A"}</p>
                         <p><strong>What to Build:</strong> ${lead.brief}</p>
                         <p><strong>Budget:</strong> ${lead.budget}</p>
                         <p><strong>Timeline:</strong> ${lead.timeline}</p>
                         <p><em>Submitted via CortexHive Project Enquiry Form</em></p>`;

      // 1. Resend Dispatch
      if (resendKey) {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "CortexHive Inquiries <info@cortexhive.co.uk>",
            to: adminEmail,
            subject: `New Project Enquiry: ${lead.name} (${lead.company || lead.projectType})`,
            html: emailHtml,
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
                  Name: "CortexHive Portal",
                },
                To: [
                  {
                    Email: adminEmail,
                    Name: "CortexHive Team",
                  },
                ],
                Subject: `New Project Enquiry: ${lead.name} (${lead.company || lead.projectType})`,
                HTMLPart: emailHtml,
              },
            ],
          }),
        });
      }
    }
  } catch (error) {
    console.error("Failed to send notification for form lead:", error);
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, company, email, website, projectType, problem, budget, timeline, brief } = body;

    // Server-side validation
    if (!name || !email || !projectType || !budget || !timeline || !brief) {
      return NextResponse.json(
        { error: "Please fill in all required fields (Name, Email, Service, Brief, Budget, Timeline)." },
        { status: 400 }
      );
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Save lead to SQLite database via Prisma
    let leadId: number | string = "fallback-id-" + Date.now();
    try {
      const lead = await prisma.lead.create({
        data: {
          name,
          company: company || null,
          email,
          website: website || null,
          projectType,
          problem: problem || null,
          budget,
          timeline,
          brief,
          source: "form",
        },
      });
      leadId = lead.id;
    } catch (dbError) {
      console.warn("Database save failed (likely serverless SQLite read-only), proceeding gracefully:", dbError);
    }

    // Save to Firebase Firestore if configured
    if (isFirebaseConfigured && db) {
      try {
        await addDoc(collection(db, "leads"), {
          name,
          company: company || "",
          email,
          website: website || "",
          projectType,
          problem: problem || "",
          budget,
          timeline,
          brief,
          source: "form",
          createdAt: new Date().toISOString(),
        });
      } catch (fbError) {
        console.error("Firebase lead save failed:", fbError);
      }
    }

    // Trigger optional Slack / Email notifications asynchronously
    notifyLead({ name, company, email, website, projectType, problem, budget, timeline, brief });

    return NextResponse.json({ success: true, leadId });
  } catch (error) {
    console.error("Leads API route error:", error);
    return NextResponse.json(
      { error: "An error occurred while saving your inquiry. Please try again." },
      { status: 500 }
    );
  }
}
