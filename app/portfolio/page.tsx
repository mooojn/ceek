import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CaseStudiesHero from '../components/CaseStudiesHero';
import FeaturedCaseStudy from '../components/FeaturedCaseStudy';
import CaseStudyList from '../components/CaseStudyList';
import WorkTogether from '../components/WorkTogether';

export default function CaseStudiesPage() {
    return (
        <main className="flex flex-col min-h-screen bg-white">
            <Navbar />
            
            {/* 1. Hero Section */}
            <CaseStudiesHero />
            
            {/* 2. Featured Case Study (Mogu Mogu) */}
            <FeaturedCaseStudy />

            {/* 3. Case Study Grid list */}
            <CaseStudyList />


            {/* 5. Work Together CTA */}
            <WorkTogether />
            
            <Footer />
        </main>
    );
}
