import React from 'react';

const AboutHero = () => {
  return (
    <section className="bg-[#111111] text-white py-24 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top Heading */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">
            About CEEK
          </h1>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-700 mb-12 md:mb-16"></div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
          {/* Left Column: Sub-heading */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              The CEEK Team
            </h2>
          </div>

          {/* Right Column: Text Content */}
          <div className="space-y-8 text-lg md:text-xl text-gray-300 font-light leading-relaxed">
            <p>
              CEEK Marketing is an omnichannel digital marketing agency, dedicated to assisting brands in amplifying their digital presence. CEEK has a passion for start-ups & helping big companies act like start-ups, with an outsourced marketing solution for businesses of all sizes.
            </p>
            <p>
              CEEK entered the digital marketing space as hospitality experts, initially collaborating with leading establishments in the restaurant and hotel sectors throughout the UK and Europe. We still love hospitality marketing, but have since broadened our industry expertise, now working with the “Best Brands In Each Sector”.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
