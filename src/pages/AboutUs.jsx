import React from 'react';

const AboutUs = () => {
    // Sample data
    const companyDescription = `Welcome to Realtor, your premier destination for all things real estate! At Realtor, we are dedicated to helping individuals, families, and investors navigate the dynamic world of real estate with confidence and ease.

    With an extensive portfolio of properties, ranging from cozy starter homes to luxurious estates, we offer something for everyone. Whether you're buying, selling, renting, or investing, our team of experienced professionals is here to guide you every step of the way.
    
    At Realtor, we understand that real estate transactions can be complex and overwhelming. That's why we're committed to providing personalized service tailored to your unique needs and goals. From conducting comprehensive property searches to negotiating the best deals, we're with you from start to finish, ensuring a smooth and successful experience.
    
    With Realtor, you can trust that you're in good hands. Our team is passionate about real estate and dedicated to delivering exceptional results. Whether you're a first-time homebuyer or a seasoned investor, let Realtor be your trusted partner in all your real estate endeavors.`;

    const ceoDescription = `Introducing Prachi Pujari, the visionary leader behind Realtor, a prominent name in the real estate industry. As the CEO of Realtor, Prachi brings with her a wealth of experience, expertise, and a deep-rooted passion for real estate.

    With a proven track record of success, Prachi has spearheaded Realtor's growth and evolution, transforming it into a trusted authority in the real estate market. Her innovative approach, strategic vision, and unwavering commitment to excellence have positioned Realtor as a leading destination for buyers, sellers, renters, and investors alike.
    
    Prachi's leadership is characterized by her dedication to delivering exceptional service, fostering strong relationships, and driving results. Under her guidance, Realtor has earned a reputation for integrity, professionalism, and client satisfaction.
    
    Beyond her role at Realtor, Prachi is a respected figure in the industry, known for her insightful perspectives, industry knowledge, and forward-thinking strategies. She is deeply invested in the success of her clients and is committed to helping them achieve their real estate goals.`;

    const whyUsDescription = `Comprehensive Listings: "Realtor" offers an extensive database of properties, including residential homes, commercial spaces, and investment opportunities. With a wide range of options to choose from, you'll find the perfect property to suit your needs and preferences.

    Trusted Expertise: Backed by a team of experienced real estate professionals, "Realtor" provides expert guidance and assistance at every step of your real estate journey. Whether you're buying, selling, renting, or investing, you can rely on our knowledge and expertise to help you make informed decisions. Transparency and Integrity: We believe in transparency, honesty, and integrity in all our dealings. With "Realtor," you can trust that you're getting accurate information, fair pricing, and honest advice every step of the way. Exceptional Customer Service: Our top priority at "Realtor" is customer satisfaction. We are committed to providing exceptional service and support to ensure a positive and memorable experience for our clients.`;

    const benefits = [
        'Access to a wide range of properties',
        'Expert guidance throughout the buying or selling process',
        'Personalized service tailored to your needs',
        'Transparent and honest communication',
        'Efficient and effective solutions for your real estate needs',
        'Latest market trends and insights',
        'Regular updates on new listings and opportunities',
        'Strong negotiation skills to help you get the best deal',
        'Comprehensive support from start to finish',
        'Peace of mind knowing you have a dedicated team on your side',
    ];

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

    return (
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-red-600 uppercase">About Us</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
                {/* About the Company */}
                <div>
                    <h2 className="text-xl text-center font-bold mb-4  text-red-600 uppercase">About the Company</h2>
                    <p className="text-gray-700">{companyDescription}</p>
                </div>
                <hr className="my-6" />

                {/* About the CEO */}
                <div className="flex flex-col md:flex-row md:items-center ">
                    <div className="md:w-1/2 md:pr-6 mb-4 md:mb-0">
                        <h2 className="text-xl text-center font-bold mb-4   text-red-600 uppercase">About the CEO</h2>
                        <p className="text-gray-700">{ceoDescription}</p>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <img src="/images/CEO.jpg" alt="CEO" className="rounded-lg w-full md:w-auto" width="200" height="20" />
                    </div>
                </div>
                <hr className="my-6" />

                {/* Why Us? */}
                <div>
                    <h2 className="text-xl text-center font-bold mb-4   text-red-600 uppercase">Why Us?</h2>
                    <p className="text-gray-700">{whyUsDescription}</p>
                </div>
                <hr className="my-6" />

                {/* Benefits of Using Our Website */}
                <div>
                    <h2 className="text-xl text-center  text-red-600 font-bold mb-4 uppercase">Benefits of Using Our Website</h2>
                    <ul className="list-disc list-inside text-gray-700">
                        {benefits.map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                        ))}
                    </ul>
                </div>
            </div>
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
        </div>
        
    );
};

export default AboutUs;
