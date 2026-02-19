'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import ServicesOverlay from './ServicesOverlay';

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-[#FAFAFA] z-40 flex items-center justify-between px-6 py-4 md:px-12 border-b border-gray-200">
        <Link href="/" onClick={closeMobileMenu}>
          <Image
            src="/logo-b.png"
            alt="Marketo360"
            width={150}
            height={40}
            className="w-32 md:w-[150px] h-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-[#333333] font-medium text-base list-none">
          {[
            { name: 'Services', action: () => setIsServicesOpen(true) },
            // { name: 'Sectors', href: '/sectors' },
            { name: 'Locations', href: '/locations' },
            { name: 'Portfolio', href: '/portfolio' },
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

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/get-in-touch"
            className="bg-black text-white px-6 py-3 rounded-full font-medium hover:opacity-80 hover:bg-white hover:text-black hover:border hover:border-black hover:cursor-pointer transition-all duration-300 ease-in-out"
          >
            Get in touch
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-black focus:outline-none p-2 font-light text-sm tracking-widest uppercase"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? 'CLOSE' : 'MENU'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#FAFAFA] z-30 flex flex-col p-6 pt-24 md:hidden overflow-y-auto">
          <ul className="flex flex-col gap-6 text-[#333333] font-medium text-lg list-none">
            {[
              { name: 'Services', action: () => { setIsServicesOpen(true); closeMobileMenu(); } },
              { name: 'Locations', href: '/locations' },
              { name: 'Portfolio', href: '/portfolio' },
              { name: 'About Us', href: '/about-us' },
            ].map((item) => (
              <li key={item.name} className="border-b border-gray-100 pb-2">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="block w-full"
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    onClick={item.action}
                    className="block w-full text-left"
                  >
                    {item.name}
                  </button>
                )}
              </li>
            ))}
            <li className="mt-4">
              <Link
                href="/get-in-touch"
                onClick={closeMobileMenu}
                className="block w-full bg-black text-white text-center px-6 py-3 rounded-full font-medium hover:opacity-80 transition-all duration-300"
              >
                Get in touch
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Services Overlay */}
      {isServicesOpen && (
        <ServicesOverlay onClose={() => setIsServicesOpen(false)} />
      )}
    </>
  );
};

export default Navbar;
