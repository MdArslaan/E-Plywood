import Product1 from "../assests/Product1.png";
import Product2 from "../assests/Product2.png";
import Product3 from "../assests/Product3.jpg";
import Product4 from "../assests/Product4.png";
import Product5 from "../assests/Product5.png";
import Product6 from "../assests/Product6.png";
import Product7 from "../assests/Product7.png";
import Product8 from "../assests/Product8.png";

const products = [
  {
    id: 1,
    category: "Door",
    name: "Premium Wooden Door",
    image: Product1,
    description:
      "Elegant and durable wooden doors made from high-quality hardwood. Perfect for interior and exterior use with a modern finish.",
    features: [
      "Solid hardwood structure for strength",
      "Weather and termite resistant",
      "Available in matte and glossy finishes",
      "Customizable dimensions",
      "Sound-insulated core",
    ],
    specifications: {
      material: "Teak, Oak, or Engineered Wood",
      thickness: "25mm – 40mm",
      warranty: "10 years",
      finish: "Matte / Glossy",
    },
  },
  {
    id: 2,
    category: "Plywood",
    name: "BWP Waterproof Plywood",
    image: Product2,
    description:
      "High-quality boiling waterproof (BWP) plywood ideal for kitchens, bathrooms, and outdoor furniture applications.",
    features: [
      "100% waterproof and termite resistant",
      "Made using high-grade bonded veneers",
      "Conforms to IS:710 standard",
      "Uniform thickness for stability",
      "Suitable for both interior and exterior use",
    ],
    specifications: {
      material: "Hardwood Core with Phenol Bond",
      thickness: "4mm – 25mm",
      warranty: "15 years",
      grade: "BWP IS:710",
    },
  },
  {
    id: 3,
    category: "Flexi",
    name: "Imported Flexi Plywood",
    image: Product3,
    description:
      "Highly bendable plywood used for curved furniture, pillars, and unique interior designs. Lightweight yet durable.",
    features: [
      "Easily bends without cracking",
      "Ideal for artistic and modern furniture designs",
      "Smooth surface for lamination",
      "Lightweight yet strong",
      "Imported veneer layers",
    ],
    specifications: {
      material: "Gurjan / Birch veneer layers",
      thickness: "8mm – 16mm",
      flexibility: "Up to 90° curvature",
      grade: "Imported Quality",
    },
  },
  {
    id: 4,
    category: "PVC",
    name: "Black Cobra PVC Sheet",
    image: Product4,
    description:
      "High-strength PVC sheets used for modular furniture and bathroom interiors. 100% waterproof and termite-proof.",
    features: [
      "Completely waterproof and fire-retardant",
      "Easy to cut and install",
      "Smooth matte finish surface",
      "Chemical and termite resistant",
      "Long-lasting and easy to clean",
    ],
    specifications: {
      material: "Polyvinyl Chloride (PVC)",
      thickness: "6mm – 25mm",
      warranty: "10 years",
      finish: "Matte",
    },
  },
  {
    id: 5,
    category: "MDF",
    name: "Green Panel MDF Board",
    image: Product5,
    description:
      "Medium Density Fibreboard (MDF) designed for smooth finishing, carving, and furniture manufacturing.",
    features: [
      "Smooth and uniform surface for painting",
      "High dimensional stability",
      "Eco-friendly and non-toxic resin",
      "Ideal for CNC cutting and decorative work",
      "Cost-effective alternative to wood",
    ],
    specifications: {
      material: "Wood fibres bonded with resin",
      density: "700–800 kg/m³",
      thickness: "6mm – 25mm",
      grade: "Interior / Exterior",
    },
  },
  {
    id: 6,
    category: "HDMR",
    name: "Action Tesa HDMR Board",
    image: Product6,
    description:
      "High-Density Moisture Resistant boards ideal for modular furniture, kitchens, and bathroom interiors.",
    features: [
      "Moisture and termite resistant",
      "High screw-holding capacity",
      "Smooth and dense surface",
      "Available in multiple colors and finishes",
      "Suitable for both indoor and semi-outdoor use",
    ],
    specifications: {
      material: "High-density wood fibres",
      density: "850–900 kg/m³",
      thickness: "9mm – 30mm",
      warranty: "7 years",
      finish: "Matte / Gloss",
    },
  },
  {
    id: 7,
    category: "Laminates",
    name: "Royal Touch Decorative Laminate",
    image: Product7,
    description:
      "Premium decorative laminates used for furniture, wardrobes, doors, and walls with a luxurious finish.",
    features: [
      "Scratch and stain-resistant surface",
      "Available in matte, glossy, and textured finishes",
      "Wide range of colors and patterns",
      "Heat and moisture resistant",
      "Long-lasting surface protection",
    ],
    specifications: {
      material: "Phenolic Resin + Decorative Paper Layers",
      thickness: "0.8mm – 1.2mm",
      warranty: "5 years",
      finish: "Gloss / Matte / Texture",
    },
  },

 {
    id: 8,
    category: "Veneers & Teak",
    name: "Premium Veneers & Teak Collection",
    image: Product8,
    description:
      "Natural wood veneers and genuine teak skins for luxury furniture, doors and wall panels.",
    features: [
      "Architectural-grade sliced veneer",
      "Book & slip-matched sequences",
      "FSC-certified teak options",
      "Ready-to-polish surface",
      "250+ exotic species",
    ],
    specifications: {
      material: "Natural wood veneer / teak",
      thickness: "0.5 mm / 0.6 mm",
      sheetSize: "8 ft × 4 ft",
      species: "Teak, Walnut, Oak, Ebony, Gurjan",
      warranty: "10 – Lifetime*",
      application: "Furniture, Doors, Wall-cladding",
    },
  },
];

export default products;
