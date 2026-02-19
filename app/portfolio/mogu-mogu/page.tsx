import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CTA from '../../components/CTA';
import CaseStudyHeader from '../../components/case-study/CaseStudyHeader';
import CaseStudyStats from '../../components/case-study/CaseStudyStats';
import CaseStudyIntro from '../../components/case-study/CaseStudyIntro';
import CaseStudyServices from '../../components/case-study/CaseStudyServices';
import CaseStudyBody from '../../components/case-study/CaseStudyBody';
import MoreCeekClients from '../../components/case-study/MoreCeekClients';

export default function MoguMoguPage() {
    return (
        <main className="flex flex-col min-h-screen bg-white">
            <Navbar />
            
            <CaseStudyHeader />
            
            {/* Hero Image - Full Width */}
            <div className="w-full h-[50vh] md:h-[70vh] relative">
                <img 
                    src="/images/case-studies/2.PNG" 
                    alt="Mogu Mogu Bottles" 
                    className="w-full h-full object-cover"
                />
            </div>

            <CaseStudyIntro />
            
            <CaseStudyStats />
            
            <CaseStudyBody />

            <CaseStudyServices />
            
            <MoreCeekClients />
            
            <CTA 
               title="LET'S WORK TOGETHER"
               text="If you have a business you are looking to scale through digital marketing, make an enquiry at CEEK to set up the initial call to align on goals and discuss how they can be achieved."
            />
            
            <Footer />
        </main>
    );
}
