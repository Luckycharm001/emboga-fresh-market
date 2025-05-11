
import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ChevronRight, Search } from 'lucide-react';
import ProductCard from '@/components/products/ProductCard';
import { products, Product } from '@/data/products';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  
  useEffect(() => {
    if (query) {
      const filteredProducts = products.filter(product => {
        const searchTerms = query.toLowerCase().split(' ');
        return searchTerms.some(term => 
          product.name.toLowerCase().includes(term) || 
          product.description.toLowerCase().includes(term) || 
          product.category.toLowerCase().includes(term) || 
          product.subcategory.toLowerCase().includes(term)
        );
      });
      setSearchResults(filteredProducts);
    } else {
      setSearchResults([]);
    }
  }, [query]);
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center mb-8">
          <Link to="/" className="text-emboga-primary hover:underline">Home</Link>
          <ChevronRight className="h-4 w-4 mx-2 text-gray-500" />
          <span className="font-medium">Search Results</span>
        </div>
        
        <div className="flex items-center mb-8">
          <Search className="h-6 w-6 mr-2 text-emboga-primary" />
          <h1 className="text-3xl font-bold text-emboga-primary">
            Search Results: "{query}"
          </h1>
        </div>
        
        <p className="text-lg mb-8">
          {searchResults.length} {searchResults.length === 1 ? 'product' : 'products'} found
        </p>
        
        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {searchResults.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6">
              <Search className="h-12 w-12 text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold mb-4">No products found</h2>
            <p className="text-gray-500 mb-6">We couldn't find any products matching your search.</p>
            <Button asChild className="bg-emboga-primary hover:bg-emboga-secondary">
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default SearchPage;
