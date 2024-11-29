import sgMail from "@sendgrid/mail";
import "dotenv/config";

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY is not defined in environment variables.");
}
if (!process.env.SENDGRID_SENDER_EMAIL) {
  throw new Error(
    "SENDGRID_SENDER_EMAIL is not defined in environment variables."
  );
}
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export function sendApprovedEmail(to: string, name: string) {
  const msg = {
    to,
    from: process.env.SENDGRID_SENDER_EMAIL as string,
    subject: "Your Verification is Complete!",
    html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Email Template</title>
    <style>
      body {
        font-family: Inter, sans-serif;
        background-color: #f9fafb;
        margin: 0;
        padding: 0;
        color: #111827;
        -webkit-font-smoothing: antialiased;
      }
      .email-wrapper {
        width: 100%;
        padding: 40px 0;
      }
      .email-content {
        max-width: 600px;
        margin: 0 auto;
        background-color: #fafafa;
        border: 1px solid #e5e7eb;
        border-radius: 6px;
        overflow: hidden;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
      }
      .email-header {
        background-color: #e7e5e4;
        color: #222;
        text-align: center;
        padding: 20px;
        font-size: 20px;
        font-weight: 600;
      }
      .email-body {
        padding: 24px;
        font-size: 14px;
        line-height: 1.6;
      }
      .email-body h1 {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 16px;
      }
      .email-body p {
        margin: 10px 0;
      }
      .email-footer {
        background-color: #fafafa;
        color: #6b7280;
        text-align: center;
        padding: 16px;
        font-size: 12px;
        border-top: 1px solid #e5e7eb;
      }
    </style>
  </head>
  <body>
    <div class="email-wrapper">
      <div class="email-content">
        <div class="email-header">Your Verification is Complete!</div>
        <div class="email-body">
          <h1>Hi there ${name}!</h1>
          <p>Your verification has been successfully completed. You are now fully verified in our system.</p>
          <p>No further action is required from your side at the moment.</p>
          <p>Best regards,<br />The KYC360 Team</p>
        </div>
        <div class="email-footer">
          © 2024 KYC360. All rights reserved.<br />
          Stockholm, Sweden
        </div>
      </div>
    </div>
  </body>
</html>`,
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log("Verification complete email sent successfully");
    })
    .catch((error) => {
      console.error("Error sending email:", error.response.body);
    });
}
