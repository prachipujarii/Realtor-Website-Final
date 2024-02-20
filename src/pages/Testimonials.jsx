import React from 'react';

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    testimonial: 'This service has been absolutely wonderful and transformed the way I think about real estate.',
    image: '/images/test3.jpg', // Update path to your images
  },
  {
    id: 2,
    name: 'Jane Smith',
    testimonial: 'Highly professional! I recommend their services to anyone looking to buy a property.',
    image: '/images/test2.jpg',
  },
  {
    id: 3,
    name: 'John Doe',
    testimonial: 'This service has been absolutely wonderful and transformed the way I think about real estate.',
    image: '/images/test1.jpg', // Update path to your images
  },
  {
    id: 4,
    name: 'Jane Smith',
    testimonial: 'Highly professional! I recommend their services to anyone looking to buy a property.',
    image: '/images/test4.jpg',
  },
  {
    id: 5,
    name: 'John Doe',
    testimonial: 'This service has been absolutely wonderful and transformed the way I think about real estate.',
    image: '/images/test5.jpg', // Update path to your images
  },
  {
    id: 6,
    name: 'Jane Smith',
    testimonial: 'Highly professional! I recommend their services to anyone looking to buy a property.',
    image: '/images/test6.jpg',
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h2 className="text-3xl font-bold text-center mb-6 uppercase text-red-600">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map(({ id, name, testimonial, image }) => (
          <div key={id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={image} alt={name} className="w-full" style={{ height: '200px' }} />
            <div className="p-4">
              <p className="text-lg font-semibold mb-2">{name}</p>
              <p className="text-gray-700">{testimonial}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
