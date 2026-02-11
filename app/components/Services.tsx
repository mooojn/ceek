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
        description: "Our strategic workshops are a core element of the CEEK methodology. We deep dive into your brand, your audience and your goals to create a roadmap for success.",
        link: "/services/strategy"
    },
    {
        id: 2,
        title: "SOCIAL MEDIA",
        description: "We are experts in creating social first content that resonates with your audience. We manage your channels, engage with your community and grow your following.",
        link: "/services/social-media"
    },
    {
        id: 3,
        title: "SEO",
        description: "Our technical SEO audits and content strategies ensure your brand is visible to the right people at the right time. We focus on long term sustainable growth.",
        link: "/services/seo"
    },
    {
        id: 4,
        title: "PAID MEDIA",
        description: "The CEEK paid media team is constantly conducting algorithmic testing to ensure your campaigns are ready to dominate your competition. CEEK paid campaigns are bespoke, ensuring we are optimising to create maximum ROI for your business swiftly and effectively.",
        link: "/services/paid-media"
    },
    {
        id: 5,
        title: "INFLUENCER",
        description: "We have a vast network of influencers and creators. We manage the entire process from selection and briefing to content creation and reporting.",
        link: "/services/influencer"
    },
    {
        id: 6,
        title: "EMAIL & CRM",
        description: "We design and build email campaigns that convert. From automated flows to weekly newsletters, we ensure your database is engaged and profitable.",
        link: "/services/email-crm"
    },
    {
        id: 7,
        title: "CONTENT CREATION",
        description: "Our in-house production team creates high quality photography and video content. We handle everything from concept to post production.",
        link: "/services/content-creation"
    },
    {
        id: 8,
        title: "DIGITAL PR",
        description: "We build relationships with journalists and publications to get your brand featured in top tier media outlets. We focus on quality placements that drive authority.",
        link: "/services/digital-pr"
    }
];

const Services = () => {
    const [openId, setOpenId] = useState<number | null>(); // Default open item (Paid Media in example)

    const toggleService = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="bg-[#1a1a1a] text-white py-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <h2 className="text-xl md:text-2xl font-medium text-white mb-6">Digital Marketing Services</h2>
                    <hr className="border-gray-700 opacity-50" />
                </div>

                {/* Accordion List */}
                <div className="flex flex-col">
                    {services.map((service) => (
                        <div key={service.id} className="border-b border-gray-800 last:border-b-0">
                            <button
                                onClick={() => toggleService(service.id)}
                                className="w-full py-8 flex items-center justify-between group focus:outline-none"
                                aria-expanded={openId === service.id}
                            >
                                <span className={`text-3xl md:text-5xl font-bold uppercase transition-colors duration-300 ${openId === service.id ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                                    {service.title}
                                </span>
                                <div className="text-white transform transition-transform duration-300">
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
                                            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 max-w-3xl">
                                                {service.description}
                                            </p>
                                            <Link href={service.link}>
                                                <button className="bg-white text-black px-8 py-3 rounded-full font-bold text-sm uppercase hover:bg-gray-200 transition-colors">
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
