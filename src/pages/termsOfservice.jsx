// src/pages/TermsOfServiceWellnessWorld.jsx
import React from 'react';

const TermsOfServiceWellnessWorld = () => {
  const termsSections = [
    {
      id: 1,
      title: "Acceptance of Terms",
      content: "By accessing and using WellnessWorld.com, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree, please discontinue use."
    },
    {
      id: 2,
      title: "Affiliate Disclosure",
      content: "WellnessWorld.com contains affiliate links, including those from Amazon and AliExpress. We may earn a commission at no extra cost when purchases are made through these links. This helps us maintain and curate high-quality wellness content."
    },
    {
      id: 3,
      title: "Use of the Site",
      content: "You agree to use WellnessWorld.com for lawful purposes only. Any activity that could harm the website or interfere with other users’ experience is prohibited."
    },
    {
      id: 4,
      title: "Content Ownership",
      content: "All content on this site, including images, text, graphics, and branding, is owned or licensed to WellnessWorld.com. Unauthorized use or reproduction is strictly prohibited."
    },
    {
      id: 5,
      title: "Limitation of Liability",
      content: "WellnessWorld.com is provided 'as is'. We make no warranties regarding availability, accuracy, or reliability and are not liable for any damages arising from your use of the site."
    },
    {
      id: 6,
      title: "Third-Party Links",
      content: "Our website may include links to external sites. We are not responsible for the content, privacy practices, or policies of any third-party websites."
    },
    {
      id: 7,
      title: "Modifications to Terms",
      content: "We may revise these Terms of Service at any time without prior notice. By continuing to use WellnessWorld.com, you accept the updated terms."
    },
    {
      id: 8,
      title: "Contact",
      content: "For questions about these Terms of Service, you can contact us at support@wellnessworld.com."
    },
  ];

  return (
    <main className="flex flex-col items-center min-h-screen px-6 py-12 bg-gradient-to-b from-green-50 to-white">
      {/* Page Title */}
      <h1 className="mb-12 text-5xl font-extrabold text-center text-green-700">
        Terms of Service
      </h1>

      {/* Terms Sections */}
      <div className="w-full max-w-3xl space-y-10">
        {termsSections.map(section => (
          <div
            key={section.id}
            className="p-8 transition-shadow duration-300 bg-white shadow-lg rounded-3xl hover:shadow-2xl"
          >
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              {section.id}. {section.title}
            </h2>
            <p className="leading-relaxed text-gray-700">{section.content}</p>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="w-full max-w-3xl p-8 mt-16 text-center shadow-inner bg-green-50 rounded-2xl">
        <p className="text-gray-700">
          <strong>Note:</strong> This document was last updated on {new Date().toLocaleDateString()}. 
          For information about how we handle your personal data, see our{' '}
          <a href="/privacy-policy" className="font-medium text-green-600 hover:text-green-800">
            Privacy Policy
          </a>.
        </p>
      </div>
    </main>
  );
};

export default TermsOfServiceWellnessWorld;
