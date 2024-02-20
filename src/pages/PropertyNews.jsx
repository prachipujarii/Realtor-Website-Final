import React from 'react';

// Sample news data
const newsArticles = [
  {
    id: 1,
    title: 'Mumbai Real Estate Market Trends 2024',
    content: 'An in-depth analysis of the Mumbai real estate market trends for the year 2024. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec leo ac justo consectetur egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam at tellus quis ipsum lobortis tristique ut at felis. Donec malesuada tellus et tellus varius, sed blandit odio vehicula. Vivamus auctor efficitur tellus, eget tempor orci molestie ac. Morbi eget ultricies ipsum. Sed vitae condimentum arcu.',
    imageUrl: '/images/news1.jpg',
     // Example image URL
  },
  {
    id: 2,
    title: 'How COVID-19 Has Affected Property Prices in Mumbai',
    content: 'Exploring the impact of the COVID-19 pandemic on property prices across Mumbai. Sed fringilla, ligula non lacinia gravida, ligula felis rutrum leo, nec facilisis magna diam eget justo. Donec eget felis arcu. Nulla nec purus vel sapien ultricies feugiat. Ut sed luctus nisi. Mauris vestibulum nisl sed arcu convallis, eu bibendum urna facilisis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum at lorem ut odio congue tristique vel vel dui. Nullam et venenatis ligula. Nam commodo euismod velit nec mattis.',
    imageUrl: '/images/news2.png', // Example image URL
  },
  // Add more articles as necessary
];

const PropertyNews = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6 uppercase text-red-600">Property News</h2>
      <div className="grid grid-cols-1 gap-6">
        {newsArticles.map(({ id, title, content, imageUrl }) => (
          <div key={id} className="max-w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex">
            <img className="w-1/2 object-cover object-center" src={imageUrl} alt="news" width="300" height="200" />
            <div className="flex-grow py-4 px-6">
              <h3 className="text-xl font-bold mb-3">{title}</h3>
              <p className="text-gray-700">{content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyNews;
