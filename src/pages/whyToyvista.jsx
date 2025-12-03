import React from 'react';

const WhyWellnessWorld = () => {
  return (
    <section id="why-wellnessworld" className="px-4 py-12 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div className="mb-10 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">
          Why <span className="text-emerald-500">WellnessWorld</span>?
        </h1>
        <div className="w-24 h-1 mx-auto mb-6 bg-emerald-500"></div>
      </div>

      <div className="p-6 mb-10 bg-white shadow-xl rounded-2xl md:p-8 lg:p-10">
        <p className="mb-6 text-lg text-gray-700">
          Welcome to <strong className="font-semibold text-emerald-500">WellnessWorld</strong> – your trusted guide to a healthier, more balanced lifestyle. But what makes WellnessWorld truly different?
        </p>
        
        <p className="mb-6 text-lg text-gray-700">
          At WellnessWorld, we believe wellness should be <strong className="font-semibold text-emerald-500">accessible, empowering, and enjoyable</strong>. We've created a carefully curated platform connecting you with the best natural health products, mindful supplements, holistic living tips, and self-care essentials.
        </p>
        
        <p className="mb-8 text-lg text-gray-700">
          Our site is designed for <strong className="font-semibold text-emerald-500">clarity, calm, and simplicity</strong>. Whether you're exploring immune boosters, gut health remedies, natural skincare, or fitness nutrition, everything is categorized for a smooth, stress-free experience.
        </p>

        <div className="mb-10">
          <h3 className="pb-2 mb-6 text-2xl font-bold text-gray-900 border-b border-gray-200">
            Here's why WellnessWorld is your go-to wellness platform:
          </h3>
          
          <ul className="space-y-5">
            <li className="flex items-start">
              <span className="flex-shrink-0 mt-1 mr-4 text-2xl updated">🌿</span>
              <div>
                <strong className="text-lg font-semibold text-gray-900">Expert Curation</strong>
                <p className="mt-1 text-gray-700">Handpicked products and content that meet high standards of quality, ethics, and effectiveness.</p>
              </div>
            </li>
            
            <li className="flex items-start">
              <span className="flex-shrink-0 mt-1 mr-4 text-2xl updated">🧘</span>
              <div>
                <strong className="text-lg font-semibold text-gray-900">Whole-Person Wellness</strong>
                <p className="mt-1 text-gray-700">Supporting every aspect of your journey, from physical health to emotional wellbeing.</p>
              </div>
            </li>
            
            <li className="flex items-start">
              <span className="flex-shrink-0 mt-1 mr-4 text-2xl updated">🌎</span>
              <div>
                <strong className="text-lg font-semibold text-gray-900">Eco-Conscious Choices</strong>
                <p className="mt-1 text-gray-700">Sustainable products that support both your body and the planet.</p>
              </div>
            </li>
            
            <li className="flex items-start">
              <span className="flex-shrink-0 mt-1 mr-4 text-2xl updated">⚕️</span>
              <div>
                <strong className="text-lg font-semibold text-gray-900">Science Meets Nature</strong>
                <p className="mt-1 text-gray-700">Bridging traditional remedies with modern wellness science.</p>
              </div>
            </li>
            
            <li className="flex items-start">
              <span className="flex-shrink-0 mt-1 mr-4 text-2xl updated">🛒</span>
              <div>
                <strong className="text-lg font-semibold text-gray-900">Streamlined Shopping</strong>
                <p className="mt-1 text-gray-700">Easy browsing, fast loading, and a peaceful layout designed to reduce decision fatigue.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="p-6 border-l-4 rounded-r-lg border-emerald-500 bg-emerald-50">
          <p className="text-lg text-gray-800">
            At WellnessWorld, our mission is simple – <strong className="font-semibold text-emerald-500">make healthy living simple and inspiring</strong>. Whether you're a wellness beginner or holistic lifestyle enthusiast, we’re here to support your transformation with trusted products and uplifting guidance.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="p-6 bg-white shadow-xl rounded-2xl md:p-8 lg:p-10">
        <h2 className="mb-8 text-3xl font-bold text-center text-gray-900">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-6">
          <div className="p-5 transition-colors duration-200 border border-gray-200 rounded-xl hover:border-emerald-300">
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
              What makes WellnessWorld different from other wellness platforms?
            </h3>
            <p className="text-gray-700">
              WellnessWorld combines expert curation, holistic wellness guidance, and sustainable products to simplify your healthy living journey.
            </p>
          </div>
          
          <div className="p-5 transition-colors duration-200 border border-gray-200 rounded-xl hover:border-emerald-300">
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
              Do you sell products directly?
            </h3>
            <p className="text-gray-700">
              WellnessWorld connects you with trusted wellness brands. We provide detailed product info, reviews, and direct links to purchase.
            </p>
          </div>
          
          <div className="p-5 transition-colors duration-200 border border-gray-200 rounded-xl hover:border-emerald-300">
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
              Are your products safe and eco-friendly?
            </h3>
            <p className="text-gray-700">
              Yes! We feature products that meet high safety, quality, and sustainability standards.
            </p>
          </div>
          
          <div className="p-5 transition-colors duration-200 border border-gray-200 rounded-xl hover:border-emerald-300">
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
              Can I find holistic wellness tips?
            </h3>
            <p className="text-gray-700">
              Absolutely! Explore our content on nutrition, mindfulness, fitness, and self-care curated by wellness experts.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .updated {
          display: inline-block;
          transition: transform 0.3s ease;
        }
        
        .updated:hover {
          transform: scale(1.2);
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        #why-wellnessworld {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default WhyWellnessWorld;
