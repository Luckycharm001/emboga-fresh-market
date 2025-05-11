
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/products/ProductCard';
import { getProductsByCategory, categories } from '@/data/products';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const products = getProductsByCategory(
    categories.find(cat => cat.id === categoryId)?.name || ''
  );
  
  const category = categories.find(cat => cat.id === categoryId);
  
  if (!category) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold mb-4 text-emboga-primary">Category Not Found</h1>
          <p className="mb-8">The category you are looking for does not exist.</p>
          <Button asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="bg-emboga-light py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Link to="/" className="text-emboga-primary hover:underline">Home</Link>
            <ChevronRight className="h-4 w-4 mx-2 text-gray-500" />
            <span className="font-medium">{category.name}</span>
          </div>
          
          <h1 className="text-4xl font-bold mb-4 text-emboga-primary">{category.name}</h1>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {category.subcategories.map(sub => (
              <Button 
                key={sub} 
                variant="outline" 
                size="sm"
                className="bg-white hover:bg-emboga-primary hover:text-white border-emboga-primary text-emboga-primary"
              >
                {sub}
              </Button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">No products found</h2>
            <p className="text-gray-500 mb-6">There are no products in this category at the moment.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CategoryPage;
