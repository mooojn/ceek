import React from 'react';
import Link from 'next/link';

const ServicesHero = () => {
  return (
    <section className="bg-[#111111] text-white pt-32 pb-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="border-b border-gray-700 pb-12 mb-12">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-tight tracking-tighter">
            Digital<br />
            Marketing<br />
            Services
          </h1>
        </div>

        {/* Content */}
        <div className="max-w-4xl">
          <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-10">
            Marketo360 brings together a team of digital experts to deliver tailored, performance-driven marketing solutions. We stay ahead of industry trends and apply data-led strategies to help brands grow, adapt, and achieve measurable results across every digital channel.
          </p>
          
          <Link 
            href="/contact" 
            className="inline-block bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors duration-300"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
