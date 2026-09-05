import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    try {
        // Parse the JSON payload from the request
        const payload = await req.json();
        const { email, message, name, subject, } =
            payload;

        // Configure the Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, // Access from .env // Your email address
                pass: process.env.EMAIL_PASS, // Access from .env // Your app-specific password
            },
        });

        // Send the email
        const mailResponse = await transporter.sendMail({
            from: `"Contact Form" <${email}>`, // Sender email
            to: process.env.EMAIL_USER, // Recipient email
            subject: "New Contact Form Submission",
            html: `
        <h1>Contact Form Submission</h1>
        <p><strong>Full Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Subject:</strong> ${subject}</p>
      
      `,
        });

        // Respond with success
        return NextResponse.json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("Error in POST handler:", error);

        // Respond with an error
        return NextResponse.json(
            { error: "An error occurred while sending the email." },
            { status: 500 }
        );
    }
};