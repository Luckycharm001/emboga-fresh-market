
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center mb-8">
          <Link to="/" className="text-emboga-primary hover:underline">Home</Link>
          <ChevronRight className="h-4 w-4 mx-2 text-gray-500" />
          <span className="font-medium">Contact Us</span>
        </div>

        <h1 className="text-3xl font-bold mb-8 text-emboga-primary">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions about our products, delivery options, or want to collaborate with us?
              Fill out the form, and we'll get back to you as soon as possible.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-emboga-light p-2 rounded-full mr-4">
                  <Mail className="h-5 w-5 text-emboga-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a href="mailto:Emboga@emboga.com" className="text-emboga-primary hover:underline">
                    Emboga@emboga.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-emboga-light p-2 rounded-full mr-4">
                  <Phone className="h-5 w-5 text-emboga-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <a href="tel:0700000214" className="text-emboga-primary hover:underline">
                    0700000214
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-emboga-light p-2 rounded-full mr-4">
                  <MapPin className="h-5 w-5 text-emboga-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p>Nairobi, Kenya</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-emboga-light p-2 rounded-full mr-4">
                  <Instagram className="h-5 w-5 text-emboga-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Instagram</h3>
                  <a href="https://instagram.com/E-Mboga" className="text-emboga-primary hover:underline">
                    @E-Mboga
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-emboga-light p-2 rounded-full mr-4">
                  <Twitter className="h-5 w-5 text-emboga-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Twitter</h3>
                  <a href="https://twitter.com/E-Mboga" className="text-emboga-primary hover:underline">
                    @E-Mboga
                  </a>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-6">Send us a message</h2>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Full Name
                  </label>
                  <Input id="name" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="your@email.com" required />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="How can we help you?" required />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Write your message here..." 
                  className="min-h-[150px]"
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-emboga-primary hover:bg-emboga-secondary">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
