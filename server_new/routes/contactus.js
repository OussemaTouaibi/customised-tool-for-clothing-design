const express = require("express");
const router = express.Router();
const nodemailer = require('nodemailer');

require('dotenv').config()


router.post("/", (req, res) => {
    const contactEmail = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
            user: process.env.GMAIL_USERNAME,
            pass: process.env.GMAIL_PASSWORD,
        },
    });
    
    contactEmail.verify((error) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Ready to Send");
        }
    });
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message; 
    const mail = {
      from: name,
      to: process.env.GMAIL_USERNAME,
      subject: "Contact Form Message",
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "failed" });
      } else {
        res.json({ status: "sent" });
      }
    });
});

module.exports = router