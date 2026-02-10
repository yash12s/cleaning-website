import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import api from "../api";
import { Link } from "react-router-dom";

export default function Quote() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    commercial: 1, // 1 = Commercial, 0 = Residential Building
    company: "",
    number_of_locations: "",
    address: "",
    approx_sq_ft: "",
    facility_type: "",
    frequency: "",
    access_notes: "",
    Janitorial: 0,
    Cleaning: 0,
    Disinfection: 0,
    Carpet_Cleaning: 0,
    
  });

  const validateStep1 = () => {
    const e = {};
    if (!formData.name.trim()) e.name = "Name required";
    if (!formData.phone.trim()) e.phone = "Phone required";
    else if (!/^[\d\-\s()+]{7,20}$/.test(formData.phone)) e.phone = "Enter a valid phone";
    if (!formData.email.trim()) e.email = "Email required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = "Enter a valid email";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((s) => ({ ...s, [name]: checked ? 1 : 0 }));
      return;
    }

    // service type switch (commercial/residential)
    if (name === "serviceType") {
      const commercial = value === "Commercial" ? 1 : 0;
      setFormData((s) => ({ ...s, commercial }));
      return;
    }

    setFormData((s) => ({ ...s, [name]: value }));
  };

  const handleNext = () => {
    if (validateStep1()) setStep(2);
  };

  const buildPayload = () => {
    
    const payload = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      commercial: Number(formData.commercial ? 1 : 0),
      company: formData.company || "",
      number_of_locations: formData.number_of_locations
        ? Number(formData.number_of_locations)
        : 0,
      address: formData.address || "",
      approx_sq_ft: formData.approx_sq_ft ? Number(formData.approx_sq_ft) : 0,
      facility_type: formData.facility_type || "",
      frequency: formData.frequency || "",
      access_notes: formData.access_notes || "",
      Janitorial: Number(formData.Janitorial ? 1 : 0),
      Cleaning: Number(formData.Cleaning ? 1 : 0),
      Disinfection: Number(formData.Disinfection ? 1 : 0),
      Carpet_Cleaning: Number(formData.Carpet_Cleaning ? 1 : 0),
    };
    return payload;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    if (!formData.name || !formData.email || !formData.phone) {
      setErrors({ submit: "Please complete required fields" });
      setLoading(false);
      return;
    }

    const payload = buildPayload();

    try {
      
      await api.post("/quote", payload);
      setSubmitted(true);
      
      setFormData({
        name: "",
        phone: "",
        email: "",
        commercial: 1,
        company: "",
        number_of_locations: "",
        address: "",
        approx_sq_ft: "",
        facility_type: "",
        frequency: "",
        access_notes: "",
        Janitorial: 0,
        Cleaning: 0,
        Disinfection: 0,
        Carpet_Cleaning: 0,
      });
      setStep(1);
    } catch (err) {
      console.error("Error submitting quote:", err);
      // show message from backend if present
      const msg =
        err?.response?.data?.message || "Something went wrong. Please try again.";
      setErrors({ submit: msg });
      alert(`❌ ${msg}`);
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
                  {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                    required
                  />
                  {errors.phone && <div className="text-red-500 text-sm">{errors.phone}</div>}

                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                    required
                  />
                  {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}

                  <div>
                    <label className="mr-4">
                      <input
                        type="radio"
                        name="serviceType"
                        value="Commercial"
                        checked={formData.commercial === 1}
                        onChange={handleChange}
                      />{" "}
                      Commercial
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="serviceType"
                        value="Residential"
                        checked={formData.commercial === 0}
                        onChange={handleChange}
                      />{" "}
                      Residential Building
                    </label>
                  </div>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition cursor-pointer"
                  >
                    Next
                  </button>
                </div>
              )}

              {/* Step 2 - Commercial fields */}
              {step === 2 && formData.commercial === 1 && (
                <div className="space-y-4">
                  <input
                    name="company"
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                  />

                  <input
                    name="number_of_locations"
                    type="number"
                    placeholder="Number of Locations"
                    value={formData.number_of_locations}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                  />

                  <input
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                  />

                  <input
                    name="approx_sq_ft"
                    placeholder="Approx. Sq. Ft."
                    value={formData.approx_sq_ft}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                  />

                  <input
                    name="facility_type"
                    placeholder="Facility Type"
                    value={formData.facility_type}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                  />

                  <input
                    name="frequency"
                    placeholder="Frequency (e.g. Weekly)"
                    value={formData.frequency}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                  />

                  <textarea
                    name="access_notes"
                    placeholder="Access Notes"
                    value={formData.access_notes}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                  />

                  <fieldset>
                    <legend className="font-semibold mb-2">Services Needed</legend>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { key: "Janitorial", label: "Janitorial" },
                        { key: "Cleaning", label: "Cleaning" },
                        { key: "Disinfection", label: "Disinfection" },
                        { key: "Carpet_Cleaning", label: "Carpet Cleaning" },
                      ].map((s) => (
                        <label key={s.key} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            name={s.key}
                            checked={formData[s.key] === 1}
                            onChange={handleChange}
                          />
                          <span>{s.label}</span>
                        </label>
                      ))}
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

              {/* Step 2 - Residential (if needed) */}
              {step === 2 && formData.commercial === 0 && (
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

              {errors.submit && <div className="text-red-500">{errors.submit}</div>}
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

          <div className="mt-10 border-t pt-6 text-sm text-gray-500">
            <p className="text-center">
              <strong className="font-bold text-gray-700">By submitting, you agree to our{" "}</strong>
              <Link to="/privacy-policy" className="text-blue-600 underline font-semibold">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
