import React from 'react';

const CaseStudiesHero = () => {
    return (
        <section className="bg-white pt-32 pb-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left: Text */}
                <div>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter leading-[0.9] text-black">
                        Services <br /> Portfolio
                    </h1>
                </div>

                {/* Right: Image */}
                <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-[40px] overflow-hidden">
                    {/* <img 
                        src="/images/case-studies/1.PNG" 
                        alt="Case Studies Hero" 
                        className="object-cover w-full h-full"
                    /> */}
                </div>
            </div>
        </section>
    );
};

export default CaseStudiesHero;
