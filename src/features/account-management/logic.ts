import sgMail from "@sendgrid/mail";
import "dotenv/config";

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY is not defined in environment variables.");
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: "ali.mohseni05@yahoo.se",
  from: "ali.mohseni@appliedtechnology.se",
  subject: "Sending with SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};

sgMail
  .send(msg)
  .then(() => {
    console.log("Email sent");
  })
  .catch((error) => {
    console.error("Error sending email:", error);
  });
