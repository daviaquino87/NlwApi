import { MailAdapter, SendMailData } from "../maill-adapter";
const nodemailer = require("nodemailer");


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "58db6b6008e3d5",
      pass: "550db204f7a788"
    }
  });


export class NodeMailerMailAdapter implements MailAdapter {
   async sendMail({subject, body}: SendMailData){
           await transport.sendMail({
        from: 'equipe feedget <teste@feedget.com>',
        to: 'Davi Alves <davi26031@gmail.com>',
        subject,
        html: body

    })

   }
}