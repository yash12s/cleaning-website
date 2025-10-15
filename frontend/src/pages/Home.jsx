import { Helmet } from "react-helmet-async";
import { FaCheckCircle } from "react-icons/fa";
import { GiBroom, GiVacuumCleaner } from "react-icons/gi";
import { MdCleaningServices } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Home() {
  const reviews = [
    {
      name: "Emily R.",
      text: "Amazing service! The team was punctual and did a fantastic job with our office cleaning.",
    },
    {
      name: "Michael S.",
      text: "Very professional and reliable cleaning service. Highly recommend!",
    },
    {
      name: "Sophie L.",
      text: "Great attention to detail, friendly staff, and excellent results every time.",
    },
  ];

  return (
    <div className="space-y-16">
      {/* SEO */}
      <Helmet>
        <title>
          Vancouver Cleaning Services | Since 2009 | Helbert Professional Maintenance
        </title>
        <meta
          name="description"
          content="Commercial & residential building cleaning in Metro Vancouver. Floor stripping & waxing specialists. After-hours, free estimates. Call (236) 878-2647."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-green-500 text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Commercial & Residential Building Cleaning in Vancouver
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Since 2009, locally owned and family-operated. Floor-care experts for
            stores, offices, and multi-unit buildings across Metro Vancouver.
            After-hours, checklist-driven, and free estimates.
          </p>
          <div className="space-x-4">
            <Link
              to="/quote"
              className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition inline-block"
            >
              Get a Quote
            </Link>
            <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-700 transition">
              Call Now: (236) 878-2647
            </button>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-gray-50 py-4">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Why Trust Us?</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "Since 2009",
              "WHMIS & First Aid trained",
              "Keyholder/after-hours experience",
              "Background-checked team",
            ].map((badge, i) => (
              <div
                key={i}
                className="bg-white px-6 py-4 rounded-xl shadow-md flex items-center gap-2 font-semibold hover:shadow-lg transition"
              >
                <FaCheckCircle className="text-green-500 text-xl" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Tiles */}
      <section className="container mx-auto px-6 py-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Our Cleaning Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition flex flex-col items-center">
            <GiBroom className="text-5xl text-blue-500 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Commercial Cleaning</h3>
            <p className="text-gray-600">
              Retail stores, offices, restaurants, clinics, post-construction.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition flex flex-col items-center">
            <GiVacuumCleaner className="text-5xl text-green-500 mb-4" />
            <h3 className="text-2xl font-bold mb-2">
              Residential Building Cleaning
            </h3>
            <p className="text-gray-600">
              Strata/condo/apartment common areas, amenities, parkades, and
              vacant-unit turnovers.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition flex flex-col items-center">
            <MdCleaningServices className="text-5xl text-yellow-500 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Floor Care Specialists</h3>
            <p className="text-gray-600">
              Auto scrubber, buffer/polisher; specialists in floor stripping &
              waxing (hardwood & vinyl).
            </p>
          </div>
        </div>
      </section>

      {/* 3 Steps */}
      <section className="container mx-auto px-6 py-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Our 3-Step Process</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {[
            {
              text: "Request",
              color: "blue-50",
              icon: (
                <MdCleaningServices className="text-4xl mb-2 mx-auto text-blue-500" />
              ),
            },
            {
              text: "Walkthrough or photos",
              color: "yellow-50",
              icon: (
                <MdCleaningServices className="text-4xl mb-2 mx-auto text-yellow-500" />
              ),
            },
            {
              text: "Start with your approved checklist",
              color: "green-50",
              icon: (
                <MdCleaningServices className="text-4xl mb-2 mx-auto text-green-500" />
              ),
            },
          ].map((step, i) => (
            <div
              key={i}
              className={`bg-${step.color} text-blue-700 px-6 py-6 rounded-xl shadow-md flex-1 flex flex-col items-center`}
            >
              {step.icon}
              {step.text}
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Preview Section */}
      <section className="bg-white py-4">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <p className="text-gray-600 italic mb-4">“{review.text}”</p>
                <h4 className="font-semibold text-gray-800">- {review.name}</h4>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              to="/reviews"
              className="px-6 py-3 bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-800 transition"
            >
              See All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Service Areas</h2>
          <p className="flex flex-wrap justify-center gap-4">
            {[
              "Vancouver",
              "Burnaby",
              "Richmond",
              "North/West Vancouver",
              "New Westminster",
              "Coquitlam",
              "Delta",
              "Surrey",
              "Langley",
            ].map((area, i) => (
              <span
                key={i}
                className="bg-white px-5 py-2 rounded-full shadow-sm hover:shadow-md transition"
              >
                {area}
              </span>
            ))}
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white text-black py-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Ready for a spotless property?
        </h2>
        <Link
          to="/quote"
          className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-500 transition transform hover:scale-105 inline-block cursor-pointer shadow-md"
        >
          Get Your Free Estimate
        </Link>
      </section>
    </div>
  );
}
