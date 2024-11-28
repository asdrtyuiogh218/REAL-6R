const nodemailer = require('nodemailer');

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ message: 'Message is required' });
    }

    try {
        // Configure the transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail', // or another email service
            auth: {
                user: process.env.EMAIL_USER, // Your email address
                pass: process.env.EMAIL_PASS  // Your email password or app password
            }
        });

        // Send the email
        await transporter.sendMail({
            from: process.env.EMAIL_USER, // Sender address
            to: 'm-12120958@moe-dl.edu.my', // Recipient address
            subject: 'Message from HTML Form',
            text: message
        });

        return res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Failed to send email.' });
    }
}
