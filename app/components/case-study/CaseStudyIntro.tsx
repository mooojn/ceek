import React from 'react';
import Link from 'next/link';

interface CaseStudyIntroProps {
    subtitle: string;
    title: string;
    paragraphs: string[];
}

const CaseStudyIntro = ({ subtitle, title, paragraphs }: CaseStudyIntroProps) => {
    return (
        <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">

                {/* Left: Title */}
                <div className="lg:w-1/2">
                    <div className="text-sm text-gray-500 mb-4">{subtitle}</div>
                    <h2 className="text-5xl md:text-6xl font-bold text-black leading-tight tracking-tight">
                        {title}
                    </h2>
                </div>

                {/* Right: Content */}
                <div className="lg:w-1/2 flex flex-col items-start text-gray-600 text-lg leading-relaxed gap-6">
                    {paragraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}

                    <Link
                        href="/contact"
                        className="mt-8 inline-block bg-[#111111] text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300"
                    >
                        Let&apos;s Work Together
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default CaseStudyIntro;
