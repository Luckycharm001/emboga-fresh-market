
import React from 'react';
import Layout from '@/components/layout/Layout';
import Banner from '@/components/home/Banner';
import Hero from '@/components/home/Hero';
import CategoriesSection from '@/components/home/CategoriesSection';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import BenefitsSection from '@/components/home/BenefitsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';

const Index = () => {
  return (
    <Layout>
      <Banner />
      <Hero />
      <CategoriesSection />
      <FeaturedProducts />
      <BenefitsSection />
      <TestimonialsSection />
    </Layout>
  );
};

export default Index;
