'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import Link from 'next/link';

interface Service {
    id: number;
    title: string;
    description: string;
    link: string;
}

const services: Service[] = [
    {
        id: 1,
        title: "STRATEGY",
        description: "We transform your business goals into a clear, data-driven digital roadmap designed for measurable growth. Our strategic planning combines market insights, audience research, and performance analytics to ensure every action delivers impact. With the right strategy in place, your brand doesn’t just compete — it leads.",
        link: "/services/strategy"
    },
    {
        id: 2,
        title: "SOCIAL MEDIA",
        description: "We build powerful social media presences that spark engagement and create meaningful connections with your audience. Through creative content and smart targeting, we turn attention into interaction and interaction into loyal customers. Your brand stays relevant, visible, and influential every single day.",
        link: "/services/social-media"
    },
    {
        id: 3,
        title: "SEO",
        description: "Our SEO strategies position your brand where it matters most — at the top of search results. By optimizing your website structure, content, and authority, we attract high-intent traffic that converts. The result is sustainable, long-term growth driven by organic visibility.",
        link: "/services/seo"
    },
    {
        id: 4,
        title: "PAID MEDIA",
        description: "We design and manage high-performance paid campaigns that maximize return on investment. From Google Ads to Meta platforms, every campaign is strategically optimized for reach, engagement, and conversions. Every click is measured, refined, and turned into real business growth.",
        link: "/services/paid-media"
    },
    {
        id: 5,
        title: "INFLUENCER",
        description: "We connect your brand with credible influencers who genuinely resonate with your target audience. Through authentic collaborations, we amplify your message and build trust at scale. Influence becomes more than visibility — it becomes measurable impact.",
        link: "/services/influencer"
    },
    {
        id: 6,
        title: "EMAIL & CRM",
        description: "We turn prospects into loyal customers through intelligent email marketing and CRM automation. Personalized communication, behavior-based targeting, and data insights ensure every message delivers value. Stronger relationships mean higher retention and consistent revenue growth.",
        link: "/services/email-crm"
    },
    {
        id: 7,
        title: "CONTENT CREATION",
        description: "We create compelling content that captures attention and drives action. From visuals to copy, every piece is crafted to reflect your brand voice and inspire engagement. Quality storytelling builds authority, trust, and lasting impressions.",
        link: "/services/content-creation"
    },
    {
        id: 8,
        title: "DIGITAL PR",
        description: "We elevate your brand reputation through strategic digital PR and media placements. By positioning your business on trusted platforms, we strengthen credibility and expand your reach. Visibility backed by authority builds lasting brand power.",
        link: "/services/digital-pr"
    },
    {
        id: 9,
        title: "GRAPHIC DESIGN",
        description: "We design visuals that communicate clearly and confidently. Every creative is built to reflect your brand’s identity and connect with your audience. Simple. Strategic. Memorable.",
        link: "/services/graphic-design"
    }
];

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
                                <span className={`text-3xl md:text-5xl font-bold uppercase transition-colors duration-300 ${openId === service.id ? titleColor : `${inactiveTitleColor} group-hover:${titleColor}`}`}>
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
                                                    {service.title}
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
