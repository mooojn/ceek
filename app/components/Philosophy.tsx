'use client';

import React from 'react';

const philosophyItems = [
    {
        id: 1,
        title: "Strategy",
        description: "CEEK's meticulously created strategies for clients are tailored to align with your brand's core values. We believe a robust strategy forms the backbone of any successful marketing venture. The CEEK team creates bespoke strategies driven by data and market trends, focusing on scalable and sustainable solutions to create a tangible pathway to success.",
        position: "left"
    },
    {
        id: 2,
        title: "Execution",
        description: "Precise execution is paramount to the CEEK philosophy. We operate at an extremely high level to convert strategic planning into tangible results. The CEEK execution process is designed to ensure you are getting the maximum return from your investment, increasing your brand's visibility across the largest digital marketing channels in the world.",
        position: "right"
    },
    {
        id: 3,
        title: "Growth",
        description: "The entire CEEK team is dedicated to not just meeting, but exceeding your expectations. CEEK's bespoke growth strategies are designed to focus on expansion beyond expectation. We use real-time data and feedback to constantly adjust to evolving markets, helping you achieve new heights of success and visibility across multiple platforms.",
        position: "left"
    }
];

const Philosophy = () => {
    return (
        <section className="bg-[#1a1a1a] py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-20">
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">The CEEK Philosophy</h2>
                    <hr className="border-gray-800 opacity-50" />
                </div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Vertical Line - Centered on desktop, left on mobile */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-[#404040] transform md:-translate-x-1/2"></div>

                    <div className="space-y-12 md:space-y-0">
                        {philosophyItems.map((item, index) => (
                            <div key={item.id} className={`flex flex-col md:flex-row items-center w-full ${item.position === 'right' ? 'md:flex-row-reverse' : ''}`}>

                                {/* Card Side */}
                                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-16 relative">
                                    <div className={`
                                        border-2 border-white/20 rounded-xl p-8 md:p-10 bg-[#1a1a1a] relative z-10
                                        ${item.position === 'right' ? 'md:ml-16 md:mr-0' : 'md:mr-16 md:ml-0'}
                                    `}>
                                        <div className="absolute top-0 right-0 bg-white text-black font-bold text-lg w-10 h-10 flex items-center justify-center rounded-bl-xl rounded-tr-lg">
                                            {item.id}
                                        </div>
                                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{item.title}</h3>
                                        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Mobile Connector Node (Hidden on Desktop) */}
                                    {/* Desktop Dotted Line to Node */}
                                    <div className={`hidden md:block absolute top-1/2 h-[1px] w-16 border-t-2 border-dashed border-[#505050]
                                        ${item.position === 'left' ? 'right-0' : 'left-0'}
                                     `}></div>
                                </div>

                                {/* Timeline Node */}
                                <div className="absolute left-[20px] md:left-1/2 w-4 h-4 bg-[#505050] transform -translate-x-1/2 md:translate-x-[-50%] rotate-45 z-20 mt-8 md:mt-0 md:static"></div>

                                {/* Empty Side for Alignment */}
                                <div className="hidden md:block w-1/2"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
