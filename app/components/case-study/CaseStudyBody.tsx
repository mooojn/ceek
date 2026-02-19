import React from 'react';

interface BodySection {
    heading: string;
    paragraphs: string[];
}

interface CaseStudyBodyProps {
    sections: BodySection[];
}

const CaseStudyBody = ({ sections }: CaseStudyBodyProps) => {
    return (
        <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">

                {/* Left: Sticky Title */}
                <div className="lg:w-1/4">
                    <h2 className="text-4xl md:text-5xl font-bold text-black sticky top-32">
                        The Project
                    </h2>
                </div>

                {/* Right: Content */}
                <div className="lg:w-3/4 text-lg text-gray-700 leading-relaxed space-y-12">
                    {sections.map((section, index) => (
                        <div key={index}>
                            <h3 className="text-2xl font-bold text-black uppercase mb-4">{section.heading}</h3>
                            {section.paragraphs.map((paragraph, pIndex) => (
                                <p key={pIndex} className={pIndex < section.paragraphs.length - 1 ? "mb-6" : ""}>
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default CaseStudyBody;
