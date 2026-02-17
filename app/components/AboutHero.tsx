import React from 'react';

const AboutHero = () => {
  return (
    <section className="bg-[#111111] text-white py-24 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top Heading */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">
            About Marketo360
          </h1>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-700 mb-12 md:mb-16"></div>

        {/* Content */}
        <div className="max-w-4xl">
          <div className="space-y-8 text-lg md:text-xl text-gray-300 font-light leading-relaxed">
            <p>
              Marketo360 Marketing is an omnichannel digital marketing agency, dedicated to assisting brands in amplifying their digital presence. Marketo360 has a passion for start-ups & helping big companies act like start-ups, with an outsourced marketing solution for businesses of all sizes.
            </p>
            <p>
              Marketo360 entered the digital marketing space as hospitality experts, initially collaborating with leading establishments in the restaurant and hotel sectors throughout the UK and Europe. We still love hospitality marketing, but have since broadened our industry expertise, now working with the “Best Brands In Each Sector”.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
