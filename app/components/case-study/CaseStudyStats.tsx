import React from 'react';

interface StatItem {
    label: string;
    value: string;
}

interface CaseStudyStatsProps {
    title: string;
    stats: StatItem[];
}

const CaseStudyStats = ({ title, stats }: CaseStudyStatsProps) => {
    return (
        <section className="bg-[#F5F5F5] py-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-start lg:items-center">

                {/* Heading */}
                <div className="lg:w-1/4">
                    <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight">
                        {title}
                    </h2>
                </div>

                {/* Stats */}
                <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
                    {stats.map((stat, index) => (
                        <div key={index} className="border-t border-gray-300 pt-4">
                            <div className="text-sm text-gray-500 mb-2">{stat.label}</div>
                            <div className="text-5xl md:text-6xl lg:text-7xl font-light text-black tracking-tight">
                                {stat.value}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default CaseStudyStats;
