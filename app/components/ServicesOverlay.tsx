import React from 'react';
import { Phone } from 'lucide-react';
import Link from 'next/link';

interface ServiceLinkProps {
  title: string;
  href?: string;
}

const ServiceLink = ({ title, href = '#' }: ServiceLinkProps) => {
  return (
    <div className="group">
      <Link href={href}>
        <h3 className="text-4xl md:text-5xl font-light tracking-tight text-white hover:text-gray-400 hover:scale-[1.02] transition-all duration-300 transform cursor-pointer">
          {title}
        </h3>
      </Link>
    </div>
  );
};

interface ServicesOverlayProps {
  onClose?: () => void;
}

const ServicesOverlay = ({ onClose }: ServicesOverlayProps) => {
  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-[#141414] to-[#1C1C1F] text-white flex flex-col overflow-y-auto animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
      
      {/* Top Right Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-8 right-8 text-sm text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer z-50"
        aria-label="Close menu"
      >
        Close &times;
      </button>

      {/* Main Content Container */}
      <div className="flex-grow max-w-7xl mx-auto w-full px-8 lg:px-16 py-24 flex flex-col justify-center">
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-x-32 gap-y-8 w-full">
          
          {/* Left Column */}
          <div className="space-y-6">
            <ServiceLink title="Social Media" />
            <ServiceLink title="Paid Media" />
            <ServiceLink title="Marketing Strategy" />
            <ServiceLink title="Influencer Marketing" />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <ServiceLink title="SEO" />
            <ServiceLink title="Content Creation" />
            <ServiceLink title="Digital PR" />
            <ServiceLink title="Email Marketing" />
          </div>

        </div>

        {/* See All Services Button */}
        <div className="mt-16">
          <Link 
            href="/services" 
            className="inline-block bg-white text-black rounded-full px-8 py-3 font-medium hover:bg-gray-200 transition-colors duration-300"
          >
            See All Services
          </Link>
        </div>

      </div>

      {/* Footer Area */}
      <div className="w-full border-t border-gray-700 mt-auto">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Left: Socials */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <span className="font-bold text-white">Let's Connect</span>
              <div className="flex gap-4 text-gray-300">
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              </div>
            </div>

            {/* Center: Empty */}
            <div className="hidden md:block"></div>

            {/* Right: Contact */}
            <div className="flex flex-col items-center md:items-end gap-2">
              <span className="font-bold text-white">Contact Us</span>
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-end">
                  <span className="text-gray-300 hover:text-white cursor-pointer transition-colors">Email</span>
                </div>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black">
                  <Phone size={20} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default ServicesOverlay;
