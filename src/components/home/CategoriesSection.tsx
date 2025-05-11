
import React from 'react';
import { categories } from '@/data/products';
import CategoryCard from './CategoryCard';

const CategoriesSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-emboga-primary">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map(category => (
            <CategoryCard 
              key={category.id} 
              id={category.id} 
              name={category.name} 
              image={category.image} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
