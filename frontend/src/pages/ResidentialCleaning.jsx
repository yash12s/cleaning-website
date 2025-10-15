import { Helmet } from "react-helmet-async";
import { CheckCircle, Shield, Clock } from "lucide-react";

export default function ResidentialCleaning() {
  return (
    <div className="bg-gray-50">
      {/* SEO */}
      <Helmet>
        <title>
          Residential Building Cleaning Vancouver | Strata & Condo Common Areas
        </title>
        <meta
          name="description"
          content="Strata/condo/apartment common-area cleaning with floor-care expertise. Monthly & one-time service. Free estimates."
        />
      </Helmet>

      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20 px-6 text-center shadow-lg">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Residential Building Cleaning - Strata, Condo & Apartment (Vancouver)
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Clean, safe common areas residents notice. Consistent checklists,
            trained teams, and reliable schedules.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-12">
        {/* Areas & Tasks */}
        <section className="bg-white shadow-md rounded-2xl p-8 space-y-10">
          <h2 className="text-2xl font-semibold relative inline-block">
            Areas & Tasks
            <span className="absolute left-0 -bottom-1 w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 rounded"></span>
          </h2>

          {/* Common Areas */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Common Areas</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {["Lobbies", "Corridors", "Elevators", "Stairwells", "Mailrooms"].map(
                (item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Amenities */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Amenities</h3>
            <div className="flex flex-wrap gap-3">
              {["Gyms", "Lounges", "Party rooms", "Rooftops"].map((amenity, i) => (
                <span
                  key={i}
                  className="px-5 py-2 bg-gradient-to-r from-gray-100 to-gray-50 rounded-full text-gray-800 font-medium shadow-sm hover:shadow-md hover:scale-105 transition"
                >
                  {amenity}
                </span>
              ))}
            </div>
          </div>

          {/* Back of House */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Back-of-House</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Garbage/recycling rooms",
                "Loading areas",
                "Mechanical rooms (light cleaning)",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Floors */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Floors</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Sweep/mop",
                "Vacuum",
                "Periodic machine scrub & floor finish",
                "Carpet care",
              ].map((task, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">{task}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Exterior Touchpoints */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Exterior Touchpoints (as scoped)
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {["Entry glass", "Spot pressure washing", "Litter sweep"].map(
                (task, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">{task}</span>
                  </div>
                )
              )}
            </div>
          </div>

        </section>

        {/* Frequency */}
        <section className="bg-white shadow-md rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-8 relative inline-block">
            Frequency
            <span className="absolute left-0 -bottom-1 w-24 h-1 bg-gradient-to-r from-green-600 to-blue-500 rounded"></span>
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Weekly",
              "Monthly",
              "Custom schedules by zone",
              "One-time projects available",
            ].map((freq, i) => (
              <span
                key={i}
                className="flex items-center px-6 py-2 bg-gradient-to-r from-green-100 to-green-50 text-green-700 font-medium rounded-full shadow-sm hover:shadow-md hover:scale-105 transition"
              >
                <Clock className="w-4 h-4 mr-2 text-green-600" />
                {freq}
              </span>
            ))}
          </div>
        </section>

        {/* Credentials */}
        <section className="bg-white shadow-md rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-8 relative inline-block">
            Credentials
            <span className="absolute left-0 -bottom-1 w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 rounded"></span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Since 2009",
              "WHMIS & First Aid trained",
              "Key/FOB & alarm protocols",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
              >
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center mt-6">
          <a
            href="/quote"
            className="bg-blue-600 text-white px-10 py-5 rounded-2xl text-lg font-semibold shadow-xl hover:bg-blue-700 hover:shadow-2xl transition-transform transform hover:-translate-y-1"
          >
            Get a Residential Building Quote
          </a>
        </section>
      </div>
    </div>
  );
}
