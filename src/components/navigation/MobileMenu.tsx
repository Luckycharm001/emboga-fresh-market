
import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';
import { SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';

export const MobileMenu = () => {
  return (
    <div className="flex flex-col h-full space-y-4 py-6">
      <SheetHeader>
        <SheetTitle>Menu</SheetTitle>
      </SheetHeader>
      <Separator />
      <nav className="flex flex-col space-y-4">
        <Link
          to="/"
          className="text-lg font-medium text-emboga-dark hover:text-emboga-primary"
        >
          Home
        </Link>
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/category/${category.id}`}
            className="text-lg font-medium text-emboga-dark hover:text-emboga-primary"
          >
            {category.name}
          </Link>
        ))}
        <Link
          to="/login"
          className="text-lg font-medium text-emboga-dark hover:text-emboga-primary"
        >
          Login / Register
        </Link>
        <Link
          to="/cart"
          className="text-lg font-medium text-emboga-dark hover:text-emboga-primary"
        >
          Shopping Cart
        </Link>
        <Link
          to="/contact"
          className="text-lg font-medium text-emboga-dark hover:text-emboga-primary"
        >
          Contact Us
        </Link>
      </nav>
      <Separator />
      <div className="mt-auto flex flex-col space-y-2">
        <p className="text-sm text-muted-foreground">Follow us:</p>
        <div className="flex space-x-4">
          <a href="https://instagram.com/E-Mboga" className="text-emboga-primary hover:text-emboga-secondary">
            Instagram
          </a>
          <a href="https://twitter.com/E-Mboga" className="text-emboga-primary hover:text-emboga-secondary">
            X (Twitter)
          </a>
        </div>
        <p className="text-sm text-muted-foreground mt-4">Contact us:</p>
        <a href="mailto:Emboga@emboga.com" className="text-emboga-primary hover:text-emboga-secondary">
          Emboga@emboga.com
        </a>
        <a href="tel:0700000214" className="text-emboga-primary hover:text-emboga-secondary">
          0700000214
        </a>
      </div>
    </div>
  );
};
