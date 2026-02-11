import React from 'react';
import { Plus } from 'lucide-react';

const CaseStudyServices = () => {
    const services = [
        "SOCIAL MEDIA MARKETING",
        "INFLUENCER MARKETING",
        "EMAIL MARKETING"
    ];

    return (
        <section className="bg-[#1a1a1a] text-white py-20 px-6 md:px-12 lg:px-20 border-t border-gray-800">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12 text-sm font-bold uppercase tracking-widest">SERVICES</div>
                
                <div className="flex flex-col">
                    {services.map((service, index) => (
                        <div key={index} className="flex justify-between items-center py-8 border-t border-gray-700 group cursor-pointer hover:bg-[#222] transition-colors px-4 -mx-4">
                            <h3 className="text-3xl md:text-5xl font-bold tracking-tight">{service}</h3>
                            <Plus className="text-white opacity-50 group-hover:opacity-100 transition-opacity" size={32} />
                        </div>
                    ))}
                    <div className="border-t border-gray-700"></div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudyServices;
