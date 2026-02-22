import React from 'react';
import { clientLogos } from '../data/clients';

const Partners = () => {

    return (
        <section className="w-full bg-[#F5F1EA] py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    <div className="flex flex-col justify-center">
                        <h2 className="text-5xl md:text-7xl font-bold text-black tracking-tight leading-tight">
                            Where Top Brands Choose to Grow
                        </h2>
                    </div>
                    <div className="flex flex-col justify-center items-start text-left md:items-end md:text-right">
                        <p className="text-lg md:text-xl text-gray-800 leading-relaxed max-w-lg">
                            At Marketo360, we don’t just market, we scale brands. Powered by smart strategy and performance insights, we turn powerful ideas into multi-platform campaigns that connect with the right audience and drive real results
                        </p>
                    </div>
                </div>

                {/* Carousel Container */}
                <div className="relative w-full overflow-hidden">
                    {/* Gradient Masks */}
                    <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[#F5F1EA] to-transparent z-10"></div>
                    <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#F5F1EA] to-transparent z-10"></div>

                    <div className="flex animate-scroll whitespace-nowrap">
                        {/* First Set of Logos */}
                        <div className="flex items-center space-x-8 md:space-x-16 mx-4 md:mx-8">
                            {clientLogos.map((logo) => (
                                <img
                                    key={logo.id}
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="h-20 md:h-28 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity flex-shrink-0"
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
                                    className="h-20 md:h-28 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity flex-shrink-0"
                                />
                            ))}
                        </div>
                        {/* Triplicate Set for Loop to be safe on wide screens */}
                        <div className="flex items-center space-x-8 md:space-x-16 mx-4 md:mx-8">
                            {clientLogos.map((logo) => (
                                <img
                                    key={`tri-${logo.id}`}
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="h-20 md:h-28 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity flex-shrink-0"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;
