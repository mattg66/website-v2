import { NextApiRequest, NextApiResponse } from "next";

function validateEmail(email: string): boolean {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

export default function submitEnquiryForm(req: NextApiRequest, res1: NextApiResponse) {
    if (process.env.secretkey !== undefined) {
        const params = new URLSearchParams({
            secret: process.env.secretkey,
            response: req.body.gRecaptchaToken,
        });
        fetch("https://www.google.com/recaptcha/api/siteverify", {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: params.toString(),
        })
            .then((res) => {
                if (!res.ok) {
                    throw Error(res.statusText);
                }
                return res.json();
            })
            .then((res) => {
                if (res.success === true && res.score >= 0.5) {
                    return handler(req, res1)
                } else {
                    res1.status(403).json({ message: "Bad ReCaptcha" })
                }
            })
            .catch((error) => {
                res1.status(403).json({ message: "Bad ReCaptcha" })
            })
    }
};

function handler(req: NextApiRequest, res: NextApiResponse) {
    if (Object.keys(req.body.data.name).length <= 40 && Object.keys(req.body.data.email).length <= 100 && Object.keys(req.body.data.message).length <= 5000 && validateEmail(req.body.data.email)) {
        let nodemailer = require('nodemailer')
        const transporter = nodemailer.createTransport({
            port: 587,
            host: process.env.smtp,
            secure: false,
            auth: {
                user: process.env.username,
                pass: process.env.password
            },
            tls: {
                ciphers:'SSLv3'
            }
        });
        const mailData = {
            from: process.env.username,
            to: process.env.to,
            subject: `Website Form Submission`,
            html: `<div><p>From: ${req.body.data.name}</p><p>Email: ${req.body.data.email}</p><p>Message: ${req.body.data.message}</p></div>`
        }
        transporter.sendMail(mailData, function (err: any, info: any) {
            if (err) {
                console.log(err)
                res.status(500).json({ message: "Message Failed to Send" })
                return false
            } else {
                console.log(info)
                res.status(200).json({ message: "Message Sent" })
                return true
            }

        })
    } else {
        res.status(403).json({ message: "Invalid request" })
    }
}