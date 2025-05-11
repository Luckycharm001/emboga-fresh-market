
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface CategoryCardProps {
  id: string;
  name: string;
  image: string;
  className?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ id, name, image, className }) => {
  return (
    <Link 
      to={`/category/${id}`}
      className={cn(
        "group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all",
        className
      )}
    >
      <div className="aspect-square w-full">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
        <h3 className="text-xl font-bold text-white p-4 w-full">{name}</h3>
      </div>
    </Link>
  );
};

export default CategoryCard;
