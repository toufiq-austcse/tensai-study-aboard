import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#00398e] text-gray-300">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <p className="mb-6">
              Opening doors to international education opportunities and helping students achieve their academic dreams abroad.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/TensaiStudyAbroadBD" target="_blank" rel="noopener noreferrer" className="bg-[#004aad] hover:bg-[#003b8e] p-2 rounded-full transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/tensaistudyabroad/" target="_blank" rel="noopener noreferrer" className="bg-[#004aad] hover:bg-[#003b8e] p-2 rounded-full transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/tensai-study-abroad/" target="_blank" rel="noopener noreferrer" className="bg-[#004aad] hover:bg-[#003b8e] p-2 rounded-full transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">Destinations</a></li>
              {/* <li><a href="#testimonials" className="hover:text-white transition-colors">Success Stories</a></li> */}
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-white font-semibold mb-4">Study Destinations</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">United States</a></li>
              <li><a href="#" className="hover:text-white transition-colors">United Kingdom</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Canada</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Australia</a></li>
              <li><a href="#" className="hover:text-white transition-colors">New Zealand</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Japan</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-white font-semibold mb-4">Contact Information</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-[18px] h-[18px] mr-2 flex items-center justify-center">
                  <MapPin size={18} className="text-white" />
                </div>
                <div className="m-0 p-0">
                  <div className="m-0 p-0">DHAKA OFFICE</div>
                  <span className="m-0 p-0">Kha-214/E, 5th Floor, Pragati Tower, Merul Badda (Near Brac University)</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-[18px] h-[18px] mr-2 flex items-center justify-center">
                  <MapPin size={18} className="text-white" />
                </div>
                <div className="m-0 p-0">
                  <div className="m-0 p-0">UK OFFICE</div>
                  <span className="m-0 p-0">300 Barking Road, E13 8HL, London</span>
                </div>
              </li>
              <li className="flex items-center">
                <div className="flex-shrink-0 w-[18px] h-[18px] mr-2 flex items-center justify-center">
                  <Mail size={18} className="text-white" />
                </div>
                <span>info@tensaistudyabroad.com</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-[18px] h-[18px] mr-2 flex items-center justify-center">
                  <Phone size={18} className="text-white" />
                </div>
                <div>
                  <a href="https://wa.me/8801731640666" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    <span>+8801731 640 666 (Call/WhatsApp)</span>
                  </a><br/>
                  <a href="https://wa.me/8801896088956" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    <span>+8801896 088 956 (Call/WhatsApp)</span>
                  </a><br/>
                  <span>+44 7482 443968 (UK)</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#003b8e] mt-8 pt-8 text-sm text-center">
          <p>© {new Date().getFullYear()} Tensai Study Abroad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
