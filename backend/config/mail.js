import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const verifyMailer = async () => {
  try {
    await transporter.verify();
    console.log("📧 Mailer ready");
  } catch (err) {
    console.error("❌ Mailer verify error:", err.message);
  }
};

// 👇 yeh add karo
export const sendMail = async (options) => {
  try {
    let info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: options.to,
      subject: options.subject,
      text: options.text,
      html: options.html,
    });
    console.log("✅ Email sent:", info.messageId);
    return info;
  } catch (err) {
    console.error("❌ Email error:", err.message);
    throw err;
  }
};
