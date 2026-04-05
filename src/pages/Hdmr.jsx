import React, { useState } from "react";

import Greenpanel from "../assests/HDMR/Greenpanel.png";
import Greenply from "../assests/HDMR/Greenply.png";
import ActionTesa from "../assests/HDMR/Action.png";

import GreenPanelMDF from "../assests/MDF/Greenpanel.png";
import GreenplyMDF from "../assests/MDF/Greenply.png";

const data = [
  // ✅ HDMR
  {
    id: 1,
    name: "Greenply HDMR",
    category: "HDMR",
    image: Greenply,
    features: ["Premium HDMR board"],
    specifications: { size: "3mm – 35mm" },
  },
  {
    id: 2,
    name: "Greenpanel HDMR",
    category: "HDMR",
    image: Greenpanel,
    features: ["High-density moisture resistant"],
    specifications: { size: "3mm – 35mm" },
  },
  {
    id: 3,
    name: "Action Tesa HDMR",
    category: "HDMR",
    image: ActionTesa,
    features: ["German technology"],
    specifications: { size: "3mm – 35mm" },
  },
  {
    id: 4,
    name: "Local & Imported HDMR",
    category: "HDMR",
    image: Greenply,
    features: ["Budget & imported range"],
    specifications: { size: "3mm – 35mm" },
  },

  // ✅ MDF
  {
    id: 5,
    name: "Greenply MDF",
    category: "MDF",
    image: GreenplyMDF,
    features: ["Smooth surface MDF"],
    specifications: { size: "1.9mm – 35mm" },
  },
  {
    id: 6,
    name: "Greenpanel MDF",
    category: "MDF",
    image: GreenPanelMDF,
    features: ["Eco-friendly MDF"],
    specifications: { size: "1.9mm – 35mm" },
  },
  {
    id: 7,
    name: "Action Tesa MDF",
    category: "MDF",
    image: ActionTesa,
    features: ["Premium MDF"],
    specifications: { size: "1.9mm – 35mm" },
  },

  // ✅ BOLIO
  {
    id: 8,
    name: "Greenply Bolio",
    category: "Bolio",
    image: Greenply,
    features: ["HDHMR premium board"],
    specifications: { size: "8mm – 18mm" },
  },
  {
    id: 9,
    name: "Greenpanel Bolio",
    category: "Bolio",
    image: Greenpanel,
    features: ["Waterproof board"],
    specifications: { size: "8mm – 18mm" },
  },
  {
    id: 10,
    name: "Action Tesa Bolio",
    category: "Bolio",
    image: ActionTesa,
    features: ["High-density board"],
    specifications: { size: "8mm – 18mm" },
  },
];

export default function PanelProducts() {
  const [selected, setSelected] = useState("HDMR");

  const categories = ["HDMR", "MDF", "Bolio"];

  const filtered = data.filter((item) => item.category === selected);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-green-50 to-amber-50 py-12 px-6">

      {/* HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-green-900">
          Panel Products
        </h1>
      </div>

      {/* ✅ BUTTONS (same color as plywood) */}
      <div className="flex justify-center gap-6 mb-12 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300
              ${
                selected === cat
                  ? "bg-green-800 text-white"
                  : "bg-white text-green-900 border border-green-300"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ✅ PRODUCTS */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((p) => (
          <div
            key={p.id}
            className="rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-3 bg-gradient-to-r from-green-900 to-amber-900 text-white"
          >
            {/* IMAGE */}
            <div className="w-full h-64 bg-white">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-full object-contain p-3"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{p.name}</h2>

              <ul className="mb-4 text-sm">
                {p.features.map((f, i) => (
                  <li key={i}>✔ {f}</li>
                ))}
              </ul>

              {/* SIZE (from your image) */}
              <div className="text-sm font-semibold flex justify-between">
                <span>Size</span>
                <span>{p.specifications.size}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}