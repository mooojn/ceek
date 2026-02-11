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

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="lg:w-1/2">
            <div className="text-gray-400 text-sm md:text-base mb-4">London Marketing Consultancy</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
              Digital Marketing at<br />CEEK
            </h2>
          </div>

          <div className="lg:w-1/2 flex flex-col items-start">
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              CEEK has brought together an experienced team with different skill sets, covering aspects of digital marketing services – offering a complete package to clients with a tailored approach to maximise the return on investment of every campaign.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              In an industry which is constantly changing at a fast pace, our team stays updated with all trends across their various specialities, allowing us to deliver the best results for our clients.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-10">
              Our years of experience spanning a diverse range of sectors and industries allows us to deliver the most effective digital marketing methods for each of our clients based on their industry and specific goals.
            </p>
            
            <Link 
              href="/contact" 
              className="inline-block bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors duration-300"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
