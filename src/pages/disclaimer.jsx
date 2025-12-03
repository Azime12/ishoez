// src/pages/Disclaimer.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Disclaimer = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* <Header /> */}
      
      <main className="container flex-grow max-w-4xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <div className="p-6 bg-white shadow-lg rounded-2xl md:p-8 lg:p-10">
          <div className="mb-8 text-center">
            <h1 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl">
              Disclaimer
            </h1>
            {/* <div className="w-20 h-1 mx-auto mb-4 bg-emerald-500"></div> */}
          
          </div>
          
          <div className="space-y-8">
            <section className="pl-4 border-l-4 border-emerald-100">
              <p className="text-lg leading-relaxed text-gray-700">
                WellnessWorld participates in various affiliate programs with wellness brands and retailers. We may earn commissions when you make a purchase through our links at no extra cost to you.
              </p>
            </section>
            
            <section>
              <h2 className="pb-2 mb-4 text-2xl font-bold text-gray-900 border-b border-gray-200">
                Product Information &amp; Availability
              </h2>
              <p className="text-gray-700">
                We aim for accuracy in product details, but availability, prices, and content are subject to change. Always verify details on the retailer’s site before making a purchase.
              </p>
            </section>
            
            <section>
              <h2 className="pb-2 mb-4 text-2xl font-bold text-gray-900 border-b border-gray-200">
                Third-Party Links
              </h2>
              <p className="text-gray-700">
                Our platform contains links to third-party wellness brands and retailers. WellnessWorld does not control these sites and is not responsible for their content, policies, or transactions.
              </p>
            </section>
            
            <section>
              <h2 className="pb-2 mb-4 text-2xl font-bold text-gray-900 border-b border-gray-200">
                Health & Wellness Advice
              </h2>
              <p className="text-gray-700">
                The content on WellnessWorld is for informational purposes only and is not intended as medical advice. Consult a healthcare professional before starting any new health regimen or using any product.
              </p>
            </section>
            
            <section>
              <h2 className="pb-2 mb-4 text-2xl font-bold text-gray-900 border-b border-gray-200">
                Liability Disclaimer
              </h2>
              <p className="text-gray-700">
                WellnessWorld does not manufacture or sell products. Any issues regarding product quality, safety, or delivery should be addressed directly with the retailer or manufacturer.
              </p>
            </section>
            
            <section>
              <h2 className="pb-2 mb-4 text-2xl font-bold text-gray-900 border-b border-gray-200">
                Age & Safety Recommendations
              </h2>
              <p className="text-gray-700">
                Please follow all age, safety, and usage instructions provided by the product manufacturer. WellnessWorld is not responsible for injuries or adverse effects.
              </p>
            </section>
            
            <section>
              <h2 className="pb-2 mb-4 text-2xl font-bold text-gray-900 border-b border-gray-200">
                Updates to This Disclaimer
              </h2>
              <p className="text-gray-700">
                We may revise this disclaimer at any time. Please check this page periodically for updates.
              </p>
            </section>
            
            <section className="p-6 bg-gray-50 rounded-xl">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Contact Us
              </h2>
              <p className="mb-2 text-gray-700">For any questions, contact us at:</p>
              <p className="mb-2 text-gray-700">
                <strong>Email:</strong>{' '}
                <a 
                  href="mailto:contact@wellnessworld.com" 
                  className="transition-colors duration-200 text-emerald-500 hover:text-emerald-600"
                >
                  contact@wellnessworld.com
                </a>
              </p>
              <p className="text-gray-700">
                <strong>Website:</strong>{' '}
                <a 
                  href="https://wellnessworld.com" 
                  className="transition-colors duration-200 text-emerald-500 hover:text-emerald-600"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  wellnessworld.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      
      {/* <Footer /> */}
    </div>
  );
};

export default Disclaimer;
