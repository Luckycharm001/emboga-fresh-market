
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-9xl font-bold text-emboga-primary">404</h1>
        <h2 className="text-3xl font-bold mt-8 mb-4">Page Not Found</h2>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild className="bg-emboga-primary hover:bg-emboga-secondary">
            <Link to="/">Go Home</Link>
          </Button>
          <Button asChild variant="outline" className="border-emboga-primary text-emboga-primary hover:bg-emboga-primary hover:text-white">
            <Link to="/category/vegetables">Shop Products</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
