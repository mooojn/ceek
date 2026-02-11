'use client';

import React from 'react';
import Image from 'next/image';
import { Plus } from 'lucide-react';

interface CaseStudy {
    id: number;
    title: string;
    year: string;
    image: string;
}

const caseStudies: CaseStudy[] = [
    {
        id: 1,
        title: "QUORN STONE",
        year: "2025",
        image: "/placeholders/quorn.svg"
    },
    {
        id: 2,
        title: "MOGU MOGU",
        year: "2024",
        image: "/placeholders/mogu.svg"
    },
    {
        id: 3,
        title: "DAME",
        year: "2023",
        image: "/placeholders/dame.svg"
    }
];

const CaseStudies = () => {
    return (
        <section className="bg-[#1a1a1a] py-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase mb-6 tracking-tight">
                        Recent Case Studies
                    </h2>
                    <hr className="border-gray-700 opacity-50" />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {caseStudies.map((study) => (
                        <div key={study.id} className="group relative cursor-pointer block">
                            {/* Card Container */}
                            <div className="relative aspect-[4/5] overflow-hidden bg-gray-900 transition-all duration-300 group-hover:rounded-xl">
                                {/* Image */}
                                <Image
                                    src={study.image}
                                    alt={study.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/40" />

                                {/* Year Label */}
                                <div className="absolute top-6 right-6 z-10">
                                    <span className="text-white font-medium text-lg tracking-wider">
                                        {study.year}
                                    </span>
                                </div>

                                {/* Hover Icon */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-20">
                                    <div className="bg-white rounded-full p-4 transform scale-75 transition-transform duration-300 group-hover:scale-100 shadow-lg">
                                        <Plus className="text-black w-8 h-8" strokeWidth={2.5} />
                                    </div>
                                </div>
                            </div>

                            {/* Title */}
                            <div className="mt-6">
                                <h3 className="text-2xl font-bold text-white uppercase tracking-wide group-hover:underline decoration-1 underline-offset-4">
                                    {study.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-right">
                    <button className="bg-white text-black px-8 py-3 rounded-full font-medium text-lg hover:bg-gray-200 hover:scale-105 transition-all duration-300">
                        More Projects
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
