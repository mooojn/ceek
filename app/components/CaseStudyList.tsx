import React from 'react';
import { Plus } from 'lucide-react';
import Link from 'next/link';

interface CaseStudy {
    id: number;
    title: string;
    slug: string;
    image: string;
    category: string;
}

const caseStudies: CaseStudy[] = [
    {
        id: 1,
        title: "OPPSN ONTARIO",
        slug: "oppsn-ontario",
        image: "/images/case-studies/c1.png",
        category: "Organization"
    },
    {
        id: 2,
        title: "REAL ESTATE",
        slug: "real-estate",
        image: "/images/case-studies/c2.png",
        category: "Real Estate"
    }
];

const CaseStudyList = () => {
    return (
        <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                    {caseStudies.map((study) => (
                        <Link href={`/portfolio/${study.slug}`} key={study.id} className="group cursor-pointer">
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
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl font-bold uppercase tracking-wide text-black">{study.title}</h3>
                                <span className="text-sm text-gray-600">{study.category}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudyList;
