import React from 'react';
import Link from 'next/link';
import { Plus } from 'lucide-react';

const MoreCeekClients = () => {
    // Using images 3, 4, 5 as per plan
    const clients = [
        { id: 3, image: "/images/case-studies/4.PNG" }, // Deliciously Ella
        { id: 4, image: "/images/case-studies/3.PNG" }, // Ennismore (Coastal)
        { id: 5, image: "/images/case-studies/5.PNG" }, // Dame
    ];

    return (
        <section className="bg-[#F5F5F5] py-20 px-6 md:px-12 lg:px-20 border-t border-gray-200">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-black uppercase tracking-tight">
                        MORE Marketo360 CLIENTS
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {clients.map((client) => (
                        <div key={client.id} className="group cursor-pointer relative aspect-square overflow-hidden">
                            <img 
                                src={client.image} 
                                alt="Client Case Study" 
                                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black">
                                    <Plus size={24} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MoreCeekClients;
