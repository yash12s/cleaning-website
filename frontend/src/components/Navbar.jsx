import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0B1320] shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
       
        <h1 className="text-xl font-bold text-white">
          Helbert Professional Cleaning
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-blue-400 transition-colors">
            Home
          </Link>
          <Link to="/commercial-cleaning" className="text-white hover:text-blue-400 transition-colors">
            Commercial
          </Link>
          <Link to="/residential-cleaning" className="text-white hover:text-blue-400 transition-colors">
            Residential
          </Link>
          <Link to="/pricing" className="text-white hover:text-blue-400 transition-colors">
            Pricing
          </Link>
          <Link to="/about" className="text-white hover:text-blue-400 transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-white hover:text-blue-400 transition-colors">
            Contact
          </Link>
        </div>

        {/* CTA + Phone (Desktop only) */}
        <div className="hidden md:flex items-center space-x-4">
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0B1320] border-t border-gray-700 px-6 py-4 space-y-4">
          <Link
            to="/"
            className="block text-white hover:text-blue-400"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/commercial-cleaning"
            className="block text-white hover:text-blue-400"
            onClick={() => setIsOpen(false)}
          >
            Commercial
          </Link>
          <Link
            to="/residential-cleaning"
            className="block text-white hover:text-blue-400"
            onClick={() => setIsOpen(false)}
          >
            Residential
          </Link>
          <Link
            to="/pricing"
            className="block text-white hover:text-blue-400"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </Link>
          <Link
            to="/about"
            className="block text-white hover:text-blue-400"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block text-white hover:text-blue-400"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>

          <hr className="border-gray-700" />

          <a
            href="tel:(236) 878-2647"
            className="block text-white font-semibold hover:text-blue-400"
          >
            📞 (236) 878-2647
          </a>
          <Link
            to="/quote"
            className="block bg-blue-500 text-center text-white py-2 rounded-lg hover:bg-blue-600 transition"
            onClick={() => setIsOpen(false)}
          >
            Get a Quote
          </Link>
        </div>
      )}
    </nav>
  );
}
