import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface LeadData {
  name: string;
  email: string;
  projectType: string;
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
          text: `🔥 *New Form Lead Captured* 🔥\n*Name:* ${lead.name}\n*Email:* ${lead.email}\n*Type:* ${lead.projectType}\n*Budget:* ${lead.budget}\n*Timeline:* ${lead.timeline}\n*Brief:* ${lead.brief}`,
        }),
      });
    }

    const resendKey = process.env.RESEND_API_KEY;
    const adminEmail = process.env.LEAD_NOTIFICATION_EMAIL;
    if (resendKey && adminEmail) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Cortex Hive Portal <info@cortexhive.co.uk>",
          to: adminEmail,
          subject: `New Portal Lead: ${lead.name} (${lead.projectType})`,
          html: `<p><strong>Name:</strong> ${lead.name}</p>
                 <p><strong>Email:</strong> ${lead.email}</p>
                 <p><strong>Project Type:</strong> ${lead.projectType}</p>
                 <p><strong>Budget:</strong> ${lead.budget}</p>
                 <p><strong>Timeline:</strong> ${lead.timeline}</p>
                 <p><strong>Brief:</strong> ${lead.brief}</p>
                 <p><em>Submitted via Multi-step Lead Form</em></p>`,
        }),
      });
    }
  } catch (error) {
    console.error("Failed to send notification for form lead:", error);
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, projectType, budget, timeline, brief } = body;

    // Server-side validation
    if (!name || !email || !projectType || !budget || !timeline || !brief) {
      return NextResponse.json(
        { error: "All fields are required. Please check your inputs and try again." },
        { status: 400 }
      );
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid business email address." },
        { status: 400 }
      );
    }

    // Save lead to SQLite database via Prisma
    let leadId: number | string = "fallback-id-" + Date.now();
    try {
      const lead = await prisma.lead.create({
        data: {
          name,
          email,
          projectType,
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

    // Trigger optional Slack / Email notifications asynchronously
    notifyLead({ name, email, projectType, budget, timeline, brief });

    return NextResponse.json({ success: true, leadId });
  } catch (error) {
    console.error("Leads API route error:", error);
    return NextResponse.json(
      { error: "An error occurred while saving your inquiry. Please try again." },
      { status: 500 }
    );
  }
}
