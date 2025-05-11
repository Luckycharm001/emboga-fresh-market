
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ChevronRight, Minus, Plus, ShoppingCart } from 'lucide-react';
import { getProductById } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const product = getProductById(productId || '');
  
  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold mb-4 text-emboga-primary">Product Not Found</h1>
          <p className="mb-8">The product you are looking for does not exist.</p>
          <Button asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </Layout>
    );
  }
  
  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category
      });
    }
    toast.success(`Added ${quantity} ${product.name}${quantity > 1 ? 's' : ''} to cart`);
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center mb-8">
          <Link to="/" className="text-emboga-primary hover:underline">Home</Link>
          <ChevronRight className="h-4 w-4 mx-2 text-gray-500" />
          <Link to={`/category/${product.category.toLowerCase().replace(' ', '-')}`} className="text-emboga-primary hover:underline">
            {product.category}
          </Link>
          <ChevronRight className="h-4 w-4 mx-2 text-gray-500" />
          <span className="font-medium">{product.name}</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-96 object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-emboga-primary">{product.name}</h1>
            <p className="text-lg text-gray-600">{product.description}</p>
            
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-emboga-primary">KSh {product.price}</span>
              <span className="text-gray-500">/ {product.unit}</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Button 
                  onClick={decrementQuantity} 
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-r-none"
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <div className="h-10 w-14 flex items-center justify-center border-y">
                  {quantity}
                </div>
                <Button 
                  onClick={incrementQuantity} 
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-l-none"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              
              <Button 
                onClick={handleAddToCart}
                className="bg-emboga-primary hover:bg-emboga-secondary text-white px-8"
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
            </div>
            
            <div className="pt-4 border-t">
              <p className="text-sm text-gray-600">Category: <span className="text-emboga-primary">{product.category}</span></p>
              <p className="text-sm text-gray-600">Subcategory: <span className="text-emboga-primary">{product.subcategory}</span></p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;
