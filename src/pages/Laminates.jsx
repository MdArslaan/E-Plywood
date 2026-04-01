import React, { useState } from "react";
import GreenLamLaminates from "../assests/Laminates/Greenlam.png";
import MeriloLamp from "../assests/Laminates/Merilo.png";
import RoyalTouchLaminates from "../assests/Laminates/Royal_touch.png";
import Century from "../assests/Laminates/Century.png";
import Skydecor from "../assests/Laminates/Skydecor.png";
import DivyaLam from "../assests/Laminates/DivyaLam.png";

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
      thickness: "0.6 mm / 3 mm",
      sheetSize: "8 ft × 4 ft",
      finish: "Matte / Gloss / Texture",
      warranty: "Brand Warranty",
      application: "Furniture, Wall, Door",
    },
  },
  {
    id: 2,
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
      thickness: "0.6 mm / 3 mm",
      sheetSize: "8 ft × 4 ft",
      finish: "Velvet / Matte",
      warranty: "Brand Warranty",
      application: "Bedroom, Living, Hospitality",
    },
  },
  {
    id: 3,
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
      thickness: "0.6 mm / 3 mm",
      sheetSize: "8 ft × 4 ft",
      finish: "Suede / Gloss / Matt",
      warranty: "Brand Warranty",
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
      thickness: "0.6 mm / 3 mm",
      sheetSize: "8 ft × 4 ft",
      finish: "Sync-pore / Matte",
      warranty: "Brand Warranty",
      application: "Furniture, Wall Panels",
    },
  },
  {
    id: 4,
    name: "Skydecor Laminates",
    image: Skydecor,
    features: [
      "Vibrant colour range",
      "High-pressure laminate",
      "Scratch & moisture resistant",
      "Wide design collection",
      "10-year warranty",
    ],
    specifications: {
      thickness: "0.6 mm / 3 mm",
      sheetSize: "8 ft × 4 ft",
      finish: "Matte / Gloss / Texture",
      warranty: "Brand Warranty",
      application: "Furniture, Wall, Door",
    },
  },
  {
    id: 6,
    name: "Divya Lam Laminates",
    image: DivyaLam,
    features: [
      "Rich texture surface",
      "Durable & long-lasting",
      "Anti-scratch coating",
      "Elegant design palette",
      "10-year warranty",
    ],
    specifications: {
      thickness: "0.6 mm / 3 mm",
      sheetSize: "8 ft × 4 ft",
      finish: "Matte / Gloss / Sync-pore",
      warranty: "Brand Warranty",
      application: "Furniture, Wall Panels",
    },
  },
];

export default function Laminates() {
  const [hovered, setHovered] = useState(null);

  // ✅ STATIC CATEGORY LABELS (NOT CLICKABLE)
  const laminateTypes = [
    "PVC",
    "Acrylic",
    "Liner / Inner",
    "0.8 mm",
    "1 mm",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-green-50 to-amber-50 py-12 px-6">
      
      {/* Header */}
      <div className="text-center mb-12 animate-fade-in-down">
        <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-green-800 to-amber-800 bg-clip-text text-transparent">
          Laminates
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-green-800 to-amber-800 mx-auto rounded-full" />
        
        {/* ✅ STATIC CATEGORY TAGS */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {laminateTypes.map((type, index) => (
            <div
              key={index}
              className="px-6 py-2 rounded-xl font-semibold
              bg-gradient-to-r from-green-800 to-amber-800 text-white
              shadow-md cursor-default"
            >
              {type}
            </div>
          ))}
        </div>
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

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute top-4 left-4 bg-amber-100/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-amber-200">
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
                    className="flex items-start gap-2 text-amber-50 text-sm"
                  >
                    ✔ {f}
                  </li>
                ))}
              </ul>

              {/* Specifications */}
              <h3 className="font-bold text-amber-100 mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
                <span className="w-1 h-4 bg-green-400 rounded-full" />
                Specifications
              </h3>

              <div className="bg-green-950/30 rounded-xl p-4 space-y-2 border border-green-800/30">
                {Object.entries(p.specifications).map(([k, v]) => (
                  <div key={k} className="flex justify-between text-sm">
                    <span className="text-amber-200">{k}</span>
                    <span className="text-amber-50">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-1 bg-gradient-to-r from-amber-500 via-green-500 to-amber-600" />
          </div>
        ))}
      </div>

      <h1 className="text-center m-4 p-6 text-3xl text-amber-950 font-semibold">
        Many More Trusted Brands on Order
      </h1>

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