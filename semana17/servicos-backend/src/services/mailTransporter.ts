import nodemailer from "nodemailer"
import dotenv from "dotenv"

dotenv.config()

export const mailTransporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS
    },
    tls: { ciphers: "SSLv3" }
})