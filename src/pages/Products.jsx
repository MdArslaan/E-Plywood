import React from 'react';
import ProductCard from '../components/ProductCard';

const Products = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      title: 'Premium Plywood Sheet',
      description: 'High-quality plywood sheet perfect for furniture and construction projects.',
      price: 45.99,
    },
    {
      id: 2,
      title: 'Marine Grade Plywood',
      description: 'Water-resistant plywood ideal for outdoor and marine applications.',
      price: 65.99,
    },
    {
      id: 3,
      title: 'Bamboo Plywood',
      description: 'Eco-friendly bamboo plywood with excellent strength and durability.',
      price: 55.99,
    },
    {
      id: 4,
      title: 'Birch Plywood',
      description: 'Premium birch plywood with smooth finish and consistent quality.',
      price: 52.99,
    },
    {
      id: 5,
      title: 'Oak Plywood',
      description: 'Sturdy oak plywood perfect for high-end furniture projects.',
      price: 68.99,
    },
    {
      id: 6,
      title: 'Pine Plywood',
      description: 'Affordable pine plywood great for DIY projects and general use.',
      price: 38.99,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Products</h1>
          <p className="text-xl text-gray-600">
            Explore our wide range of quality plywood products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

