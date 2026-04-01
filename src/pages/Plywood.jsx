import React from "react";

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
  { id: 1, name: "Century Club Prime", category: "BWP", image: imgCenturyClubPrime, features: ["Premium club series plywood"], specifications: { thickness: "6-25mm", warranty: "Brand Warranty" } },
  { id: 2, name: "Century Win MR", category: "MR", image: imgCenturyWinMr, features: ["Moisture-resistant"], specifications: { thickness: "6-25mm", warranty: "Brand Warranty" } },
  { id: 3, name: "Clubwood 710 BWP", category: "BWP", image: imgClubwood710BWP, features: ["Boiling water proof"], specifications: { thickness: "6-25mm", warranty: "Brand Warranty" } },
  { id: 4, name: "Ecotec 710 BWP", category: "BWP", image: imgEcotec710BWP, features: ["Marine grade"], specifications: { thickness: "6-25mm", warranty: "Brand Warranty" } },
  { id: 5, name: "Ecotec 710", category: "BWR", image: imgEcotec710, features: ["710 grade"], specifications: { thickness: "6-25mm", warranty: "Brand Warranty" } },
  { id: 6, name: "Ecotec MR", category: "MR", image: imgEcotecMr, features: ["Eco MR"], specifications: { thickness: "6-25mm", warranty: "Brand Warranty" } },
  { id: 7, name: "Green Club 500", category: "BWR", image: imgGreenClub500, features: ["Durable"], specifications: { thickness: "6-25mm", warranty: "Brand Warranty" } },
  { id: 8, name: "Green MR", category: "MR", image: imgGreenMR, features: ["Interior MR"], specifications: { thickness: "6-25mm", warranty: "Brand Warranty" } },
  { id: 9, name: "Greenply 710", category: "BWP", image: imgGreenply710, features: ["Premium 710"], specifications: { thickness: "6-25mm", warranty: "Brand Warranty" } },
  { id: 10, name: "Greenply MR", category: "MR", image: imgGreenplyMR, features: ["Standard MR"], specifications: { thickness: "6-25mm", warranty: "Brand Warranty" } },
  { id: 11, name: "Royal Club 710", category: "BWP", image: imgRoyalClub710, features: ["Royal series"], specifications: { thickness: "6-25mm", warranty: "Brand Warranty" } },
  { id: 12, name: "Royal Club BWR 32", category: "BWR", image: imgRoyalClubBWR32, features: ["BWR 32mm"], specifications: { thickness: "6-25mm", warranty: "Brand Warranty" } },
  { id: 13, name: "Royal Club BWR", category: "BWR", image: imgRoyalClubBWR, features: ["BWR"], specifications: { thickness: "6-25mm", warranty: "Brand Warranty" } },
  { id: 14, name: "Sainik 710", category: "BWP", image: imgSainik710, features: ["Sainik 710"], specifications: { thickness: "6-25mm", warranty: "Brand Warranty" } },
  { id: 15, name: "Sainik MR", category: "MR", image: imgSainikMR, features: ["Sainik MR"], specifications: { thickness: "6-25mm", warranty: "Brand Warranty" } },
];

export default function PlywoodPremium() {
  const [selectedCategory, setSelectedCategory] = React.useState("MR");

  const categories = [
    { name: "MR / Commercial", value: "MR" },
    { name: "BWR (IS:303)", value: "BWR" },
    { name: "BWP / Marine", value: "BWP" },
  ];

  const filteredData = plywoodData.filter(
    (p) => p.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-green-50 to-amber-50 py-12 px-6">

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-3 text-green-900">Plywood</h1>
      </div>

      {/* Category Buttons */}
      <div className="flex justify-center gap-6 mb-12 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setSelectedCategory(cat.value)}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300
              ${
                selectedCategory === cat.value
                  ? "bg-green-800 text-white"
                  : "bg-white text-green-900 border border-green-300"
              }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredData.map((p) => (
          <div
            key={p.id}
            className="rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-3 bg-gradient-to-r from-green-900 to-amber-900 text-white"
          >
            {/* Image */}
            <div className="w-full h-64 bg-white">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-full object-contain p-3"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{p.name}</h2>

              <ul className="mb-4 text-sm">
                {p.features.map((f, i) => (
                  <li key={i}>✔ {f}</li>
                ))}
              </ul>

              <div className="text-sm">
                {Object.entries(p.specifications).map(([k, v]) => (
                  <div key={k} className="flex justify-between">
                    <span>{k}</span>
                    <span>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}