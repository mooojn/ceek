'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ServicesOverlay from './ServicesOverlay';

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-[#FAFAFA] z-40 flex items-center justify-between px-6 py-4 md:px-12 border-b border-gray-200">
        <div className="text-2xl font-bold tracking-tighter text-black uppercase font-sans">
          <Link href="/">CEEK</Link>
        </div>

        <div className="hidden md:flex items-center gap-8 text-[#333333] font-medium text-base">
          <button 
            onClick={() => setIsServicesOpen(true)}
            className="relative group transition-colors hover:text-black cursor-pointer"
          >
            <span>Services</span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </button>
          <Link href="/sectors" className="relative group transition-colors hover:text-black">
            <span>Sectors</span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/locations" className="relative group transition-colors hover:text-black">
            <span>Locations</span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/case-studies" className="relative group transition-colors hover:text-black">
            <span>Case Studies</span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/about-us" className="relative group transition-colors hover:text-black">
            <span>About Us</span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        <div>
          <Link
            href="/contact"
            className="bg-black text-white px-6 py-3 rounded-full font-medium hover:opacity-80 transition-opacity"
          >
            Get in touch
          </Link>
        </div>
      </nav>

      {/* Services Overlay */}
      {isServicesOpen && (
        <ServicesOverlay onClose={() => setIsServicesOpen(false)} />
      )}
    </>
  );
};

export default Navbar;
