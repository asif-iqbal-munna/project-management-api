import nodemailer from "nodemailer";
import hbs from "nodemailer-express-handlebars";
import config from "../config/config";
import * as path from "path";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: config.emailId,
    pass: config.emailPassword,
  },
});

const hbsConfig = {
  viewEngine: {
    extName: ".handlebars",
    partialsDir: path.join(__dirname, "../email/templates/"),
    layoutsDir: path.join(__dirname, "../email/templates/"),
    defaultLayout: "email-layout",
  },
  viewPath: path.join(__dirname, "../email/templates/"),
  extName: ".handlebars",
};

transporter.use("compile", hbs(hbsConfig));

export const sendMail = (
  to: string,
  subject: string,
  template: string,
  context: Record<string, unknown>,
  attachments: Array<any> = []
) => {
  //Configure email options like from, to, subject, message, attachments, template...
  const mailOptions = {
    from: config.emailId,
    to,
    subject,
    template,
    context,
    attachments,
  };

  // Send email options using the transporter
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log("Error: mail not sent because", err);
    } else {
      console.log("Mail sent successfully!");
    }
  });
};
