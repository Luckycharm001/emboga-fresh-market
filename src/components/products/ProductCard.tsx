
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { Product } from '@/data/products';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category
    });
  };

  return (
    <Link 
      to={`/product/${product.id}`} 
      className={cn(
        "product-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg",
        className
      )}
    >
      <div className="aspect-square overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-emboga-primary mb-1">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{product.category}</p>
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold text-lg">KSh {product.price}</p>
            <p className="text-xs text-gray-500">{product.unit}</p>
          </div>
          <Button 
            size="sm" 
            onClick={handleAddToCart}
            className="bg-emboga-primary hover:bg-emboga-secondary text-white"
          >
            <ShoppingCart className="h-4 w-4 mr-1" /> Add
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
