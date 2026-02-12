'use client';

import React from 'react';
import Link from 'next/link';

const WorkTogether = () => {
    return (
        <section className="bg-[#F5F5F5] py-20 px-6 md:px-12 lg:px-20 border-t border-gray-200">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

                    {/* Left Content */}
                    <div className="flex-1 max-w-3xl">
                        <h2 className="text-5xl md:text-6xl font-bold text-black uppercase leading-tight tracking-tight">
                            LET’S MAKE IT HAPPEN
                        </h2>
                        <p className="mt-6 text-lg md:text-xl text-[#333333] leading-relaxed max-w-2xl">
                            Marketo360 helps you grow faster and smarter in today’s digital world. Let’s build something powerful together.
                        </p>
                    </div>

                    {/* Right Button */}
                    <div className="w-full lg:w-auto flex justify-start lg:justify-end mt-8 lg:mt-0">
                        <Link
                            href="/contact"
                            className="inline-block bg-black text-white rounded-full px-10 py-5 font-medium text-lg hover:scale-105 transition-transform duration-300"
                        >
                            Get In Touch
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WorkTogether;
