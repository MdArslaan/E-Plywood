// DoorPremium.jsx
import React, { useState } from "react";
import BwpDoorClubWood from "../assests/Door/Bwp door club wood.png";
import ClubwoodBwpDoor from "../assests/Door/Clubwood bwp door.png";
import SanikDoor from "../assests/Door/SainkDoor.png";

const doors = [
  {
    id: 1,
    name: "BWP Door Club Wood",
    image: BwpDoorClubWood,
    features: [
      "Boiling water proof grade construction",
      "Premium club wood series",
      "Marine-grade waterproofing technology",
      "Termite and borer resistant",
      "Suitable for high-moisture areas",
    ],
    specifications: {
      Material: "Gurjan BWP Plywood",
      Thickness: "32 mm – 35 mm",
      Core: "Hardwood + BWP grade ply",
      Finish: "Natural / Veneer / Laminate",
      Warranty: "15 years",
    },
  },
  {
    id: 2,
    name: "Clubwood BWP Door",
    image: ClubwoodBwpDoor,
    features: [
      "100% waterproof construction",
      "Heavy-duty frame and stiles",
      "Weather-resistant for exteriors",
      "Fungus and moisture proof",
      "Commercial-grade durability",
    ],
    specifications: {
      Material: "BWP Marine Plywood",
      Thickness: "32 mm – 35 mm",
      Core: "Multi-ply hardwood",
      Finish: "Raw / Laminate / Polish",
      Warranty: "20 years",
    },
  },
  {
    id: 3,
    name: "Sainik Door",
    image: SanikDoor,
    features: [
      "Trusted Sainik brand quality",
      "Hardwood frame construction",
      "Pre-seasoned to prevent warping",
      "Cost-effective solution",
      "Ideal for interior applications",
    ],
    specifications: {
      Material: "Hardwood + MR Plywood",
      Thickness: "32 mm – 35 mm",
      Core: "Engineered wood core",
      Finish: "Teak polish / Natural",
      Warranty: "10 years",
    },
  },
];

export default function DoorPremium() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-green-50 to-amber-50 py-12 px-6">
      {/* Header */}
      <div className="text-center mb-12 animate-fade-in-down">
        <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-green-800 to-amber-800 bg-clip-text text-transparent">
          Premium Door Collection
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-green-800 to-amber-800 mx-auto rounded-full" />
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {doors.map((d, idx) => (
          <div
            key={d.id}
            onMouseEnter={() => setHovered(d.id)}
            onMouseLeave={() => setHovered(null)}
            className={`rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-3 animate-slide-up group
              ${hovered === d.id
                ? "shadow-2xl bg-gradient-to-r from-green-900 via-green-800 to-amber-900/95 backdrop-blur-md"
                : "bg-gradient-to-r from-green-900 via-green-800 to-amber-900/90 backdrop-blur-sm"
              }`}
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            {/* IMAGE */}
            <div className="relative w-full h-64 bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 group">

              {/* Image */}
              <img
                src={d.image}
                alt={d.name}
                className="w-full h-full object-contain p-3 transition-all duration-500 group-hover:scale-105"
              />

              {/* Badge */}
              <div className="absolute top-3 left-3 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md tracking-wide">
                {d.name}
              </div>

              {/* Subtle hover glow */}
              <div className="absolute inset-0 group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)] transition-all duration-500 pointer-events-none"></div>

            </div>


            {/* CONTENT */}
            <div className="p-6 text-white">
              <h2 className="text-xl font-bold text-amber-100 mb-2">{d.name}</h2>

              {/* Features */}
              <h3 className="font-bold text-amber-100 mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
                <span className="w-1 h-4 bg-amber-400 rounded-full" />
                Features
              </h3>
              <ul className="space-y-2 mb-5">
                {d.features.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-amber-50 text-sm transform transition-all duration-300 hover:translate-x-1"
                    style={{
                      animationDelay: `${hovered === d.id ? i * 50 : 0}ms`,
                    }}
                  >
                    <svg
                      className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {/* Specifications */}
              <h3 className="font-bold text-amber-100 mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
                <span className="w-1 h-4 bg-green-400 rounded-full" />
                Specifications
              </h3>
              <div className="bg-green-950/30 rounded-xl p-4 space-y-2 backdrop-blur-sm border border-green-800/30">
                {Object.entries(d.specifications).map(([k, v]) => (
                  <div
                    key={k}
                    className="flex justify-between items-center py-2 border-b border-amber-700/30 last:border-0 text-sm hover:bg-green-800/20 hover:px-2 rounded transition-all duration-200"
                  >
                    <span className="font-medium text-amber-200">
                      {k
                        .replace(/[_-]/g, " ")
                        .split(" ")
                        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                        .join(" ")}
                    </span>
                    <span className="text-amber-50 font-semibold">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative Line */}
            <div className="h-1 bg-gradient-to-r from-amber-500 via-green-500 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </div>
        ))}
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fade-in-down {
          animation: fadeInDown 1s ease-out;
        }
        .animate-slide-up {
          animation: slideUp 0.6s ease-out both;
        }
      `}</style>
    </div>
  );
}