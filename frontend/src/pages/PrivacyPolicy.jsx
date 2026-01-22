import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-gray-800">
      <Helmet>
        <title>Privacy Policy | Cleaning Website</title>
        <meta
          name="description"
          content="Read our Privacy Policy to understand how we collect, use, and protect your information."
        />
      </Helmet>

      <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>

      <p className="mb-6">
        At <strong>Helbert Professional Cleaning</strong>, your privacy is very important to us.
        This Privacy Policy explains how we collect, use, and protect your personal
        information when you visit our website or submit a form.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">1. Information We Collect</h2>
      <p className="mb-6">
        We may collect personal information such as your name, email address, phone number,
        and service details when you fill out our contact or quote form.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">2. How We Use Your Information</h2>
      <p className="mb-6">
        Your data is used to respond to your inquiries, provide service quotes,
        and send confirmation or update emails. We do not sell or share your information
        with third parties.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">3. Data Security</h2>
      <p className="mb-6">
        We take appropriate measures to protect your data using secure servers and encryption.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">4. Cookies</h2>
      <p className="mb-6">
        Our website may use cookies to improve user experience and website functionality.
        You can disable cookies anytime in your browser settings.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">5. Contact Us</h2>
      <p className="mb-6">
        If you have any questions regarding our Privacy Policy, you can reach us at{" "}
        <a
          href="mailto:helberrjanet.12@gmail.com"
          className="text-blue-600 hover:underline"
        >
          helberrjanet.12@gmail.com
        </a>.
      </p>

      <div className="text-center mt-10">
        <Link
          to="/"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
