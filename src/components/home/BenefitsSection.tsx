
import React from 'react';

const benefits = [
  {
    icon: "🚚",
    title: "Fast Delivery",
    description: "Same-day delivery on orders placed before 10 AM."
  },
  {
    icon: "🌱",
    title: "Farm Fresh",
    description: "Products directly sourced from local farmers for maximum freshness."
  },
  {
    icon: "💯",
    title: "Quality Guaranteed",
    description: "All our products are quality-checked for freshness and quality."
  },
  {
    icon: "💰",
    title: "Best Prices",
    description: "Competitive prices that are fair to both farmers and customers."
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-12 bg-emboga-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-emboga-primary">Why Choose E-Mboga?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-emboga-primary">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
