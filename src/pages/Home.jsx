import React from 'react';

const Home = () => {
  return (
    <div className="p-6">
      {/* Home Page Header */}
      <h1 className="text-4xl font-extrabold text-center my-5">Welcome to Chartered Accountants Finder</h1>
      <p className="text-center text-lg text-gray-600 mb-6">Find the best Chartered Accountants near you.</p>

      {/* What We Offer Section */}
      <h2 className="text-2xl font-bold text-center mb-6">What We Offer</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card p-6 shadow-md rounded-lg text-center">
        <i className="fas fa-user-check text-blue-500 text-4xl mb-4"></i>
          <h3 className="text-xl font-semibold mb-4">Verified Professionals</h3>
          <p className="text-gray-600">We only list verified and trusted Chartered Accountants to ensure quality services.</p>
        </div>
        <div className="card p-6 shadow-md rounded-lg text-center">
        <i className="fas fa-handshake text-green-500 text-4xl mb-4"></i>
          <h3 className="text-xl font-semibold mb-4">Consultation Services</h3>
          <p className="text-gray-600">Get expert consultations for your financial and tax-related needs.</p>
        </div>
        <div className="card p-6  shadow-md rounded-lg text-center">
        <i className="fas fa-wallet text-yellow-500 text-4xl mb-4"></i>
          <h3 className="text-xl font-semibold mb-4">Affordable Rates</h3>
          <p className="text-gray-600">We offer competitive and transparent pricing to suit various budgets.</p>
        </div>
        <div className="p-6  shadow-md rounded-lg text-center">
        <i className="fas fa-chart-line text-red-500 text-4xl mb-4"></i>
          <h3 className="text-xl font-semibold mb-4">Expert Advice</h3>
          <p className="text-gray-600">Receive professional advice on tax planning, accounting, and financial management.</p>
        </div>
      </div>
      {/* How It Works Section */}
      <h2 className="text-2xl font-bold text-center mt-12 mb-6">How It Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="p-6 shadow-md rounded-lg text-center">
          <i className="fas fa-search text-purple-500 text-4xl mb-4"></i>
          <h3 className="text-xl font-semibold mb-4">Search</h3>
          <p className="text-gray-600">Use our search tool to find Chartered Accountants based on your location and needs.</p>
        </div>
        <div className="p-6 shadow-md rounded-lg text-center">
          <i className="fas fa-user-circle text-blue-500 text-4xl mb-4"></i>
          <h3 className="text-xl font-semibold mb-4">Compare Profiles</h3>
          <p className="text-gray-600">View detailed profiles, ratings, and reviews to compare professionals.</p>
        </div>
        <div className="p-6 shadow-md rounded-lg text-center">
          <i className="fas fa-comments text-green-500 text-4xl mb-4"></i>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="text-gray-600">Get in touch with the best Chartered Accountant for your needs.</p>
        </div>
      </div>

      {/* What Users Say Section */}
      <h2 className="text-2xl font-bold text-center mt-12 mb-6">What Users Say</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 shadow-md rounded-lg bg-gray-50">
          <p className="text-gray-600 italic mb-4">
            "The platform is so easy to use! I found the perfect Chartered Accountant in no time."
          </p>
          <p className="text-right font-bold text-gray-800">- John D.</p>
        </div>
        <div className="p-6 shadow-md rounded-lg bg-gray-50">
          <p className="text-gray-600 italic mb-4">
            "Great experience! The verified profiles gave me confidence in choosing the right professional."
          </p>
          <p className="text-right font-bold text-gray-800">- Sarah L.</p>
        </div>
        <div className="p-6 shadow-md rounded-lg bg-gray-50">
          <p className="text-gray-600 italic mb-4">
            "Affordable rates and expert advice. Highly recommend this service!"
          </p>
          <p className="text-right font-bold text-gray-800">- Michael W.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;