import React from 'react';
import Link from 'next/link';
import { Plus } from 'lucide-react';

interface CaseStudyServicesProps {
    services: string[];
}

const CaseStudyServices = ({ services }: CaseStudyServicesProps) => {
    return (
        <section className="bg-[#1a1a1a] text-white py-20 px-6 md:px-12 lg:px-20 border-t border-gray-800">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12 text-sm font-bold uppercase tracking-widest">SERVICES</div>

                <div className="flex flex-col">
                    {services.map((service, index) => (
                        <Link href="/get-in-touch" key={index} className="flex justify-between items-center py-8 border-t border-gray-700 group cursor-pointer hover:bg-[#222] transition-colors px-4 -mx-4">
                            <h3 className="text-3xl md:text-5xl font-bold tracking-tight">{service}</h3>
                            <Plus className="text-white opacity-50 group-hover:opacity-100 transition-opacity" size={32} />
                        </Link>
                    ))}
                    <div className="border-t border-gray-700"></div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudyServices;
