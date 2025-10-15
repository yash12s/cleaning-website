export default function Footer() {
  return (
    <footer className="bg-[#0B1320] text-gray-300 py-3">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start">
        
        {/* Left Section */}
        <div className="w-[45%]">
          <h2 className="text-2xl font-bold text-white mb-2">Helbert Professional Maintenance & Cleaning Services</h2>
          <p className="text-gray-400">
            Trusted cleaning solutions for homes & businesses across Metro Vancouver.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-[35%] space-y-3">
          <h3 className="text-lg font-semibold text-white">Contact Us</h3>
          
          <p className="flex items-center gap-2 hover:text-white transition">
            <span className="text-pink-500">📞</span>(236) 878 2647
          </p>
          
          <p className="flex items-center gap-2 hover:text-white transition">
            <span className="text-blue-400">📧</span> helberrjanet.12@gmail.com
          </p>
          
          <p className="flex items-center gap-2 hover:text-white transition">
            <span className="text-pink-500">📍</span> 11855 99A Ave, Surrey, BC V3V 2P9, Canada
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-white text-sm">
        © 2025 Helbert Professional Cleaning. All rights reserved.
      </div>

    </footer>
  );
}
