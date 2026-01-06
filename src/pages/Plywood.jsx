// PlywoodPremium.jsx
import React, { useState } from "react";

import imgCenturyClubPrime from "../assests/Plywood/Century club prime.png";
import imgCenturyWinMr from "../assests/Plywood/Century win mr.png";
import imgClubwood710BWP from "../assests/Plywood/Clubwood 710 BWP.png";
import imgEcotec710BWP from "../assests/Plywood/Ecotec 710 BWP.png";
import imgEcotec710 from "../assests/Plywood/Ecotec 710.png";
import imgEcotecMr from "../assests/Plywood/Ecotec mr.png";
import imgGreenClub500 from "../assests/Plywood/Green club 500.png";
import imgGreenMR from "../assests/Plywood/Green MR.png";
import imgGreenply710 from "../assests/Plywood/Greenply 710.png";
import imgGreenplyMR from "../assests/Plywood/GREENPLY MR.png";
import imgRoyalClub710 from "../assests/Plywood/Royal club 710.png";
import imgRoyalClubBWR32 from "../assests/Plywood/Royal club BWR 32.png";
import imgRoyalClubBWR from "../assests/Plywood/Royal club BWR.png";
import imgSainik710 from "../assests/Plywood/Sainik 710.png";
import imgSainikMR from "../assests/Plywood/Sainik MR.png";

