import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#0B1320] shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
       
        <h1 className="text-xl font-bold text-white">
          Helbert Professional Cleaning
        </h1>

        {/* Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-white hover:text-blue-400 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/commercial-cleaning"
            className="text-white hover:text-blue-400 transition-colors duration-300"
          >
            Commercial
          </Link>
          <Link
            to="/residential-cleaning"
            className="text-white hover:text-blue-400 transition-colors duration-300"
          >
            Residential
          </Link>
          <Link
            to="/pricing"
            className="text-white hover:text-blue-400 transition-colors duration-300"
          >
            Pricing
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-blue-400 transition-colors duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-blue-400 transition-colors duration-300"
          >
            Contact
          </Link>
        </div>

        {/* CTA + Phone */}
        <div className="flex items-center space-x-4">
          <a
            href="tel:(236) 878-2647"
            className="text-white font-semibold hover:text-blue-400 transition"
          >
            📞 (236) 878-2647
          </a>
          <Link
            to="/quote"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}
