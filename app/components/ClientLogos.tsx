import React from 'react';

const logos = [
  { name: "S'MORE", id: 1 },
  { name: "deliciously ella", id: 2 },
  { name: "DAME", id: 3 },
  { name: "MOGU MOGU", id: 4 },
  { name: "LAVAZZA", id: 5 },
  { name: "The Body Shop", id: 6 },
  { name: "Tinder", id: 7 },
  { name: "Pantene", id: 8 },
];

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
              {logos.map((logo) => (
                <div key={logo.id} className="text-2xl md:text-4xl font-bold text-black opacity-60 hover:opacity-100 transition-opacity cursor-default font-serif uppercase tracking-wider">
                  {logo.name}
                </div>
              ))}
            </div>
            {/* Duplicate Set for Loop */}
            <div className="flex items-center space-x-8 md:space-x-16 mx-4 md:mx-8">
              {logos.map((logo) => (
                <div key={`dup-${logo.id}`} className="text-2xl md:text-4xl font-bold text-black opacity-60 hover:opacity-100 transition-opacity cursor-default font-serif uppercase tracking-wider">
                  {logo.name}
                </div>
              ))}
            </div>
            {/* Triplicate Set for Loop */}
            <div className="flex items-center space-x-8 md:space-x-16 mx-4 md:mx-8">
              {logos.map((logo) => (
                <div key={`tri-${logo.id}`} className="text-2xl md:text-4xl font-bold text-black opacity-60 hover:opacity-100 transition-opacity cursor-default font-serif uppercase tracking-wider">
                  {logo.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
