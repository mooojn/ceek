'use client';

import React from 'react';
import Link from 'next/link';
import { Instagram, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import { services } from '@/app/data/services';

const Footer = () => {
    return (
        <footer>
            {/* Top Section - Dark */}
            <div className="bg-[#1a1a1a] text-white py-20 px-6 md:px-12 lg:px-20 border-t border-gray-800">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-12 lg:gap-8">

                    {/* Column 1 - Logo (Takes up ~3 cols on LG) */}
                    <div className="lg:col-span-3 flex flex-col justify-between h-full lg:min-h-[200px]">
                        <div className="hidden lg:block">
                            <h2 className="text-4xl font-bold tracking-tighter uppercase whitespace-nowrap opacity-20 hover:opacity-100 transition-opacity cursor-default">
                                Marketo360
                            </h2>
                        </div>
                        {/* Mobile Logo */}
                        <div className="lg:hidden mb-0">
                            <h2 className="text-3xl font-bold tracking-tighter uppercase">Marketo360</h2>
                        </div>
                    </div>

                    {/* Column 2 - ABOUT (Takes up ~2 cols on LG) */}
                    <div className="lg:col-span-2">
                        <h3 className="text-xl font-bold uppercase mb-6 tracking-wide">About</h3>
                        <ul className="space-y-4">
                            <li><Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Column 3 - SERVICES (Takes up ~4 cols on LG) */}
                    <div className="lg:col-span-4">
                        <h3 className="text-xl font-bold uppercase mb-6 tracking-wide">Services</h3>
                        <ul className="space-y-4">
                            {services.map((service) => (
                                <li key={service.id}>
                                    <Link href={service.link} className="text-gray-400 hover:text-white transition-colors flex items-center group">
                                        {service.title} <ArrowRight size={16} className="ml-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4 - STAY CONNECTED (Takes up ~3 cols on LG) */}
                    <div className="lg:col-span-3">
                        <h3 className="text-xl font-bold uppercase mb-6 tracking-wide">Stay Connected</h3>
                        <ul className="space-y-4 mb-8">
                            <li>
                                <a
                                    href="https://wa.me/924200000"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors block"
                                >
                                    +92 4200000
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:sales@marketo360.gmail.com"
                                    className="text-gray-400 hover:text-white transition-colors block break-all"
                                >
                                    sales@marketo360.gmail.com
                                </a>
                            </li>
                        </ul>

                        <div className="flex space-x-4">
                            <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 group">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 group">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 group">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section - Light */}
            <div className="bg-[#FAFAFA] text-black py-8 px-6 md:px-12 lg:px-20">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm font-medium text-gray-600">
                        <span>© {new Date().getFullYear()} Marketo360</span>
                        <Link href="/privacy-policy" className="hover:text-black transition-colors">PRIVACY POLICY</Link>
                    </div>

                    <div>
                        <Link
                            href="/contact"
                            className="inline-block border-2 border-black rounded-full px-8 py-3 font-bold uppercase text-sm tracking-wide hover:bg-black hover:text-white transition-colors duration-300"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Empty Div for balance if needed, or social icons could go here alternatively */}
                    <div className="hidden md:block w-[100px]"></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
