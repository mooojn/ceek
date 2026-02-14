'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ServicesOverlay from './ServicesOverlay';

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-[#FAFAFA] z-40 flex items-center justify-between px-6 py-4 md:px-12 border-b border-gray-200">
        <Link href="/">
          <Image
            src="/logo-b.png"
            alt="Marketo360"
            width={150}
            height={40}
          />
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-[#333333] font-medium text-base list-none">
          {[
            { name: 'Services', action: () => setIsServicesOpen(true) },
            // { name: 'Sectors', href: '/sectors' },
            // { name: 'Locations', href: '/locations' },
            { name: 'Case Studies', href: '/case-studies' },
            { name: 'About Us', href: '/about-us' },
          ].map((item) => (
            <li key={item.name}>
              {item.href ? (
                <Link href={item.href} className="relative group transition-colors hover:text-black">
                  <span>{item.name}</span>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ) : (
                <button
                  onClick={item.action}
                  className="relative group transition-colors hover:text-black cursor-pointer"
                >
                  <span>{item.name}</span>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </button>
              )}
            </li>
          ))}
        </ul>

        <div>
          <Link
            href="/get-in-touch"
            className="bg-black text-white px-6 py-3 rounded-full font-medium hover:opacity-80 hover:bg-white hover:text-black hover:border hover:border-black hover:cursor-pointer transition-all duration-300 ease-in-out"
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
