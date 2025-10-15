import Quote from "../models/quoteModel.js";
import { sendMail } from "../config/mail.js";

export const createQuote = async (req, res, next) => {
  try {
    const { name, email, phone, serviceType, details } = req.body;

    if (!name || !email || !phone || !serviceType) {
      return res.status(400).json({ message: "All required fields must be filled" });
    }

    const quote = await Quote.create({ name, email, phone, serviceType, details });

    await sendMail({
      to: process.env.ADMIN_EMAIL,
      subject: `📝 New Quote Request (${serviceType})`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${serviceType}\n\nDetails:\n${JSON.stringify(details, null, 2)}`,
    });

    await sendMail({
      to: email,
      subject: "✅ Quote Request Received",
      text: `Hi ${name},\n\nThanks for requesting a quote for our "${serviceType}" services. Our team will get back to you within 1 business day.\n\n- Cleaning Website Team`,
    });

    res.status(201).json({
      message: "Quote submitted successfully",
      quote,
    });
  } catch (error) {
    console.error("❌ Quote Submit Error:", error.message);
    next(error);
  }
};
