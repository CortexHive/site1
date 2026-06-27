import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email address is required." }, { status: 400 });
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    // Save to SQLite. Check if already exists.
    const existing = await prisma.newsletter.findUnique({
      where: { email },
    });

    if (existing) {
      return NextResponse.json(
        { error: "This email is already subscribed to our newsletter!" },
        { status: 400 }
      );
    }

    await prisma.newsletter.create({
      data: { email },
    });

    return NextResponse.json({ success: true, message: "Subscription successful!" });
  } catch (error) {
    console.error("Newsletter API route error:", error);
    return NextResponse.json(
      { error: "Failed to process your subscription. Please try again." },
      { status: 500 }
    );
  }
}
