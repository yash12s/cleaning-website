import Contact from "../models/Contact.js";
import { sendMail } from "../config/mail.js";

export const createContact = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const contact = await Contact.create({ name, email, message });

    await sendMail({
      to: process.env.ADMIN_EMAIL,
      subject: "📩 New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    await sendMail({
      to: email,
      subject: "✅ Thank you for contacting us!",
      text: `Hi ${name},\n\nWe have received your message and will get back to you soon.\n\nThanks,\nTeam`,
    });

    res.status(201).json({
      message: "Contact form submitted successfully",
      contact,
    });
  } catch (error) {
    next(error);
  }
};
