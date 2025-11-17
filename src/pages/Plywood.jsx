// Plywood.jsx
import React, { useState } from "react";

import img710 from "../assests/Plywood/710.png";
import imgCentury from "../assests/Plywood/Century.png";
import imgEcoTech from "../assests/Plywood/EcoTech.png";
import imgEcoTechWater from "../assests/Plywood/EcoTechWater.png";
import imgGreenMr from "../assests/Plywood/GreenMr.png";
import imgMr from "../assests/Plywood/Mr.png";
import imgRoyalClub from "../assests/Plywood/RoyalClub.png";

const plywoodData = [
  {
    id: 1,
    name: "710 BWP Plywood",
    image: img710,
    features: [
      "Boiling-water-proof grade",
      "Marine-grade durability",
      "100% waterproof",
      "Fungus & borer resistant",
      "15-year warranty",
    ],
    specifications: {
      material: "Gurjan face & core",
      thickness: "6 mm – 25 mm",
      glue: "Phenol formaldehyde",
      warranty: "15 years",
      finish: "Raw / Veneer / Laminate",
    },
  },
  {
    id: 2,
    name: "Century Plywood",
    image: imgCentury,
    features: [
      "Nation-wide trusted brand",
      "Virokill technology option",
      "Borer & termite resistant",
      "Calibrated thickness",
      "10- to lifetime warranty",
    ],
    specifications: {
      material: "Hardwood / Gurjan",
      thickness: "4 mm – 25 mm",
      glue: "MR / BWP / Fire-retardant",
      warranty: "10 – Lifetime*",
      finish: "Raw / Laminate / Veneer",
    },
  },
  {
    id: 3,
    name: "EcoTech MR Plywood",
    image: imgEcoTech,
    features: [
      "Low-emission eco bond",
      "Moisture-resistant for interiors",
      "High-density core",
      "Precision calibrated",
      "7-year warranty",
    ],
    specifications: {
      material: "Plantation hardwood",
      thickness: "4 mm – 18 mm",
      glue: "E-zero MR glue",
      warranty: "7 years",
      finish: "Natural / Paint / Laminate",
    },
  },
  {
    id: 4,
    name: "EcoTec Waterproof Plywood",
    image: imgEcoTechWater,
    features: [
      "Exterior water-proof grade",
      "Triple-core compression",
      "Weather & termite shield",
      "Zero surface core gaps",
      "Lifetime warranty*",
    ],
    specifications: {
      material: "100% Gurjan",
      thickness: "12 mm – 25 mm",
      glue: "BWP phenol bond",
      warranty: "Lifetime*",
      finish: "Raw / Veneer",
    },
  },
  {
    id: 5,
    name: "Green MR Plywood",
    image: imgGreenMr,
    features: [
      "Moisture-resistant interior grade",
      "Eco-friendly E-zero emission",
      "Borer & termite proof",
      "10-year warranty",
      "Ready to laminate / paint",
    ],
    specifications: {
      material: "Hardwood + Gurjan veneer",
      thickness: "4 mm – 25 mm",
      glue: "UF resin (MR)",
      warranty: "10 years",
      finish: "Natural / Veneer / Laminate",
    },
  },
  {
    id: 6,
    name: "MR Plywood",
    image: imgMr,
    features: [
      "Interior moisture resistance",
      "Economical pricing",
      "Consistent thickness",
      "High screw-holding strength",
      "Suitable for furniture & paneling",
    ],
    specifications: {
      material: "Mixed hardwood",
      thickness: "4 mm – 19 mm",
      glue: "UF resin (MR)",
      warranty: "5 years",
      finish: "Raw / Laminate",
    },
  },
  {
    id: 7,
    name: "Royal Club Plywood",
    image: imgRoyalClub,
    features: [
      "Premium face veneer",
      "Core composed of seasoned wood",
      "Extra-thick face for sanding",
      "Warp-free construction",
      "12-year warranty",
    ],
    specifications: {
      material: "Hardwood + Gurjan",
      thickness: "6 mm – 30 mm",
      glue: "MR / BWP optional",
      warranty: "12 years",
      finish: "Natural / Designer veneer",
    },
  },
];

export default function Plywood() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-green-50 to-amber-50 py-12 px-6">
      {/* Header */}
      <div className="text-center mb-12 animate-fade-in-down">
        <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-green-800 to-amber-800 bg-clip-text text-transparent">
          Plywood Collection
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-green-800 to-amber-800 mx-auto rounded-full" />
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plywoodData.map((p, idx) => (
          <div
            key={p.id}
            onMouseEnter={() => setHovered(p.id)}
            onMouseLeave={() => setHovered(null)}
            className={`rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-3 animate-slide-up group
              ${
                hovered === p.id
                  ? "shadow-2xl bg-gradient-to-r from-green-900 via-green-800 to-amber-900/95 backdrop-blur-md"
                  : "bg-gradient-to-r from-green-900 via-green-800 to-amber-900/90 backdrop-blur-sm"
              }`}
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            {/* IMAGE */}
            <div className="relative w-full h-64 bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 group">

              {/* Image */}
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-full object-contain p-3 transition-all duration-500 group-hover:scale-105"
              />

              {/* Badge */}
              <div className="absolute top-3 left-3 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md tracking-wide">
                {p.name}
              </div>

              {/* Subtle hover glow */}
              <div className="absolute inset-0 group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)] transition-all duration-500 pointer-events-none"></div>

            </div>


            {/* CONTENT */}
            <div className="p-6 text-white">
              <h2 className="text-xl font-bold text-amber-100 mb-2">{p.name}</h2>

              {/* Features */}
              <h3 className="font-bold text-amber-100 mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
                <span className="w-1 h-4 bg-amber-400 rounded-full" />
                Features
              </h3>
              <ul className="space-y-2 mb-5">
                {p.features.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-amber-50 text-sm transform transition-all duration-300 hover:translate-x-1"
                    style={{
                      animationDelay: `${hovered === p.id ? i * 50 : 0}ms`,
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
                {Object.entries(p.specifications).map(([k, v]) => (
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