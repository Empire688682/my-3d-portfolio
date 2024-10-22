import express, { text } from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

//app config
const app = express();
const port = 600;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("App running");
});

//NodeMailer config
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.USER,
        pass: process.env.PASS
    },
    tls: {
        rejectUnauthorized: false  // Allows self-signed certificates
    }
});

// POST route to handle form submissions
app.post("/submit", (req, res) => {
    console.log("Form data received:", req.body);
    const { name, email, subject, message } = req.body;
    
    if (!name || !email || !subject || !message) {
        return res.json({ success: false, message: "All fields are required" });
    }

    const mailOptions = {
        from: email,
        to: process.env.USER, 
        subject: "New Message from Portfolio",
        text: "Message",
        html: `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong> ${message}</p>
        `
    };

    console.log("Mail options:", mailOptions);

    // Send email using transporter
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.json({ success: false, message: "Submission failed" });
        }
        else {
            console.log("Massage info:", + info.response);
            return res.json({ success: true, message: "Form submitted successful" });
        }
    });
});


// Start the server
app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
})