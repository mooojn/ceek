'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Plus, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CaseStudy {
    id: number;
    title: string;
    year: string;
    image: string;
    industry: string;
    services: string;
    location: string;
    achievement: string;
}

const caseStudies: CaseStudy[] = [
    {
        id: 1,
        title: "OPPSN ONTARIO",
        year: "2025",
        image: "/images/case-studies/c1.png",
        industry: "Organization",
        services: "Lead Generation",
        location: "USA, Canada",
        achievement: "For OPPSN (Ontario), we developed and managed performance marketing campaigns that increased donations and raised from $2K to $10K in under 2 months, delivering measurable ROI through data-driven optimization."
    },
    {
        id: 2,
        title: "REAL ESTATE",
        year: "2024",
        image: "/images/case-studies/c2.png",
        industry: "Real estate",
        services: "Lead Generation",
        location: "UAE, Dubai",
        achievement: "Executed high-converting real estate campaigns in a competitive market, generating qualified global leads and driving 50% inventory sales through Meta, Google, and multi-channel advertising."
    }
];

const CaseStudies = () => {
    const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
                    {caseStudies.map((study) => (
                        <div
                            key={study.id}
                            className="group relative cursor-pointer block"
                            onClick={() => setSelectedStudy(study)}
                        >
                            {/* Card Container */}
                            <div className="relative aspect-[16/10] overflow-hidden bg-gray-900 transition-all duration-300 group-hover:rounded-xl border border-white/10">
                                {/* Image */}
                                <Image
                                    src={study.image}
                                    alt={study.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/60" />

                                {/* Year Label */}
                                <div className="absolute top-6 right-6 z-10">
                                    <span className="bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-white font-medium text-sm tracking-wider">
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
                            <div className="mt-6 flex justify-between items-center">
                                <h3 className="text-2xl font-bold text-white uppercase tracking-wide group-hover:text-blue-400 transition-colors">
                                    {study.title}
                                </h3>
                                <Plus className="text-white/30 group-hover:text-white transition-colors" size={20} />
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

            {/* Detailed Modal */}
            <AnimatePresence>
                {selectedStudy && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedStudy(null)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-4xl bg-[#111] overflow-y-auto rounded-2xl border border-white/10 shadow-2xl flex flex-col max-h-[90vh] custom-scrollbar"
                            style={{
                                scrollbarWidth: 'thin',
                                scrollbarColor: '#333 #111'
                            }}
                        >
                            <style jsx global>{`
                                .custom-scrollbar::-webkit-scrollbar {
                                    width: 8px;
                                }
                                .custom-scrollbar::-webkit-scrollbar-track {
                                    background: #111;
                                    border-radius: 0 16px 16px 0;
                                }
                                .custom-scrollbar::-webkit-scrollbar-thumb {
                                    background: #333;
                                    border-radius: 10px;
                                    border: 2px solid #111;
                                }
                                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                                    background: #444;
                                }
                            `}</style>

                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedStudy(null)}
                                className="absolute top-6 right-6 z-50 p-2 bg-black/50 backdrop-blur-md text-white rounded-full hover:bg-white hover:text-black transition-colors border border-white/10"
                            >
                                <X size={24} />
                            </button>

                            {/* Image Section - Top Focus */}
                            <div className="w-full relative aspect-[16/10] sm:aspect-video md:aspect-[21/9] bg-gray-900 border-b border-white/10">
                                <Image
                                    src={selectedStudy.image}
                                    alt={selectedStudy.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Content Section - Bottom Detailed View */}
                            <div className="w-full p-6 sm:p-10 md:p-16">
                                <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
                                    <div className="space-y-3 md:space-y-4">
                                        <div className="flex items-center gap-4">
                                            <span className="bg-blue-600/20 text-blue-400 px-3 md:px-4 py-1 rounded-full font-bold uppercase tracking-widest text-[9px] md:text-[10px] border border-blue-500/20">
                                                {selectedStudy.year} CASE STUDY
                                            </span>
                                        </div>
                                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white uppercase tracking-tight leading-[1.1] md:leading-none">
                                            {selectedStudy.title}
                                        </h2>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 py-8 md:py-12 border-y border-white/5">
                                        <div className="space-y-1 md:space-y-2">
                                            <p className="text-white/30 uppercase text-[9px] md:text-[10px] font-black tracking-[0.2em]">Industry</p>
                                            <p className="text-white text-lg md:text-xl font-medium">{selectedStudy.industry}</p>
                                        </div>
                                        <div className="space-y-1 md:space-y-2">
                                            <p className="text-white/30 uppercase text-[9px] md:text-[10px] font-black tracking-[0.2em]">Services</p>
                                            <p className="text-white text-lg md:text-xl font-medium">{selectedStudy.services}</p>
                                        </div>
                                        <div className="space-y-1 md:space-y-2">
                                            <p className="text-white/30 uppercase text-[9px] md:text-[10px] font-black tracking-[0.2em]">Location</p>
                                            <p className="text-white text-lg md:text-xl font-medium">{selectedStudy.location}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4 md:space-y-6">
                                        <p className="text-white/30 uppercase text-[9px] md:text-[10px] font-black tracking-[0.2em]">The Achievement</p>
                                        <p className="text-white text-lg md:text-2xl leading-relaxed font-light first-letter:text-3xl md:first-letter:text-4xl first-letter:font-bold first-letter:text-blue-500 first-letter:mr-1">
                                            {selectedStudy.achievement}
                                        </p>
                                    </div>

                                    <div className="pt-6 md:pt-10 flex flex-col sm:flex-row gap-4">
                                        <button
                                            onClick={() => setSelectedStudy(null)}
                                            className="w-full sm:w-auto bg-white text-black px-8 md:px-12 py-4 md:py-5 rounded-full font-black uppercase text-[10px] md:text-xs tracking-[0.15em] hover:bg-blue-600 hover:text-white transition-all duration-500 shadow-xl"
                                        >
                                            Close Case Study
                                        </button>
                                        <button
                                            className="w-full sm:w-auto bg-transparent border border-white/20 text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-black uppercase text-[10px] md:text-xs tracking-[0.15em] hover:bg-white hover:text-black transition-all duration-500"
                                        >
                                            View Full Project
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default CaseStudies;
