import React from 'react';

// Sample data for the table
const propertyRates = [
    { location: 'Bandra West', residentialSale: '₹ 40,000/sq.ft', commercialSale: '₹ 50,000/sq.ft', commercialLease: '₹ 200/sq.ft/month', bhk1Rental: '₹ 50,000/month', bhk2Rental: '₹ 75,000/month', bhk3Rental: '₹ 1,00,000/month', bhk4Rental: '₹ 1,50,000/month' },
    { location: 'Andheri East', residentialSale: '₹ 25,000/sq.ft', commercialSale: '₹ 35,000/sq.ft', commercialLease: '₹ 150/sq.ft/month', bhk1Rental: '₹ 40,000/month', bhk2Rental: '₹ 60,000/month', bhk3Rental: '₹ 80,000/month', bhk4Rental: '₹ 1,20,000/month' },
    { location: 'Powai', residentialSale: '₹ 30,000/sq.ft', commercialSale: '₹ 45,000/sq.ft', commercialLease: '₹ 180/sq.ft/month', bhk1Rental: '₹ 45,000/month', bhk2Rental: '₹ 65,000/month', bhk3Rental: '₹ 90,000/month', bhk4Rental: '₹ 1,30,000/month' },
    { location: 'Juhu', residentialSale: '₹ 50,000/sq.ft', commercialSale: '₹ 70,000/sq.ft', commercialLease: '₹ 250/sq.ft/month', bhk1Rental: '₹ 55,000/month', bhk2Rental: '₹ 85,000/month', bhk3Rental: '₹ 1,10,000/month', bhk4Rental: '₹ 1,60,000/month' },
    { location: 'Goregaon East', residentialSale: '₹ 20,000/sq.ft', commercialSale: '₹ 30,000/sq.ft', commercialLease: '₹ 120/sq.ft/month', bhk1Rental: '₹ 35,000/month', bhk2Rental: '₹ 50,000/month', bhk3Rental: '₹ 70,000/month', bhk4Rental: '₹ 95,000/month' },
    { location: 'Worli', residentialSale: '₹ 45,000/sq.ft', commercialSale: '₹ 60,000/sq.ft', commercialLease: '₹ 220/sq.ft/month', bhk1Rental: '₹ 60,000/month', bhk2Rental: '₹ 80,000/month', bhk3Rental: '₹ 1,20,000/month', bhk4Rental: '₹ 1,70,000/month' },
    { location: 'Colaba', residentialSale: '₹ 55,000/sq.ft', commercialSale: '₹ 75,000/sq.ft', commercialLease: '₹ 300/sq.ft/month', bhk1Rental: '₹ 65,000/month', bhk2Rental: '₹ 90,000/month', bhk3Rental: '₹ 1,30,000/month', bhk4Rental: '₹ 1,80,000/month' },
    { location: 'Malad West', residentialSale: '₹ 18,000/sq.ft', commercialSale: '₹ 28,000/sq.ft', commercialLease: '₹ 100/sq.ft/month', bhk1Rental: '₹ 30,000/month', bhk2Rental: '₹ 45,000/month', bhk3Rental: '₹ 60,000/month', bhk4Rental: '₹ 80,000/month' },
    { location: 'Kandivali East', residentialSale: '₹ 15,000/sq.ft', commercialSale: '₹ 25,000/sq.ft', commercialLease: '₹ 90/sq.ft/month', bhk1Rental: '₹ 25,000/month', bhk2Rental: '₹ 40,000/month', bhk3Rental: '₹ 55,000/month', bhk4Rental: '₹ 70,000/month' },
    { location: 'Borivali East', residentialSale: '₹ 17,000/sq.ft', commercialSale: '₹ 27,000/sq.ft', commercialLease: '₹ 95/sq.ft/month', bhk1Rental: '₹ 28,000/month', bhk2Rental: '₹ 42,000/month', bhk3Rental: '₹ 58,000/month', bhk4Rental: '₹ 75,000/month' },
    { location: 'Dadar', residentialSale: '₹ 35,000/sq.ft', commercialSale: '₹ 45,000/sq.ft', commercialLease: '₹ 190/sq.ft/month', bhk1Rental: '₹ 48,000/month', bhk2Rental: '₹ 70,000/month', bhk3Rental: '₹ 95,000/month', bhk4Rental: '₹ 1,25,000/month' },
    { location: 'Sion', residentialSale: '₹ 22,000/sq.ft', commercialSale: '₹ 32,000/sq.ft', commercialLease: '₹ 110/sq.ft/month', bhk1Rental: '₹ 32,000/month', bhk2Rental: '₹ 47,000/month', bhk3Rental: '₹ 65,000/month', bhk4Rental: '₹ 85,000/month' },
    { location: 'Vashi', residentialSale: '₹ 12,000/sq.ft', commercialSale: '₹ 20,000/sq.ft', commercialLease: '₹ 80/sq.ft/month', bhk1Rental: '₹ 20,000/month', bhk2Rental: '₹ 35,000/month', bhk3Rental: '₹ 50,000/month', bhk4Rental: '₹ 65,000/month' },
    { location: 'Nerul', residentialSale: '₹ 14,000/sq.ft', commercialSale: '₹ 24,000/sq.ft', commercialLease: '₹ 85/sq.ft/month', bhk1Rental: '₹ 22,000/month', bhk2Rental: '₹ 37,000/month', bhk3Rental: '₹ 52,000/month', bhk4Rental: '₹ 68,000/month' },
    { location: 'Thane', residentialSale: '₹ 10,000/sq.ft', commercialSale: '₹ 18,000/sq.ft', commercialLease: '₹ 70/sq.ft/month', bhk1Rental: '₹ 18,000/month', bhk2Rental: '₹ 30,000/month', bhk3Rental: '₹ 45,000/month', bhk4Rental: '₹ 60,000/month' },
    { location: 'Kalyan', residentialSale: '₹ 8,000/sq.ft', commercialSale: '₹ 15,000/sq.ft', commercialLease: '₹ 60/sq.ft/month', bhk1Rental: '₹ 15,000/month', bhk2Rental: '₹ 25,000/month', bhk3Rental: '₹ 35,000/month', bhk4Rental: '₹ 45,000/month' },
    { location: 'Panvel', residentialSale: '₹ 7,000/sq.ft', commercialSale: '₹ 13,000/sq.ft', commercialLease: '₹ 55/sq.ft/month', bhk1Rental: '₹ 12,000/month', bhk2Rental: '₹ 20,000/month', bhk3Rental: '₹ 30,000/month', bhk4Rental: '₹ 40,000/month' },
    { location: 'Chembur', residentialSale: '₹ 28,000/sq.ft', commercialSale: '₹ 38,000/sq.ft', commercialLease: '₹ 140/sq.ft/month', bhk1Rental: '₹ 38,000/month', bhk2Rental: '₹ 55,000/month', bhk3Rental: '₹ 75,000/month', bhk4Rental: '₹ 90,000/month' },
    { location: 'Mulund West', residentialSale: '₹ 16,000/sq.ft', commercialSale: '₹ 26,000/sq.ft', commercialLease: '₹ 100/sq.ft/month', bhk1Rental: '₹ 27,000/month', bhk2Rental: '₹ 40,000/month', bhk3Rental: '₹ 60,000/month', bhk4Rental: '₹ 80,000/month' },
    { location: 'Ghatkopar East', residentialSale: '₹ 24,000/sq.ft', commercialSale: '₹ 34,000/sq.ft', commercialLease: '₹ 130/sq.ft/month', bhk1Rental: '₹ 36,000/month', bhk2Rental: '₹ 52,000/month', bhk3Rental: '₹ 70,000/month', bhk4Rental: '₹ 95,000/month' },
  // Add more sample rows as needed
];

const PropertyRateInMumbai = () => {
  return (
    <div className=" shadow-lg rounded-lg mx-auto p-8">
      <h2 className="text-3xl font-bold text-center text-red-600 mb-8 uppercase">Property Rates in Mumbai</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="font-semibold bg-red-700 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Location</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Residential Sale</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Commercial Sale</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Commercial Lease</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">1 BHK Rental</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">2 BHK Rental</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">3 BHK Rental</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">4 BHK Rental</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {propertyRates.map((rate, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{rate.location}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{rate.residentialSale}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{rate.commercialSale}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{rate.commercialLease}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{rate.bhk1Rental}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{rate.bhk2Rental}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{rate.bhk3Rental}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{rate.bhk4Rental}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PropertyRateInMumbai;
