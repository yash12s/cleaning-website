import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CommercialCleaning from "./pages/CommercialCleaning";
import ResidentialCleaning from "./pages/ResidentialCleaning";
import Pricing from "./pages/Pricing";
import Quote from "./pages/Quote";
import Reviews from "./pages/Reviews";
import About from "./pages/About";     
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy"; 
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <HelmetProvider>
       <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/commercial-cleaning" element={<CommercialCleaning />} />
        <Route path="/residential-cleaning" element={<ResidentialCleaning />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/about" element={<About />} />       
        <Route path="/contact" element={<Contact />} />   
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

      </Routes>
      <Footer />
    </HelmetProvider>
  );
}
