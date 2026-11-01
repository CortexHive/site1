import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { db, isFirebaseConfigured } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

interface LeadData {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  website?: string;
  projectType: string;
  problem?: string;
  budget?: string;
  timeline?: string;
  brief: string;
  preferredContact?: string;
  source?: string;
  // AI Receptionist specific fields
  businessType?: string;
  callVolume?: string;
  currentPhoneSystem?: string;
  aiFeatures?: string;
}

async function notifyLead(lead: LeadData) {
  try {
    const slackUrl = process.env.SLACK_WEBHOOK_URL;
    if (slackUrl) {
      await fetch(slackUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: `🔥 *New Enquiry Received — CortexHive* 🔥\n*Name:* ${lead.name}\n*Business:* ${lead.company || "N/A"}\n*Email:* ${lead.email}\n*Phone:* ${lead.phone || "N/A"}\n*Service:* ${lead.projectType}\n*Preferred Contact:* ${lead.preferredContact || "Any"}\n*Budget:* ${lead.budget || "N/A"}\n*Details:* ${lead.brief}${lead.callVolume ? `\n*Call Volume:* ${lead.callVolume}` : ""}`,
        }),
      });
    }

    const resendKey = process.env.RESEND_API_KEY;
    const mailjetKey = process.env.MAILJET_API_KEY;
    const mailjetSecret = process.env.MAILJET_API_SECRET;
    const adminEmail = process.env.LEAD_NOTIFICATION_EMAIL;

    if (adminEmail) {
      const emailHtml = `<h2>New Business Enquiry — CortexHive</h2>
                         <p><strong>Name / Contact Person:</strong> ${lead.name}</p>
                         <p><strong>Business / Company:</strong> ${lead.company || "N/A"}</p>
                         <p><strong>Email Address:</strong> <a href="mailto:${lead.email}">${lead.email}</a></p>
                         <p><strong>Phone Number:</strong> ${lead.phone ? `<a href="tel:${lead.phone}">${lead.phone}</a>` : "Not provided"}</p>
                         <p><strong>Preferred Contact:</strong> ${lead.preferredContact || "Email / Phone"}</p>
                         <p><strong>Service Requested:</strong> ${lead.projectType}</p>
                         ${lead.budget ? `<p><strong>Budget / Package:</strong> ${lead.budget}</p>` : ""}
                         ${lead.timeline ? `<p><strong>Target Timeline:</strong> ${lead.timeline}</p>` : ""}
                         ${lead.businessType ? `<p><strong>Business Type:</strong> ${lead.businessType}</p>` : ""}
                         ${lead.callVolume ? `<p><strong>Est. Monthly Call Volume:</strong> ${lead.callVolume}</p>` : ""}
                         ${lead.currentPhoneSystem ? `<p><strong>Current Phone System:</strong> ${lead.currentPhoneSystem}</p>` : ""}
                         ${lead.aiFeatures ? `<p><strong>Required AI Features:</strong> ${lead.aiFeatures}</p>` : ""}
                         <p><strong>Project Requirements / Brief:</strong></p>
                         <blockquote style="background:#f8fafc;padding:12px;border-left:4px solid #7c3aed;margin:8px 0;">${lead.brief.replace(/\n/g, "<br/>")}</blockquote>
                         <p><em>Submitted via CortexHive Web Portal (${lead.source || "form"}) on ${new Date().toLocaleString("en-GB")}</em></p>`;

      // 1. Resend Dispatch
      if (resendKey) {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "CortexHive Enquiries <info@cortexhive.co.uk>",
            to: adminEmail,
            subject: `New Enquiry: ${lead.name} — ${lead.projectType}`,
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
                Subject: `New Enquiry: ${lead.name} — ${lead.projectType}`,
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
    const {
      name,
      contactPerson,
      company,
      businessName,
      email,
      phone,
      website,
      projectType,
      serviceRequired,
      problem,
      budget,
      timeline,
      brief,
      requirements,
      notes,
      preferredContact,
      businessType,
      callVolume,
      currentPhoneSystem,
      aiFeatures,
      source = "form",
    } = body;

    const leadName = name || contactPerson;
    const leadCompany = company || businessName || "";
    const leadService = projectType || serviceRequired || "General Enquiry";
    const leadBrief = brief || requirements || notes || "No additional brief provided";
    const leadBudget = budget || "Standard / Disclosed in Discovery";
    const leadTimeline = timeline || "Standard";

    // Server-side validation
    if (!leadName || !email) {
      return NextResponse.json(
        { error: "Please provide your name and a valid email address." },
        { status: 400 }
      );
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Compose formatted note for database storage preserving schema
    const formattedProblem = [
      phone ? `Phone: ${phone}` : null,
      preferredContact ? `Preferred Contact: ${preferredContact}` : null,
      businessType ? `Industry: ${businessType}` : null,
      callVolume ? `Call Volume: ${callVolume}` : null,
      problem || null,
    ]
      .filter(Boolean)
      .join(" | ");

    // Save lead to SQLite database via Prisma
    let leadId: number | string = "fallback-id-" + Date.now();
    try {
      const lead = await prisma.lead.create({
        data: {
          name: leadName,
          company: leadCompany || null,
          email,
          website: website || null,
          projectType: leadService,
          problem: formattedProblem || null,
          budget: leadBudget,
          timeline: leadTimeline,
          brief: leadBrief,
          source: source,
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
          name: leadName,
          company: leadCompany,
          email,
          phone: phone || "",
          website: website || "",
          projectType: leadService,
          problem: formattedProblem,
          budget: leadBudget,
          timeline: leadTimeline,
          brief: leadBrief,
          preferredContact: preferredContact || "",
          businessType: businessType || "",
          callVolume: callVolume || "",
          currentPhoneSystem: currentPhoneSystem || "",
          aiFeatures: aiFeatures || "",
          source: source,
          createdAt: new Date().toISOString(),
        });
      } catch (fbError) {
        console.error("Firebase lead save failed:", fbError);
      }
    }

    // Trigger optional Slack / Email notifications asynchronously
    notifyLead({
      name: leadName,
      company: leadCompany,
      email,
      phone,
      website,
      projectType: leadService,
      problem: formattedProblem,
      budget: leadBudget,
      timeline: leadTimeline,
      brief: leadBrief,
      preferredContact,
      businessType,
      callVolume,
      currentPhoneSystem,
      aiFeatures,
      source,
    });

    return NextResponse.json({ success: true, leadId });
  } catch (error) {
    console.error("Leads API route error:", error);
    return NextResponse.json(
      { error: "An error occurred while saving your inquiry. Please try again." },
      { status: 500 }
    );
  }
}
