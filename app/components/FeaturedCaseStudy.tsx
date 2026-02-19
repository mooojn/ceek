import React from 'react';
import { Plus } from 'lucide-react';
import Link from 'next/link';

const FeaturedCaseStudy = () => {
    return (
        <section className="bg-[#1a1a1a] text-white py-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                    {/* Left: Image */}
                    <div className="relative w-full lg:w-2/3 aspect-[4/3] overflow-hidden group">
                        <Link href="/portfolio/oppsn-ontario">
                            <img
                                src="/images/case-studies/c1.png"
                                alt="OPPSN Ontario Featured Case Study"
                                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute bottom-8 right-8">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black cursor-pointer hover:bg-gray-200 transition-colors">
                                    <Plus size={32} />
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Right: Text */}
                    <div className="flex flex-col justify-between py-4 lg:w-1/3">
                        <div className="text-sm font-bold tracking-widest uppercase mb-4">FEATURED</div>

                        <div className="mt-auto">
                            <h2 className="text-5xl md:text-6xl font-bold mb-6">OPPSN Ontario</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedCaseStudy;
