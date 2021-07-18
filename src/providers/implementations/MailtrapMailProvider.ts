import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

require('dotenv/config');

export class MailtrapMailProvider implements IMailProvider {
    private transporter: Mail;

    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASS,
            }
        });
    }

    async sendMail(message: IMessage): Promise <void> {
        this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email,
            },
            from: {
                name: message.from.name,
                address: message.from.email,
            },
            subject: message.subject,
            html: message.body,
        });
    }
}