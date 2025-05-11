
import React from 'react';

const testimonials = [
  {
    quote: "E-Mboga has transformed how I shop for fresh produce. Their vegetables are always fresh and delivered right to my doorstep.",
    name: "Jane K.",
    title: "Regular Customer"
  },
  {
    quote: "The quality of their fruits is exceptional. I've been ordering weekly for the past 6 months and have never been disappointed.",
    name: "John M.",
    title: "Weekly Subscriber"
  },
  {
    quote: "As a busy professional, E-Mboga saves me valuable time while ensuring my family eats fresh, healthy food.",
    name: "Sarah W.",
    title: "Busy Parent"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-emboga-primary">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-emboga-light p-6 rounded-lg shadow relative">
              <div className="text-4xl text-emboga-primary absolute -top-5 left-4">"</div>
              <p className="italic text-gray-700 mb-6 pt-4">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-emboga-secondary flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
