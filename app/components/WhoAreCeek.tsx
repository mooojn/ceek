'use client';

import React from 'react';
import Link from 'next/link';

const WhoAreCeek = () => {
    return (
        <section className="bg-[#E8E4DC] py-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* Left Column */}
                    <div>
                        <p className="text-sm md:text-base text-[#333333] mb-4 font-medium tracking-wide">
                            Digital Marketing Agency In London
                        </p>
                        <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-black leading-tight tracking-tight">
                            Who Are CEEK
                        </h2>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                        <p className="text-lg md:text-xl text-[#2a2a2a] leading-relaxed">
                            Our unique approach is deliberate, as a true extension of your business we partner to ensure growth through digital expertise. CEEK is headquartered in London but service clients across the globe.
                        </p>
                        <p className="text-lg md:text-xl text-[#2a2a2a] leading-relaxed">
                            Founded in 2016, CEEK has always been fixated on delivering the best marketing strategy and execution across various sectors and territories. The CEEK head office in London is located in Soho, the heart of London's marketing and creative scene.
                        </p>
                        <p className="text-lg md:text-xl text-[#2a2a2a] leading-relaxed">
                            CEEK boasts clients of all sizes, ranging from large multi-national corporations, to disruptive start-ups. Our in-house Marketing Strategy team creates tailored strategies which are proven to increase the profitability of clients.
                        </p>
                        <p className="text-lg md:text-xl text-[#2a2a2a] leading-relaxed">
                            The award-winning strategy delivery is coupled with best-in-class marketing execution teams across areas such as <strong>Social Media</strong>, <strong>Search Engine Optimisation</strong>, <strong>Paid Acquisition</strong>, <strong>Influencer Marketing</strong> and various forms of <strong>Digital PR</strong>.
                        </p>

                        <div className="pt-8">
                            <Link
                                href="/about-us"
                                className="inline-block bg-black text-white rounded-full px-10 py-5 font-medium text-lg hover:scale-105 transition-transform duration-300"
                            >
                                About CEEK
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhoAreCeek;
