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
                            Digital Marketing Agency
                        </p>
                        <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-black leading-tight tracking-tight">
                            We are Marketo360
                        </h2>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                        <p className="text-lg md:text-xl text-[#2a2a2a] leading-relaxed">
                            At Marketo360, we don’t just market brands — we build digital growth engines. With over 10 years of cross-industry experience, we’ve helped businesses worldwide turn ideas into impact and strategy into measurable success.
                        </p>
                        <p className="text-lg md:text-xl text-[#2a2a2a] leading-relaxed">
                            From education institutions to global enterprises, our team understands what it takes to win in competitive markets. Every campaign is powered by data, creativity, and performance optimization — ensuring maximum visibility, engagement, and return on investment.
                        </p>
                        <p className="text-lg md:text-xl text-[#2a2a2a] leading-relaxed">
                            Our mission is simple: deliver results, exceed expectations, and create long-term partnerships built on trust and client satisfaction. With Marketo360, growth isn’t optional — it’s engineered.
                        </p>

                        <div className="pt-8">
                            <Link
                                href="/about-us"
                                className="inline-block bg-black text-white rounded-full px-10 py-5 font-medium text-lg hover:scale-105 transition-transform duration-300"
                            >
                                About Marketo360
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhoAreCeek;
