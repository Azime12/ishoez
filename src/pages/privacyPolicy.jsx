import React from 'react';

const PrivacyPolicy = () => {
  const privacySections = [
    {
      id: 1,
      title: "Introduction",
      content: "At Welness World, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information."
    },
    {
      id: 2,
      title: "Information We Collect",
      content: "We only collect personal information you voluntarily provide. Non-personal data like browser type, OS, and pages visited may be collected for analytics."
    },
    {
      id: 3,
      title: "Use of Affiliate Links",
      content: "Welness World contains affiliate links. We may earn a commission at no extra cost to you when purchases are made through these links."
    },
    {
      id: 4,
      title: "Cookies",
      content: "We may use cookies to enhance your browsing experience and analyze site usage."
    },
    {
      id: 5,
      title: "Third-Party Services",
      content: "Third-party services like Google Analytics may collect data according to their privacy policies."
    },
    {
      id: 6,
      title: "Data Security",
      content: "We use reasonable measures to protect your data, but no method of electronic storage or transmission is completely secure."
    },
    {
      id: 7,
      title: "Children's Privacy",
      content: "Our website is not intended for children under 13. We do not knowingly collect personal data from children."
    },
    {
      id: 8,
      title: "Changes to This Policy",
      content: "Updates to this Privacy Policy will be posted here with a revised effective date."
    },
    {
      id: 9,
      title: "Contact Us",
      content: "Questions about this Privacy Policy? Contact us at: contact@welnessworld.com."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-green-50 to-white">
   

      {/* Main Content */}
      <main className="container flex-grow max-w-4xl px-6 py-12 mx-auto">
        <h1 className="mb-8 text-4xl font-extrabold text-center text-green-700">Privacy Policy</h1>

        <div className="space-y-8">
          {privacySections.map(section => (
            <div 
              key={section.id} 
              className="p-6 transition-shadow duration-300 bg-white shadow-md rounded-2xl hover:shadow-lg"
            >
              <h2 className="mb-3 text-2xl font-semibold text-gray-800">{section.title}</h2>
              <p className="leading-relaxed text-gray-700">{section.content}</p>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="p-8 mt-12 text-center shadow-md bg-green-50 rounded-2xl">
          <h3 className="mb-4 text-2xl font-bold text-green-700">Have Questions?</h3>
          <p className="mb-4 text-gray-700">Reach out to us anytime at:</p>
          <a 
            href="mailto:contact@welnessworld.com"
            className="font-medium text-green-600 underline hover:text-green-800"
          >
            contact@welnessworld.com
          </a>
        </div>
      </main>

     
    </div>
  );
};

export default PrivacyPolicy;
