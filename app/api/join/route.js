import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    try {
        // Parse the JSON payload from the request
        const payload = await req.json();
        const {
            fullName,
            email,
            phone,
            location,
            experience,
            investmentCapacity,
            preferredGroup,
            businessBackground,
            motivation,
            agreeTerms
        } = payload;


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
            subject: "Join Vaizans Group",
            html: `
                <h1>Join Vaizans Group Form Submission</h1>
                <p><strong>Full Name:</strong> ${fullName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Location:</strong> ${location}</p>
                <p><strong>Experience:</strong> ${experience}</p>
                <p><strong>Investment Capacity:</strong> ${investmentCapacity}</p>
                <p><strong>Preferred Group:</strong> ${preferredGroup}</p>
                <p><strong>Business Background:</strong> ${businessBackground}</p>
                <p><strong>Motivation:</strong> ${motivation}</p>
                <p><strong>Agree Terms:</strong> ${agreeTerms ? "Yes" : "No"}</p>
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