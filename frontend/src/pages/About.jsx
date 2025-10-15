import { Helmet } from "react-helmet-async";
import {
  FaCheckCircle,
  FaTools,
  FaBroom,
  FaWindowMaximize,
  FaBuilding,
} from "react-icons/fa";

export default function About() {
  return (
    <div>
      {/* SEO */}
      <Helmet>
        <title>About | Cleaning Services</title>
        <meta
          name="description"
          content="Learn about Helbert Professional Maintenance & Cleaning Services – trusted, family-owned cleaning experts since 2009 across Metro Vancouver."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-500 text-white text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-snug mb-6">
          About Helbert Professional Maintenance
          <br />
          & Cleaning Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Locally owned, family-operated cleaning experts since 2009. Serving Metro Vancouver with trusted floor-care and building maintenance.
        </p>
      </section>

      <div className="container mx-auto px-6 py-16">
        {/* Story */}
        <section className="bg-white shadow-lg rounded-2xl p-8 mb-14">
          <p className="text-lg text-gray-700 leading-relaxed">
            Helbert Professional Maintenance & Cleaning Services is a{" "}
            <strong>locally owned, family-operated company</strong> serving the
            Lower Mainland since 2009. We’re known for{" "}
            <strong>floor cleaning, restoration, and finish work</strong>—and we
            pair that expertise with honest communication and reliable schedules.
          </p>
        </section>

        {/* Training & Credentials*/}
        <section className="grid md:grid-cols-2 gap-10 mb-14">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b pb-3">
              Training & Credentials
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center">
                <FaCheckCircle className="text-green-600 mr-3" /> Vancouver
                School Board (2009) — Building Service Worker training
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-600 mr-3" /> WHMIS & First
                Aid certified
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-600 mr-3" /> Former trainer
                for VSB students in floor stripping & waxing
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-600 mr-3" /> Background-checked staff; key/FOB & alarm protocols
              </li>
            </ul>
          </div>

          {/* Equipment */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b pb-3">
              Equipment We Use
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center">
                <FaTools className="text-blue-600 mr-3" /> Auto scrubber
              </li>
              <li className="flex items-center">
                <FaTools className="text-blue-600 mr-3" /> Buffer / polisher
              </li>
              <li className="flex items-center">
                <FaTools className="text-blue-600 mr-3" /> Commercial vacuums
              </li>
              <li className="flex items-center">
                <FaTools className="text-blue-600 mr-3" /> Stripping & waxing
                tools
              </li>
            </ul>
          </div>
        </section>

        {/* Cleaning Services */}
        <section className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b pb-3 text-center">
            Our Cleaning Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-gray-700 text-lg">
            <div className="flex items-center">
              <FaBroom className="text-green-600 mr-3" /> Floors
            </div>
            <div className="flex items-center">
              <FaWindowMaximize className="text-blue-600 mr-3" /> Windows
            </div>
            <div className="flex items-center">
              <FaBuilding className="text-purple-600 mr-3" /> Office Cleaning
            </div>
            <div className="flex items-center">
              <FaBuilding className="text-orange-600 mr-3" /> Apartment / Strata
              Common Areas
            </div>
            <div className="flex items-center">
              <FaBuilding className="text-pink-600 mr-3" /> Post-Construction
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
