import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    service: "gmail",
    port: parseInt(process.env.SMTP_PORT as string, 10),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

export const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
};