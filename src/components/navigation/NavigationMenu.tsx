
import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

export const NavigationMenu = () => {
  return (
    <nav className="hidden md:flex space-x-6">
      {categories.map((category) => (
        <Link
          key={category.id}
          to={`/category/${category.id}`}
          className="text-emboga-dark hover:text-emboga-primary font-medium transition-colors"
        >
          {category.name}
        </Link>
      ))}
    </nav>
  );
};
