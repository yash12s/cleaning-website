import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
  FaGlobe,
} from "react-icons/fa";
import api from "../api";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      
      await api.post("/contact", formData);

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after few seconds
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      console.error("❌ Error submitting contact form:", err);
      setError(
        err?.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Contact | Helbert Professional Cleaning Services</title>
        <meta
          name="description"
          content="Contact Helbert Professional Maintenance & Cleaning Services for expert cleaning solutions in Surrey and Metro Vancouver."
        />
      </Helmet>

      <div className="bg-gradient-to-r from-blue-600 to-green-500 text-white py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold">Contact Us</h1>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16 bg-white">
        <section className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-green-600" />
              <a href="tel:+12368782647" className="text-lg hover:underline">
                (236) 878-2647
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-blue-600" />
              <div className="flex flex-col">
                <a
                  href="mailto:helberrjanet.12@gmail.com"
                  className="hover:underline"
                >
                  helberrjanet.12@gmail.com
                </a>
                <a
                  href="mailto:fernandezhelbert12@gmail.com"
                  className="hover:underline"
                >
                  fernandezhelbert12@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <FaClock className="text-purple-600" />
              <p>Mon - Fri: 8:00am - 6:00pm</p>
            </div>

            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-red-600" />
              <p>11855 99A Avenue, Surrey, BC V3V 2P9, Canada</p>
            </div>

            <div className="flex items-center space-x-3">
              <FaGlobe className="text-gray-700" />
              <p>
                Service Areas: Vancouver, Burnaby, Richmond, North/West Van, New
                West, Coquitlam, Delta, Surrey, Langley
              </p>
            </div>
          </div>

          {/* ✅ Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>

            {submitted && (
              <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
                ✅ Message has been sent!
              </div>
            )}
            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
                ❌ {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-600"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-600"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-600"
                required
              ></textarea>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition cursor-pointer disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </section>

        {/* Google Map Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Where We Work
          </h2>
          <div className="max-w-4xl mx-auto h-96 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.836511948062!2d-122.85095782362617!3d49.19546087139361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d9bfb29d5f4f%3A0x6c25773f67d01a6!2s11855%2099a%20Ave%2C%20Surrey%2C%20BC%20V3V%202P9%2C%20Canada!5e0!3m2!1sen!2sca!4v1690000000001!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
}
