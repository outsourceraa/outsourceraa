import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, service, message } = await request.json();

    // Configure Email
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: "info@outsourceraa.com",
        pass: "Outsource@9024", 
      },
    });

    // Send Email
    await transporter.sendMail({
      from: '"Outsourceraa Website" <info@outsourceraa.com>',
      to: "info@outsourceraa.com",
      subject: `New Lead: ${service}`,
      text: `Name: ${name}\nEmail: ${email}\nService: ${service}\nMessage: ${message}`,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully!" }, { status: 201 });
  } catch (error) {
    console.error("Email Error:", error);
    return NextResponse.json({ success: false, message: "Failed to send email." }, { status: 500 });
  }
}