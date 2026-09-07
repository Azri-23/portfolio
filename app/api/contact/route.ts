import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "azri4579@gmail.com",
      subject: `New message from ${name}`,
      replyTo: email,
      text: message,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}