// Laminates.jsx
import React, { useState } from "react";
import BlackCobraLaminates from "../assests/Laminates/Black-Cobra-Laminates.png"; 
import GreenLamLaminates from "../assests/Laminates/Greenlam.png";
import RoyalTouchLaminates from "../assests/Laminates/Royal_touch.png";
import Century from "../assests/Laminates/Century.png"
import MeriloLamp from "../assests/Laminates/Merilo.png";


const laminateData = [
  {
    id: 1,
    name: "Green Lam Laminates",
    image: GreenLamLaminates,
    features: [
      "Premium decorative surface",
      "Scratch & scuff resistant",
      "Anti-fingerprint technology",
      "Over 300 designs",
      "10-year warranty",
    ],
    specifications: {
      thickness: "0.8 mm / 1 mm",
      sheetSize: "8 ft × 4 ft",
      finish: "Matte / Gloss / Texture",
      warranty: "10 years",
      application: "Furniture, Wall, Door",
    },
  },
  {
    id: 2,
    name: "Black Cobra Laminates",
    image: BlackCobraLaminates,
    features: [
      "High-abrasion overlay",
      "Deep colour fastness",
      "Anti-bacterial surface",
      "Synchro-pore texture",
      "12-year warranty",
    ],
    specifications: {
      thickness: "0.8 mm / 1 mm",
      sheetSize: "8 ft × 4 ft",
      finish: "Synchro / Matte / Gloss",
      warranty: "12 years",
      application: "Commercial & Residential",
    },
  },
  {
    id: 3,
    name: "Royal Touch Laminates",
    image: RoyalTouchLaminates,
    features: [
      "Velvet-soft finish",
      "Fingerprint-free",
      "Premium colour palette",
      "High-scratch resistance",
      "10-year warranty",
    ],
    specifications: {
      thickness: "0.8 mm",
      sheetSize: "8 ft × 4 ft",
      finish: "Velvet / Matte",
      warranty: "10 years",
      application: "Bedroom, Living, Hospitality",
    },
  },
  {
    id: 4,
    name: "Century Laminates",
    image: Century,
    features: [
      "Virokill anti-viral technology",
      "Fire-retardant grades",
      "Suede, Gloss, Matt finishes",
      "Over 400+ designs",
      "Lifetime warranty*",
    ],
    specifications: {
      thickness: "0.7 mm – 1.5 mm",
      sheetSize: "8 ft × 4 ft",
      finish: "Suede / Gloss / Matt",
      warranty: "Lifetime*",
      application: "Furniture, Wall, Door",
    },
  },
  {
    id: 5,
    name: "Merilo Lamp Laminates",
    image: MeriloLamp,
    features: [
      "Synchronised texture",
      "Natural wood feel",
      "Anti-scuff surface",
      "Trendy colour range",
      "10-year warranty",
    ],
    specifications: {
      thickness: "0.8 mm",
      sheetSize: "8 ft × 4 ft",
      finish: "Sync-pore / Matte",
      warranty: "10 years",
      application: "Furniture, Wall Panels",
    },
  },
];

export default function Laminates() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-green-50 to-amber-50 py-12 px-6">
      {/* Header */}
      <div className="text-center mb-12 animate-fade-in-down">
        <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-green-800 to-amber-800 bg-clip-text text-transparent">
          Decorative Laminates
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-green-800 to-amber-800 mx-auto rounded-full" />
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {laminateData.map((p, idx) => (
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
            <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
              <img
                src={p.image}
                alt={p.name}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Badge */}
              <div className="absolute top-4 left-4 bg-amber-100/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300 border border-amber-200">
                <span className="text-sm font-semibold text-green-900">
                  {p.name}
                </span>
              </div>
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