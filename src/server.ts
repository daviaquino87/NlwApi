import express from 'express';
import { prisma } from './prisma';
const nodemailer = require("nodemailer");

const app = express();
app.use(express.json());

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "58db6b6008e3d5",
      pass: "550db204f7a788"
    }
  });

app.post("/feedbacks", async (req ,res) => {
    const {type, comment, screenshot} = req.body

  const feedback = await prisma.feedback.create({
       data: {
           type,
           comment,
           screenshot
       }
   })

await transport.sendMail({
    from: 'equipe feedget <teste@feedget.com>',
    to: 'Davi Alves <davi26031@gmail.com>',
    subject: 'Novo feedback',
    html: [
      `<div style="font-familly: sans-serif; font-size: 16px; color:#111" >`,
      `<p>Tipo do feedback: ${type}</p>`,
      `<p>Comentario do feedback: ${comment}</p>`,
      `</div>`
    ].join(`\n`)

})


   return res.status(201).json({data: feedback})
});

app.listen(3333, () => {
    console.log("App on")
})