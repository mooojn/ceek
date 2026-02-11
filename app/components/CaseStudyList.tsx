import React from 'react';
import { Plus } from 'lucide-react';
import Link from 'next/link';

interface CaseStudy {
    id: number;
    title: string;
    image: string;
    category?: string;
}

const caseStudies: CaseStudy[] = [
    {
        id: 1,
        title: "ENNISMORE",
        image: "/images/case-studies/3.PNG",
        category: "Hospitality"
    },
    {
        id: 2,
        title: "DELICIOUSLY ELLA",
        image: "/images/case-studies/4.PNG",
        category: "Food & Beverage"
    },
    {
        id: 3,
        title: "DAME",
        image: "/images/case-studies/5.PNG",
        category: "Retail"
    },
    {
        id: 4,
        title: "REVOLUT",
        image: "/images/case-studies/revolut.jpg",
        category: "Fintech"
    },
    {
        id: 5,
        title: "THE SHARD",
        image: "/images/case-studies/the-shard.jpg",
        category: "Real Estate"
    },
    {
        id: 6,
        title: "NIKE",
        image: "/images/case-studies/nike.jpg",
        category: "Fashion"
    }
];

const CaseStudyList = () => {
    return (
        <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-end mb-12">
                     <button className="bg-[#1a1a1a] text-white px-8 py-3 rounded-full font-bold text-sm uppercase hover:opacity-80 transition-opacity">
                        Filters
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {caseStudies.map((study) => (
                        <div key={study.id} className="group cursor-pointer">
                            <div className="relative aspect-square overflow-hidden mb-6">
                                <img 
                                    src={study.image} 
                                    alt={study.title} 
                                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                     <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black">
                                        <Plus size={24} />
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold uppercase tracking-wide">{study.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudyList;
