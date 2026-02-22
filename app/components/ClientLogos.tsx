import React from 'react';
import { clientLogos } from '../data/clients';

const ClientLogos = () => {
  return (
    <section className="bg-[#E8E3DD] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A1A1A] mb-12 uppercase tracking-tight">
          We Work With The Best
        </h2>

        {/* Carousel Container */}
        <div className="relative w-full overflow-hidden">
          {/* Gradient Masks */}
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[#E8E3DD] to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#E8E3DD] to-transparent z-10"></div>

          <div className="flex animate-scroll whitespace-nowrap">
            {/* First Set of Logos */}
            <div className="flex items-center space-x-8 md:space-x-16 mx-4 md:mx-8">
              {clientLogos.map((logo) => (
                <img
                  key={logo.id}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-20 md:h-32 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity flex-shrink-0"
                />
              ))}
            </div>
            {/* Duplicate Set for Loop */}
            <div className="flex items-center space-x-8 md:space-x-16 mx-4 md:mx-8">
              {clientLogos.map((logo) => (
                <img
                  key={`dup-${logo.id}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-20 md:h-32 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity flex-shrink-0"
                />
              ))}
            </div>
            {/* Triplicate Set for Loop */}
            <div className="flex items-center space-x-8 md:space-x-16 mx-4 md:mx-8">
              {clientLogos.map((logo) => (
                <img
                  key={`tri-${logo.id}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-20 md:h-32 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity flex-shrink-0"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
