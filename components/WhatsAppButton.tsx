'use client';
import React, { useState } from 'react';
import { Phone } from 'lucide-react';

const WhatsAppButton = () => {
  // Default phone number - using the first WhatsApp number from the footer
  const phoneNumber = '8801731640666';
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-2 bg-white text-gray-800 px-3 py-1 rounded shadow-md text-sm whitespace-nowrap">
          Chat with us on WhatsApp
        </div>
      )}
      <a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 hover:scale-110 text-white p-4 rounded-full shadow-lg border-2 border-white transition-all duration-300 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <Phone size={28} />
      </a>
    </div>
  );
};

export default WhatsAppButton;