const plywoodData = [
  {
    id: 1,
    name: "Century Club Prime",
    image: imgCenturyClubPrime,
    features: [
      "Premium club series plywood",
      "Advanced ViroKill technology",
      "Superior borer & termite protection",
      "Calibrated for precision fit",
      "15-year warranty",
    ],
    specifications: {
      material: "Gurjan face & core",
      thickness: "6-25mm",
      glue: "BWP phenol formaldehyde",
      warranty: "15 years",
      finish: "Raw / Premium Veneer",
    },
  },
  {
    id: 2,
    name: "Century Win MR",
    image: imgCenturyWinMr,
    features: [
      "Winner series for interiors",
      "Moisture-resistant properties",
      "High dimensional stability",
      "Smooth face for finishing",
      "10-year warranty",
    ],
    specifications: {
      material: "Hardwood core",
      thickness: "6-25mm",
      glue: "Urea formaldehyde (MR)",
      warranty: "10 years",
      finish: "Natural / Laminate / Paint",
    },
  },
  {
    id: 3,
    name: "Clubwood 710 BWP",
    image: imgClubwood710BWP,
    features: [
      "Boiling water proof grade",
      "Enhanced marine durability",
      "100% waterproof protection",
      "Anti-fungal treatment",
      "20-year warranty",
    ],
    specifications: {
      material: "100% Gurjan",
      thickness: "6-25mm",
      glue: "Phenol formaldehyde BWP",
      warranty: "20 years",
      finish: "Raw / Veneer",
    },
  },
  {
    id: 4,
    name: "Ecotec 710 BWP",
    image: imgEcotec710BWP,
    features: [
      "Eco-friendly BWP grade",
      "Marine-grade waterproofing",
      "Low emission technology",
      "Weather & termite resistant",
      "Lifetime warranty*",
    ],
    specifications: {
      material: "Gurjan hardwood",
      thickness: "6-25mm",
      glue: "E-zero BWP phenol",
      warranty: "Lifetime*",
      finish: "Raw / Natural Veneer",
    },
  },
  {
    id: 5,
    name: "Ecotec 710",
    image: imgEcotec710,
    features: [
      "Premium 710 series",
      "High-density compression",
      "Borer & termite proof",
      "Consistent thickness calibration",
      "12-year warranty",
    ],
    specifications: {
      material: "Hardwood + Gurjan veneer",
      thickness: "6-25mm",
      glue: "Phenolic resin",
      warranty: "12 years",
      finish: "Natural / Laminate",
    },
  },
  {
    id: 6,
    name: "Ecotec MR",
    image: imgEcotecMr,
    features: [
      "Eco-friendly interior grade",
      "E-zero emission standard",
      "Moisture-resistant core",
      "High screw-holding capacity",
      "8-year warranty",
    ],
    specifications: {
      material: "Plantation hardwood",
      thickness: "6-25mm",
      glue: "E-zero MR resin",
      warranty: "8 years",
      finish: "Natural / Paint / Laminate",
    },
  },
  {
    id: 7,
    name: "Green Club 500",
    image: imgGreenClub500,
    features: [
      "Premium club 500 series",
      "Enhanced durability",
      "Warp-free construction",
      "Termite & borer treatment",
      "15-year warranty",
    ],
    specifications: {
      material: "Hardwood + Gurjan",
      thickness: "6-25mm",
      glue: "MR / BWR optional",
      warranty: "15 years",
      finish: "Raw / Designer Veneer",
    },
  },
  {
    id: 8,
    name: "Green MR",
    image: imgGreenMR,
    features: [
      "Interior moisture-resistant",
      "Eco-friendly formulation",
      "Termite & borer proof",
      "Ready for lamination",
      "10-year warranty",
    ],
    specifications: {
      material: "Mixed hardwood",
      thickness: "6-25mm",
      glue: "UF resin (MR)",
      warranty: "10 years",
      finish: "Natural / Laminate",
    },
  },
  {
    id: 9,
    name: "Greenply 710",
    image: imgGreenply710,
    features: [
      "Trusted Greenply brand",
      "Superior 710 grade quality",
      "Moisture & borer resistant",
      "High-strength core",
      "12-year warranty",
    ],
    specifications: {
      material: "Gurjan + Hardwood",
      thickness: "6-25mm",
      glue: "Phenolic BWP",
      warranty: "12 years",
      finish: "Raw / Veneer",
    },
  },
  {
    id: 10,
    name: "Greenply MR",
    image: imgGreenplyMR,
    features: [
      "Standard MR grade plywood",
      "Moisture-resistant properties",
      "Economical pricing",
      "Consistent quality control",
      "7-year warranty",
    ],
    specifications: {
      material: "Hardwood core",
      thickness: "6-25mm",
      glue: "Urea formaldehyde (MR)",
      warranty: "7 years",
      finish: "Raw / Laminate",
    },
  },
  {
    id: 11,
    name: "Royal Club 710",
    image: imgRoyalClub710,
    features: [
      "Royal premium series",
      "Extra-thick face veneer",
      "Seasoned wood core",
      "Superior finishing quality",
      "15-year warranty",
    ],
    specifications: {
      material: "Gurjan face + Hardwood",
      thickness: "6-25mm",
      glue: "BWP / BWR grade",
      warranty: "15 years",
      finish: "Natural / Designer Veneer",
    },
  },
  {
    id: 12,
    name: "Royal Club BWR 32",
    image: imgRoyalClubBWR32,
    features: [
      "Boil water resistant grade",
      "32mm specialized thickness",
      "Weather-resistant properties",
      "Warp-free technology",
      "12-year warranty",
    ],
    specifications: {
      material: "Hardwood + Gurjan veneer",
      thickness: "6-25mm",
      glue: "BWR resin",
      warranty: "12 years",
      finish: "Raw / Veneer / Laminate",
    },
  },
  {
    id: 13,
    name: "Royal Club BWR",
    image: imgRoyalClubBWR,
    features: [
      "Boil water resistant series",
      "Exterior grade protection",
      "High-density compression",
      "Termite & borer shield",
      "15-year warranty",
    ],
    specifications: {
      material: "Gurjan + Hardwood",
      thickness: "6-25mm",
      glue: "BWR phenolic resin",
      warranty: "15 years",
      finish: "Natural / Veneer",
    },
  },
  {
    id: 14,
    name: "Sainik 710",
    image: imgSainik710,
    features: [
      "Sainik trusted quality",
      "710 premium grade",
      "Marine-grade waterproofing",
      "Borer & termite treatment",
      "15-year warranty",
    ],
    specifications: {
      material: "100% Gurjan",
      thickness: "6-25mm",
      glue: "BWP phenol formaldehyde",
      warranty: "15 years",
      finish: "Raw / Veneer",
    },
  },
  {
    id: 15,
    name: "Sainik MR",
    image: imgSainikMR,
    features: [
      "Moisture-resistant interior grade",
      "Reliable Sainik brand",
      "Cost-effective solution",
      "Consistent thickness",
      "8-year warranty",
    ],
    specifications: {
      material: "Hardwood core",
      thickness: "6-25mm",
      glue: "UF resin (MR)",
      warranty: "8 years",
      finish: "Raw / Laminate / Paint",
    },
  },
];

export default function PlywoodPremium() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-green-50 to-amber-50 py-12 px-6">
      {/* Header */}
      <div className="text-center mb-12 animate-fade-in-down ">
        <h1 className="text-5xl p-3 font-bold mb-3 bg-gradient-to-r from-green-800 to-amber-800 bg-clip-text text-transparent">
          Plywood
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