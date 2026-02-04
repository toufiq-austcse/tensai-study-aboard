'use client';
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <img 
              src="/lovable-uploads/cd5a57fa-7ab9-4755-8744-d9764abded44.png" 
              alt="Tensai Logo" 
              className="h-16 mr-3" 
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-gray-700 hover:text-[#004aad] font-medium">
            Services
          </a>
          <a href="#destinations" className="text-gray-700 hover:text-[#004aad] font-medium">
            Destinations
          </a>
          <a href="#process" className="text-gray-700 hover:text-[#004aad] font-medium">
            Process
          </a>
          {/* Testimonials section hidden
          <a href="#testimonials" className="text-gray-700 hover:text-[#004aad] font-medium">
            Testimonials
          </a>
          */}
          <a href="#contact" className="btn-primary">
            Contact Us
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t py-4">
          <div className="container flex flex-col space-y-4">
            <a 
              href="#services" 
              className="text-gray-700 hover:text-[#004aad] font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a 
              href="#destinations" 
              className="text-gray-700 hover:text-[#004aad] font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Destinations
            </a>
            <a 
              href="#process" 
              className="text-gray-700 hover:text-[#004aad] font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Process
            </a>
            {/* Testimonials section hidden
            <a 
              href="#testimonials" 
              className="text-gray-700 hover:text-[#004aad] font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </a>
            */}
            <a 
              href="#contact" 
              className="btn-primary w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
