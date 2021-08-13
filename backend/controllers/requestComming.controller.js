/* eslint-disable no-unused-vars */
const nodemailer = require("nodemailer");
require("dotenv/config");
module.exports = {
  getRequest: (req, res) => {
    res.send("hello from server");
  },
  postRequest: (req, res) => {
    console.log("data", req.body);
    try {
      const transporter = nodemailer.createTransport({
        service: process.env.service,
        auth: {
          user: process.env.user,
          pass: process.env.pass,
        },
      });

      const mailOptions = {
        from: req.body.email,
        to: "saqib.browser@gmail.com",
        subject: `Message from ${req.body.email}: ${req.body.subject}`,
        text: req.body.message,
      };

      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.log("error", err);
        } else {
          console.log("Email sent" + info.response);
          res.json({
            message: "Email sent successfully",
          });
        }
      });
    } catch (err) {
      console.log("not sent error", err);
    }
  },
};
