export default function nodemailer(req, res) {
  require('dotenv').config()
  
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'vietenandreas@gmail.com',
      pass: process.env.password,
    },
    secure: true,
  })
  const mailData = {
    from: req.body.email,
    to: 'vietenandreas@gmail.com',
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`
  }
  try {
    transporter.sendMail(mailData)
    console.log('res', res.json);
    return res.status(200).end();
  } catch (error) {
    console.log('error', error);
    return res.status(500).send(error);
  }
 
}