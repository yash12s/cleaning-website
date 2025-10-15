import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import api from "../api"; 

export default function Quote() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "",
    // Commercial
    company: "",
    locations: "",
    address: "",
    sqft: "",
    facilityType: "",
    frequency: "",
    accessNotes: "",
    servicesNeeded: [],
    // Residential
    buildingName: "",
    buildingType: "",
    unitCount: "",
    floors: "",
    elevators: "",
    areas: [],
    parkadeSize: "",
    wasteRooms: "",
    amenities: "",
    consumables: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      if (checked) {
        setFormData({
          ...formData,
          [name]: [...(formData[name] || []), value],
        });
      } else {
        setFormData({
          ...formData,
          [name]: formData[name].filter((v) => v !== value),
        });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.post("/quote", formData); // backend route
      setSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        serviceType: "",
        company: "",
        locations: "",
        address: "",
        sqft: "",
        facilityType: "",
        frequency: "",
        accessNotes: "",
        servicesNeeded: [],
        buildingName: "",
        buildingType: "",
        unitCount: "",
        floors: "",
        elevators: "",
        areas: [],
        parkadeSize: "",
        wasteRooms: "",
        amenities: "",
        consumables: "",
      });
    } catch (error) {
      console.error("Error submitting quote:", error);
      alert("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Get a Quote | Helbert Professional Cleaning Vancouver</title>
        <meta
          name="description"
          content="Request a free cleaning quote in Vancouver for commercial offices, strata, condos, and residential buildings. Fast response within 1 business day."
        />
      </Helmet>

      <motion.div
        className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex justify-center items-start py-12 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
            Get a Quote
          </h1>
          <p className="text-center text-gray-500 mb-8">
            Takes under 2 minutes. We’ll reply within 1 business day.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1 */}
              {step === 1 && (
                <div className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                    required
                  />
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                    required
                  >
                    <option value="">Select Service Type</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Residential">Residential Building</option>
                  </select>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition cursor-pointer"
                  >
                    Next
                  </button>
                </div>
              )}

              {/* Step 2 Commercial */}
              {step === 2 && formData.serviceType === "Commercial" && (
                <div className="space-y-4">
                  <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                  />
                  <input
                    type="number"
                    name="locations"
                    placeholder="Number of Locations"
                    value={formData.locations}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                  />
                  <input
                    type="text"
                    name="sqft"
                    placeholder="Approx. Sq. Ft."
                    value={formData.sqft}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                  />
                  <input
                    type="text"
                    name="facilityType"
                    placeholder="Facility Type"
                    value={formData.facilityType}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                  />
                  <input
                    type="text"
                    name="frequency"
                    placeholder="Frequency"
                    value={formData.frequency}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                  />
                  <textarea
                    name="accessNotes"
                    placeholder="Access Notes"
                    value={formData.accessNotes}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                  ></textarea>

                  <fieldset>
                    <legend className="font-semibold mb-2">
                      Services Needed
                    </legend>
                    <div className="grid grid-cols-2 gap-2">
                      {["Janitorial", "Deep Cleaning", "Disinfection", "Carpet Cleaning"].map(
                        (service) => (
                          <label key={service} className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              name="servicesNeeded"
                              value={service}
                              onChange={handleChange}
                            />
                            <span>{service}</span>
                          </label>
                        )
                      )}
                    </div>
                  </fieldset>

                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-6 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className="px-6 py-2 cursor-pointer bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                    >
                      {loading ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2 Residential */}
              {step === 2 && formData.serviceType === "Residential" && (
                <div className="space-y-4">
                 
                 
                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-6 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className="px-6 py-2 cursor-pointer bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                    >
                      {loading ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </div>
              )}
            </form>
          ) : (
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold text-green-600">✅ Thank you!</h2>
              <p className="text-gray-600">
                Your request has been received. We’ll review your details and reply within 1 business day. 
                A confirmation email has also been sent to you.
              </p>
            </div>
          )}

          {/* Footer */}
          <div className="mt-10 border-t pt-6 text-sm text-gray-500">
            <p className="text-center">
              <strong className="font-bold text-gray-700">
                By submitting, you agree to our{" "}
              </strong>
              <a href="/privacy" className="text-blue-600 underline font-semibold">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
