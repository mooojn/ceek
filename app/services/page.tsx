import React from 'react';
import Navbar from '../components/Navbar';
import ServicesHero from '../components/ServicesHero';
import Partners from '../components/Partners'; // Infinite Logos Slider
import Services from '../components/Services';
import CaseStudies from '../components/CaseStudies';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#111111]">
      <Navbar />
      
      {/* 1. Services Hero: Custom component */}
      <ServicesHero />
      
      {/* 2. Infinite Logos Slider: Reused from Home */}
      <Partners />
      
      {/* 3. Digital Marketing Services: Reused with off-white bg */}
      <Services 
        backgroundColor="bg-[#F5F5F5]" 
        textColor="text-black" 
        titleColor="text-black"
      />
      
      {/* 4. Recent Case Studies: Reused from Home */}
      <CaseStudies />
      
      {/* 5. Last Component before form (CTA): Reused from Home */}
      <CTA />
      
      <Footer />
    </main>
  );
}
