import { Helmet } from "react-helmet-async";
import { CheckCircle, Shield, Clock } from "lucide-react"; 
import { Link } from "react-router-dom";

export default function CommercialCleaning() {
  return (
    <div className="bg-gray-50">
      {/* SEO */}
      <Helmet>
        <title>
          Commercial Cleaning Vancouver | Janitorial for Stores & Offices
        </title>
        <meta
          name="description"
          content="After-hours commercial cleaning since 2009. Floor stripping & waxing, auto scrubber, buffer/polisher. Free estimates."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Commercial & Store Cleaning - Vancouver
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Keep your site guest-ready every day. We clean after hours, follow your checklists, 
            and report issues before opening.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        
        {/* Industries */}
        <section className="bg-white shadow-md rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-6 relative inline-block">
            Industries We Serve
            <span className="absolute left-0 -bottom-1 w-20 h-1 bg-gradient-to-r from-blue-600 to-green-500 rounded"></span>
          </h2>

          <div className="flex flex-wrap gap-3">
            {[
              "Retail Stores",
              "Offices",
              "Restaurants & Cafés",
              "Medical/Dental Clinics",
              "Post-construction / Tenant Improvements",
            ].map((industry, i) => (
              <span
                key={i}
                className="flex items-center px-5 py-2 bg-gradient-to-r from-green-100 to-green-50 text-green-700 font-medium rounded-full shadow-sm hover:shadow-md transition"
              >
                <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                {industry}
              </span>
            ))}
          </div>
        </section>

        {/* What's Included */}
        <section className="bg-white shadow-md rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-6 relative inline-block">
            What’s Included
            <span className="absolute left-0 -bottom-1 w-20 h-1 bg-gradient-to-r from-green-600 to-blue-500 rounded"></span>
          </h2>

          <ul className="space-y-3 text-gray-700">
            <li>✔️ High-touch disinfection; restrooms; break rooms; dusting, glass, fixtures</li>
            <li>✔️ Floors: sweep/mop, vacuum, spot cleaning; periodic machine scrubbing & carpet care</li>
            <li>✔️ Waste removal and consumables restock</li>
          </ul>
        </section>

        {/* Floor Care */}
        <section className="bg-white shadow-md rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-6 relative inline-block">
            Floor-Care Expertise
            <span className="absolute left-0 -bottom-1 w-20 h-1 bg-gradient-to-r from-blue-600 to-green-500 rounded"></span>
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Specialists in <strong>floor stripping & waxing</strong> (hardwood & vinyl) using 
            auto scrubber, buffer, and polisher. Our team ensures your floors remain spotless, 
            polished, and long-lasting.
          </p>
        </section>

        {/* Security & Compliance */}
        <section className="bg-white shadow-md rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-6 relative inline-block">
            Security & Compliance
            <span className="absolute left-0 -bottom-1 w-20 h-1 bg-gradient-to-r from-green-600 to-blue-500 rounded"></span>
          </h2>

          <ul className="space-y-3 text-gray-700">
            <li>✔️ Keyholder protocols & alarm codes</li>
            <li>✔️ WHMIS/MSDS on file</li>
            <li>✔️ Trained and background-checked staff</li>
          </ul>
        </section>

        {/* Cleaning Frequency */}
        <section className="bg-white shadow-md rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-6 relative inline-block">
            Cleaning Frequency
            <span className="absolute left-0 -bottom-1 w-20 h-1 bg-gradient-to-r from-green-600 to-blue-500 rounded"></span>
          </h2>

          <div className="flex flex-wrap gap-3">
            {["Nightly", "Weekly", "Monthly", "One-time Deep Cleans"].map((freq, i) => (
              <span
                key={i}
                className="flex items-center px-5 py-2 bg-gradient-to-r from-green-100 to-green-50 text-green-700 font-medium rounded-full shadow-sm hover:shadow-md hover:scale-105 transition"
              >
                <Clock className="w-4 h-4 mr-2 text-green-600" />
                {freq}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
<section className="text-center mt-6 space-y-3">
  <Link
    to="/quote"
    className="bg-blue-600 text-white px-10 py-5 rounded-2xl text-lg font-semibold shadow-xl hover:bg-blue-700 hover:shadow-2xl transition-transform transform hover:-translate-y-1 inline-block"
  >
    Request a Walkthrough
  </Link>

  <p className="text-sm text-gray-700 max-w-lg mx-auto">
    <strong>We commonly work in stores while closed and can hold keys/FOBs with owner/manager approval.</strong>
  </p>
</section>

      </div>
    </div>
  );
}
