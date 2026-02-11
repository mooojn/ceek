'use client';

import React from 'react';
import Link from 'next/link';

const CTA = () => {
    return (
        <section className="bg-[#F5F5F5] py-20 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">

                    {/* Left Content */}
                    <div className="max-w-3xl">
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black uppercase tracking-tight leading-tight mb-6">
                            Start Working With CEEK
                        </h2>
                        <p className="text-lg md:text-xl text-[#333333] leading-relaxed max-w-2xl">
                            If you are ready to scale your digital marketing efforts and build your brand, get in touch with us at CEEK to align on business goals.
                        </p>
                    </div>

                    {/* Right Button */}
                    <div className="w-full lg:w-auto flex justify-start lg:justify-end">
                        <Link
                            href="/contact"
                            className="inline-block bg-black text-white rounded-full px-10 py-5 font-medium text-lg hover:scale-105 transition-transform duration-300"
                        >
                            Enquire Now
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CTA;
