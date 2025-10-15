import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

export default function Reviews() {
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
    {
      name: "Daniel P.",
      text: "Quick, efficient, and exceeded my expectations. My home feels brand new!",
    },
    {
      name: "Olivia W.",
      text: "The team is very thorough and punctual. Best cleaning service in town.",
    },
    {
      name: "James T.",
      text: "Affordable, reliable, and friendly. I’m a happy repeat customer.",
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-6">
      {/* SEO */}
     <Helmet>
        <title>
          Customer Reviews | Helbert Professional Cleaning Vancouver
        </title>
        <meta
          name="description"
          content="Read customer reviews about Helbert Professional Cleaning – Vancouver’s trusted cleaning service for commercial and residential buildings."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AggregateRating",
            itemReviewed: {
              "@type": "Organization",
              name: "CleanCo",
            },
            ratingValue: "4.9",
            bestRating: "5",
            ratingCount: reviews.length,
          })}
        </script>
      </Helmet>

      <div className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
        >
          What Our Clients Say About Us
        </motion.h1>

        <div className="flex justify-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400 text-xl" />
          ))}
        </div>
        <p className="text-gray-600">Rated 4.9/5 based on {reviews.length}+ reviews</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reviews.map((review, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
          >
            <p className="text-gray-600 italic mb-4">“{review.text}”</p>
            <h4 className="font-semibold text-gray-800">- {review.name}</h4>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12">
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition"
        >
        See Our Google Reviews
        </a>
      </div>
    </div>
  );
}
