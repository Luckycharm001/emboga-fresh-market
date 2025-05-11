
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, Twitter } from 'lucide-react';
import { categories } from '@/data/products';

const Footer = () => {
  return (
    <footer className="bg-emboga-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">E-Mboga</h3>
            <p className="mb-4">Fresh produce at your doorstep</p>
            <div className="flex items-center space-x-2 mb-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:Emboga@emboga.com" className="hover:underline">Emboga@emboga.com</a>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <a href="tel:0700000214" className="hover:underline">0700000214</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link to={`/category/${category.id}`} className="hover:underline">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:underline">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">Contact Us</Link>
              </li>
              <li>
                <Link to="/delivery" className="hover:underline">Delivery Information</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:underline">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://instagram.com/E-Mboga" className="hover:text-emboga-secondary" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://twitter.com/E-Mboga" className="hover:text-emboga-secondary" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
            <p className="text-sm">Subscribe to our newsletter to get updates on our latest offers!</p>
            <div className="mt-4 flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 w-full text-black rounded-l-md focus:outline-none"
              />
              <button className="bg-emboga-secondary hover:bg-emboga-secondary/80 px-4 py-2 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} E-Mboga. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
