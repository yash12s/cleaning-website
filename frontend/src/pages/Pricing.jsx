import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Pricing() {
  return (
    <>
      <Helmet>
        <title>Vancouver Cleaning Prices | Helbert Professional Cleaning</title>
        <meta
          name="description"
          content="Strata, condo, apartment & commercial cleaning pricing in Vancouver. Custom quotes with free on-site estimates from Helbert Professional Cleaning."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 text-center bg-gradient-to-r from-blue-600 via-blue-500 to-green-500 text-white px-6 md:px-20">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
            Transparent & Custom Pricing
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Every space is unique - our pricing is tailored to your building’s needs. 
            Book a walkthrough today to get an exact quote.
          </p>

         
          <div className="mt-6 inline-block bg-yellow-400 text-black font-semibold px-5 py-2 rounded-full shadow-md">
            Free on-site estimate
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        {/* Commercial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white shadow-lg rounded-2xl p-8 border-t-4 border-blue-600"
        >
          <h2 className="text-2xl font-semibold text-gray-800">
            Commercial Cleaning
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Custom - based on sq. ft., scope, frequency, access (after-hours), 
            and floor-care needs. <br />
            Perfect for offices, retail, and shared workspaces.
          </p>
        </motion.div>

        {/* Residential */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white shadow-lg rounded-2xl p-8 border-t-4 border-green-600"
        >
          <h2 className="text-2xl font-semibold text-gray-800">
            Residential Buildings
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Custom - based on unit count, floors/elevators, amenity set, parkade size, 
            waste rooms, and cleaning frequency.
          </p>
        </motion.div>
      </section>

      <div className="text-center mb-16">
        <Link
          to="/quote"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-xl transition text-lg shadow-lg"
        >
          Get a Quote
        </Link>
      </div>
    </>
  );
}
