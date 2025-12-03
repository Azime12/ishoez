// src/pages/AboutUsSimple.jsx
import React from 'react';

const AboutUsSimple = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container max-w-4xl px-4 py-12 mx-auto">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-5xl font-bold text-gray-900">
            About <span className="text-emerald-600">WellnessWorld</span>
          </h1>
          <div className="w-24 h-2 mx-auto mb-8 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Your trusted guide to a healthier, more balanced lifestyle
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          <div className="prose prose-lg max-w-none">
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Welcome to <strong>WellnessWorld</strong> — your premier platform for natural health products, holistic living tips, mindful supplements, and self-care essentials. We're committed to helping you live a balanced, healthier life through carefully curated recommendations and expert guidance.
            </p>

            <div className="p-6 my-8 border-l-4 border-emerald-500 bg-emerald-50">
              <h3 className="mb-3 text-xl font-semibold text-gray-800">🌿 Our Vision</h3>
              <p className="text-gray-700">
                To create a world where wellness is accessible, enjoyable, and inspiring for everyone
              </p>
            </div>

            <h2 className="mt-12 mb-6 text-2xl font-bold text-gray-900">What We Offer</h2>
            
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Our platform brings together <span className="font-semibold text-emerald-600">trusted natural health products</span>, <span className="font-semibold text-emerald-600">supplements for daily wellness</span>, and <span className="font-semibold text-emerald-600">expert advice for mindful living</span>. Whether you're starting your wellness journey or looking to enhance your holistic lifestyle, WellnessWorld makes the experience simple, informative, and enjoyable.
            </p>

            <div className="grid gap-8 my-12 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                      <span className="text-green-600">✓</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800">Expert Curation</h4>
                    <p className="mt-1 text-sm text-gray-600">
                      We handpick products and advice based on quality, effectiveness, and ethical standards
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full">
                      <span className="text-blue-600">🔄</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800">Daily Wellness Tips</h4>
                    <p className="mt-1 text-sm text-gray-600">
                      Fresh insights and tips regularly added to keep your journey on track
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-8 h-8 bg-teal-100 rounded-full">
                      <span className="text-teal-600">💡</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800">Holistic Approach</h4>
                    <p className="mt-1 text-sm text-gray-600">
                      Addressing physical, mental, and emotional wellbeing in one place
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-8 h-8 bg-orange-100 rounded-full">
                      <span className="text-orange-600">🌎</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800">Sustainable Choices</h4>
                    <p className="mt-1 text-sm text-gray-600">
                      Products and tips that benefit both you and the planet
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="mt-12 mb-6 text-2xl font-bold text-gray-900">How We Operate</h2>
            
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              WellnessWorld operates as a curated platform. While we provide affiliate links to select wellness products, all recommendations are carefully vetted to ensure trustworthiness and quality. Affiliate partnerships allow us to maintain and grow the platform without extra cost to you.
            </p>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Our team continuously monitors wellness trends, researches natural remedies, and identifies the most effective products and advice, so you can focus on achieving your health goals.
            </p>

            <div className="p-8 my-12 text-center bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl">
              <p className="text-2xl italic font-light text-gray-700">
                "WellnessWorld — Your trusted guide to balance, health, and mindful living."
              </p>
            </div>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Thank you for trusting WellnessWorld as part of your wellness journey. We're excited to help you discover products, guidance, and practices that make healthy living simple and inspiring.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSimple;
