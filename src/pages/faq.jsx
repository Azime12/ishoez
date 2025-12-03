// src/pages/FAQWellnessWorld.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Search, Menu, X, ChevronDown, ChevronUp, Mail, HelpCircle } from 'lucide-react';

const FAQWellnessWorld = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const searchBoxRef = useRef(null);

  // FAQ data
  const faqData = [
    {
      id: 1,
      question: "What is WellnessWorld and how does it work?",
      answer: "WellnessWorld is a platform for discovering wellness products, tips, and guides. We curate high-quality recommendations and affiliate links to trusted vendors, helping you make informed choices.",
      icon: "🌿"
    },
    {
      id: 2,
      question: "Do I need an account?",
      answer: "No registration is required. Browse freely and use our curated wellness guides and products at no cost.",
      icon: "👤"
    },
    {
      id: 3,
      question: "Are the products sold by WellnessWorld?",
      answer: "No, WellnessWorld does not sell products directly. Purchases are fulfilled by third-party vendors through our affiliate links.",
      icon: "🏪"
    },
    {
      id: 4,
      question: "How often are products updated?",
      answer: "We update products regularly to feature the latest wellness trends, supplements, and lifestyle items.",
      icon: "🔄"
    },
    {
      id: 5,
      question: "Who can I contact for support?",
      answer: "Reach us at contact@wellnessworld.com for platform-related questions. We don’t handle product orders or returns.",
      icon: "📧"
    },
    {
      id: 6,
      question: "Is WellnessWorld free to use?",
      answer: "Yes! All guides, content, and product recommendations are free. We earn via affiliate commissions without extra cost to users.",
      icon: "💲"
    },
    {
      id: 7,
      question: "Can I trust the product recommendations?",
      answer: "We feature reputable products and vendors, and recommendations are based on quality, reviews, and wellness value.",
      icon: "⭐"
    },
    {
      id: 8,
      question: "Do you ship products internationally?",
      answer: "Shipping depends on the individual seller. Please check the vendor's shipping policy on the product page.",
      icon: "🌍"
    },
  ];

  const fetchSuggestions = async (query) => {
    if (query.length > 2) {
      const mockSuggestions = [
        'FAQ',
        'Account',
        'Wellness guides',
        'Product updates',
        'Support'
      ].filter(item => item.toLowerCase().includes(query.toLowerCase()));

      setSuggestions(mockSuggestions);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search.php?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
    window.location.href = `/search.php?q=${encodeURIComponent(suggestion)}`;
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchQuery.length > 2) fetchSuggestions(searchQuery);
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [searchQuery]);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
  

      {/* Main Content */}
      <main className="container max-w-4xl px-4 py-12 mx-auto">
        <div className="mb-12 text-center">
          <HelpCircle className="w-12 h-12 mx-auto mb-4 text-green-600" />
          <h1 className="text-4xl font-extrabold text-green-700">Frequently Asked Questions</h1>
          <p className="mt-2 text-gray-600">Find answers to common questions about WellnessWorld.</p>
          <div className="w-24 h-1 mx-auto mt-4 bg-green-400 rounded-full"></div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={faq.id}
              className={`bg-white p-6 rounded-3xl shadow-lg transition-all duration-300 ${
                openFaqIndex === index ? 'ring-2 ring-green-400' : ''
              }`}
            >
              <button
                className="flex items-center justify-between w-full text-left"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{faq.icon}</span>
                  <span className="font-semibold text-gray-800">{faq.question}</span>
                </div>
                {openFaqIndex === index ? <ChevronUp /> : <ChevronDown />}
              </button>
              {openFaqIndex === index && (
                <div className="mt-4 leading-relaxed text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>

      </main>
    </div>
  );
};

export default FAQWellnessWorld;
