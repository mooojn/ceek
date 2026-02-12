'use client';

import React from 'react';
import Link from 'next/link';
import { Instagram, Linkedin, Twitter, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer>
            {/* Top Section - Dark */}
            <div className="bg-[#1a1a1a] text-white py-20 px-6 md:px-12 lg:px-20 border-t border-gray-800">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

                    {/* Column 1 - Vertical Logo (Takes up ~2 cols on LG) */}
                    <div className="lg:col-span-2 flex flex-col justify-between h-full min-h-[200px]">
                        <div className="hidden lg:block transform -rotate-90 origin-top-left translate-y-full mt-20">
                            <h2 className="text-7xl font-bold tracking-tighter uppercase whitespace-nowrap opacity-20 hover:opacity-100 transition-opacity cursor-default">
                                Marketo360
                            </h2>
                        </div>
                        {/* Mobile Logo */}
                        <div className="lg:hidden mb-8">
                            <h2 className="text-5xl font-bold tracking-tighter uppercase">Marketo360</h2>
                        </div>
                    </div>

                    {/* Column 2 - ABOUT (Takes up ~3 cols on LG) */}
                    <div className="lg:col-span-3">
                        <h3 className="text-xl font-bold uppercase mb-6 tracking-wide">About</h3>
                        <ul className="space-y-4 mb-10">
                            <li><Link href="/reviews" className="text-gray-400 hover:text-white transition-colors">Reviews</Link></li>
                            <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                            <li><Link href="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
                            <li><Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors">Sitemap</Link></li>
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

                    {/* Column 3 - LOCATION (Takes up ~3 cols on LG) */}
                    <div className="lg:col-span-3">
                        <h3 className="text-xl font-bold uppercase mb-6 tracking-wide">Location</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/locations/london" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                                    London <ArrowRight size={16} className="ml-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                                </Link>
                            </li>
                            <li>
                                <Link href="/locations/brighton" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                                    Brighton <ArrowRight size={16} className="ml-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                                </Link>
                            </li>
                            <li>
                                <Link href="/locations/manchester" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                                    Manchester <ArrowRight size={16} className="ml-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4 - CONSULTANCY (Takes up ~4 cols on LG) */}
                    <div className="lg:col-span-4">
                        <h3 className="text-xl font-bold uppercase mb-6 tracking-wide">Consultancy</h3>
                        <ul className="space-y-4">
                            <li><Link href="/services/ai-search" className="text-gray-400 hover:text-white transition-colors">AI Search Agency</Link></li>
                            <li><Link href="/services/ecommerce-seo" className="text-gray-400 hover:text-white transition-colors">Ecommerce SEO Agency</Link></li>
                            <li><Link href="/services/seo-audit" className="text-gray-400 hover:text-white transition-colors">SEO Audit</Link></li>
                            <li><Link href="/services/outsourced-marketing" className="text-gray-400 hover:text-white transition-colors">Outsourced Digital Marketing</Link></li>
                            <li><Link href="/services/omni-channel" className="text-gray-400 hover:text-white transition-colors">Omni-Channel Marketing Execution</Link></li>
                            <li><Link href="/services/tiktok-marketing" className="text-gray-400 hover:text-white transition-colors">TikTok Marketing Agency</Link></li>
                        </ul>
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
