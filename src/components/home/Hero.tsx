
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative bg-emboga-light py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-emboga-primary">
              Fresh Farm Produce Delivered to Your Doorstep
            </h1>
            <p className="text-lg text-gray-700">
              Shop the finest selection of vegetables, fruits, animal products, cereals, and organic juices. Direct from local farms to your kitchen.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-emboga-primary hover:bg-emboga-primary/90">
                <Link to="/category/vegetables">Shop Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-emboga-primary text-emboga-primary hover:bg-emboga-primary hover:text-white">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src="/lovable-uploads/35cc2b18-d2c9-484b-8da6-c53a9309fbf3.png" alt="Fresh Apples" className="rounded-lg shadow-md w-full h-40 object-cover" />
              <img src="/lovable-uploads/51a24aa9-1f66-48f4-a152-7d8c9636d3de.png" alt="Fresh Vegetables" className="rounded-lg shadow-md w-full h-52 object-cover" />
            </div>
            <div className="space-y-4 pt-8">
              <img src="/lovable-uploads/c56da87a-1cce-47ea-9a30-69b284858732.png" alt="Fresh Carrots" className="rounded-lg shadow-md w-full h-52 object-cover" />
              <img src="/lovable-uploads/3f5633af-c48b-449b-8f80-f67b71cf32c7.png" alt="Fresh Milk" className="rounded-lg shadow-md w-full h-40 object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
