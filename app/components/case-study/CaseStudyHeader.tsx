import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface CaseStudyHeaderProps {
    title: string;
    client: string;
    clientType: string;
    location: string;
    services: string[];
}

const CaseStudyHeader = ({ title, client, clientType, location, services }: CaseStudyHeaderProps) => {
    return (
        <section className="bg-[#111111] text-white pt-32 pb-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">
                {/* Back Link */}
                <Link href="/portfolio" className="inline-flex items-center text-sm md:text-base text-gray-400 hover:text-white transition-colors mb-12">
                    <ArrowLeft className="mr-2" size={20} />
                    BACK
                </Link>

                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
                    {/* Title */}
                    <div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">{title}</h1>
                    </div>

                    {/* Metadata Grid */}
                    <div className="grid grid-cols-2 gap-x-12 gap-y-8 lg:text-right">
                        <div>
                            <div className="text-xs font-bold uppercase tracking-widest text-white mb-1">CLIENT</div>
                            <div className="text-gray-400">{client}</div>
                        </div>
                        <div>
                            <div className="text-xs font-bold uppercase tracking-widest text-white mb-1">CLIENT TYPE</div>
                            <div className="text-gray-400">{clientType}</div>
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <div className="text-xs font-bold uppercase tracking-widest text-white mb-1">SERVICES</div>
                            <div className="text-gray-400 text-xs md:text-sm">
                                {services[0]}
                            </div>
                        </div>
                        <div>
                            <div className="text-xs font-bold uppercase tracking-widest text-white mb-1">LOCATION</div>
                            <div className="text-gray-400">{location}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudyHeader;
