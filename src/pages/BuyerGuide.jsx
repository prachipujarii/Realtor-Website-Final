import React from 'react';

const BuyerGuide = () => {
  return (
    <div className="max-w-8xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-red-600 uppercase">Buyer's Guide</h1>
      <div className="container mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="space-y-4">
          {/* Budgets Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">Budgets – Total Investment for Buying a Flat/Property/Home in Mumbai</h2>
            <p className="text-base font-medium text-gray-700 mb-6 leading-relaxed">
              While buying a home, you must know what your budgets are and what is the total investment you would like to make. Each property comes with a certain price, and in every location, the price is different from the other. So, it is imperative for you to decide what your budget is and how much you can afford as the price of a property before you buy a property. Also, you must know what is your own equity contribution if you are taking a home loan.
            </p>
            <hr className="mb-6" />
          </section>

          {/* Location Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">Location – Micro Market Research</h2>
            <p className="text-base font-medium text-gray-700 mb-6 leading-relaxed">
              It is essential for you also to know which micro market has got how many projects, what are the rates going on the micro-markets, what is the demand and what is the supply, what is the infrastructure impact so that you can take an informed decision before buying a property. Please click here for a complete understanding of Supply coming up in each location in Mumbai.
            </p>
            <hr className="mb-6" />
          </section>

          {/* Current Prices Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">Current Prices in the Location</h2>
            <p className="text-base font-medium text-gray-700 mb-6 leading-relaxed">
              Each location and its other areas/neighborhoods have got certain price points. Properties located on the main road may be costing higher or lower depending on the density of the crowd, noise, pollution, and many factors. The prices in each location can vary up to 50 to 100% depending on the building, developer, amenities, age of the building, and configuration.
            </p>
            <hr className="mb-6" />
          </section>

          {/* Paperwork and Professional Guidance Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">Paperwork and Professional Guidance</h2>
            <p className="text-base font-medium text-gray-700 mb-6 leading-relaxed">
              Once you identify the property, it's important to look at the paperwork, and you will need either the help of a RERA Registered Agent if it's an under-construction property or a professional agent who is experienced with paperwork, valuation, and other statutory paperwork requirements. If you need any assistance with buying a property with complete paperwork, professional guidance, proper Memorandum of Understanding, Agreement for Sale, Sale Deed, etc., then please feel free to connect with the team of Real Estate Mumbai to take this further.
            </p>
            <hr className="mb-6" />
          </section>
        </div>
      </div>
    </div>
  );
};

export default BuyerGuide;
