'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import Link from 'next/link';
import { services } from '@/app/data/services';

interface ServicesProps {
    backgroundColor?: string;
    textColor?: string;
    titleColor?: string;
}

const Services = ({
    backgroundColor = "bg-[#1a1a1a]",
    textColor = "text-white",
    titleColor = "text-white"
}: ServicesProps) => {
    const [openId, setOpenId] = useState<number | null>(); // Default open item (Paid Media in example)

    const toggleService = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    const isLightBg = backgroundColor.includes('white') || backgroundColor.includes('gray-100') || backgroundColor.includes('neutral-100');
    const dividerColor = 'border-white';
    const descriptionColor = isLightBg ? 'text-gray-600' : 'text-gray-300';
    const inactiveTitleColor = 'text-white';

    return (
        <section className={`${backgroundColor} ${textColor} py-20 px-6 md:px-12 lg:px-20`}>
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <h2 className={`text-xl md:text-2xl font-medium ${titleColor} mb-6`}>Digital Marketing Services</h2>
                    <hr className={`${isLightBg ? 'border-gray-300' : 'border-white/30'} opacity-50`} />
                </div>

                {/* Accordion List */}
                <div className="flex flex-col">
                    {services.map((service) => (
                        <div key={service.id} className={`border-b ${dividerColor} last:border-b-0`}>
                            <button
                                onClick={() => toggleService(service.id)}
                                className="w-full py-8 flex items-center justify-between group focus:outline-none"
                                aria-expanded={openId === service.id}
                            >
                                <span className={`text-2xl md:text-5xl font-bold uppercase whitespace-nowrap transition-colors duration-300 ${openId === service.id ? titleColor : `${inactiveTitleColor} group-hover:${titleColor}`}`}>
                                    {service.title}
                                </span>
                                <div className={`${titleColor} transform transition-transform duration-300`}>
                                    {openId === service.id ? <Minus size={32} /> : <Plus size={32} />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {openId === service.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pb-10 pt-2 pr-0 md:pr-20">
                                            <p className={`${descriptionColor} text-base md:text-lg leading-relaxed mb-8 max-w-3xl`}>
                                                {service.description}
                                            </p>
                                            <Link href={service.link}>
                                                <button className={`${isLightBg ? 'bg-black text-white hover:opacity-80' : 'bg-white text-black hover:bg-gray-200'} px-8 py-3 rounded-full font-bold text-sm uppercase transition-colors`}>
                                                    Get in Touch
                                                </button>
                                            </Link>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
