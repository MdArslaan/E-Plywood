import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import products from "../data/products";

export default function Products() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-amber-50 via-green-50 to-amber-50 min-h-screen py-12 px-6">
      {/* Header */}
      <div className="text-center mb-12 animate-fade-in-down">
        <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-green-800 to-amber-800 bg-clip-text text-transparent">
          Our Products
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-green-800 to-amber-800 mx-auto rounded-full"></div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((item, index) => (
          <div
            key={item.id}
            onMouseEnter={() => setHoveredCard(item.id)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => navigate(`/products/${item.category.toLowerCase()}`)} // ✅ navigate dynamically
            className={`cursor-pointer ${
              hoveredCard === item.id
                ? "shadow-2xl bg-gradient-to-r from-green-900 via-green-800 to-amber-900/95 backdrop-blur-md"
                : "bg-gradient-to-r from-green-900 via-green-800 to-amber-900/90 backdrop-blur-sm"
            } shadow-lg rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-3 animate-slide-up group`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Product Image */}
            <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/600x450?text=No+Image";
                }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Category Badge */}
              <div className="absolute top-4 left-4 bg-amber-100/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300 border border-amber-200">
                <span className="text-sm font-semibold text-green-900">
                  {item.category}
                </span>
              </div>

              {/* Hover Icon */}
              <div className="absolute bottom-4 right-4 bg-green-700 text-white w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Description */}
              <h2 className="text-xl font-bold text-amber-100 mb-2">
                {item.name}
              </h2>
              <p className="text-amber-100 mb-5 text-sm leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                {item.description}
              </p>

              {/* Features */}
              <div className="mb-5">
                <h3 className="font-bold text-amber-100 mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
                  <span className="w-1 h-4 bg-amber-400 rounded-full"></span>
                  Features
                </h3>
                {Array.isArray(item.features) && item.features.length > 0 ? (
                  <ul className="space-y-2">
                    {item.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-amber-50 text-sm transform transition-all duration-300 hover:translate-x-1"
                        style={{
                          animationDelay: `${
                            hoveredCard === item.id ? idx * 50 : 0
                          }ms`,
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
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-amber-200/50 italic">
                    No features listed.
                  </p>
                )}
              </div>

              {/* Specifications */}
              <div className="mb-2">
                <h3 className="font-bold text-amber-100 mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
                  <span className="w-1 h-4 bg-green-400 rounded-full"></span>
                  Specifications
                </h3>

                {Array.isArray(item.specifications) ? (
                  <ul className="space-y-1 text-sm">
                    {item.specifications.map((spec, idx) => (
                      <li
                        key={idx}
                        className="text-amber-50 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-amber-300 rounded-full"></span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                ) : item.specifications &&
                  typeof item.specifications === "object" ? (
                  <div className="bg-green-950/30 rounded-xl p-4 space-y-2 backdrop-blur-sm border border-green-800/30">
                    {Object.entries(item.specifications).map(
                      ([key, value], idx) => (
                        <div
                          key={key}
                          className="flex justify-between items-center py-2 border-b border-amber-700/30 last:border-0 text-sm hover:bg-green-800/20 hover:px-2 rounded transition-all duration-200"
                        >
                          <span className="font-medium text-amber-200">
                            {formatSpecKey(key)}
                          </span>
                          <span className="text-amber-50 font-semibold">
                            {value || "-"}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                ) : (
                  <p className="text-sm text-amber-200/50 italic">
                    No specifications available.
                  </p>
                )}
              </div>
            </div>

            {/* Decorative Line */}
            <div className="h-1 bg-gradient-to-r from-amber-500 via-green-500 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
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

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-none {
          display: block;
        }
      `}</style>
    </div>
  );
}

/* Utility to format keys like "door_size" -> "Door Size" */
function formatSpecKey(key = "") {
  return key
    .toString()
    .replace(/[_-]+/g, " ")
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}
