'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface Location {
    id: string;
    city: string;
    contactName: string;
    designation: string;
    address: string;
    email: string;
    phone: string;
}

const locations: Location[] = [
    {
        id: 'uae',
        city: 'Dubai',
        contactName: 'Muhammad Nasir',
        designation: 'Business Development Manager',
        address: 'Flat 101, Al Sabkha, Deira, Dubai, UAE',
        email: 'bdm.uae@marketo.com',
        phone: '+971552038250',
    },
    {
        id: 'pk',
        city: 'Pakistan',
        contactName: 'Muhammad Taha Zahid',
        designation: 'Performance Marketier',
        address: 'nill',
        email: 'bdm.pak@marketo.com',
        phone: 'nill',
    },
    {
        id: 'usa',
        city: 'United States of America',
        contactName: 'Bilawal Mirza',
        designation: 'Business Development Manager',
        address: 'nill',
        email: 'bdm.usa@marketo.com',
        phone: 'nill',
    }
];

const LocationsPage = () => {
    const [openSection, setOpenSection] = useState<string | null>(null);

    const toggleSection = (id: string) => {
        setOpenSection(openSection === id ? null : id);
    };

    return (
        <>
            <Navbar></Navbar>

            <div className="flex flex-col min-h-screen">
                {/* Header Section */}
                <section className="bg-[#1a1a1a] w-full py-24 px-6 md:px-12 lg:px-24">
                    <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tight">
                        LOCATIONS
                    </h1>
                </section>

                {/* Main Content Section */}
                <section className="bg-[#f5f1eb] w-full flex-grow py-16 px-6 md:px-12 lg:px-24">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-[#1a1a1a] text-xl md:text-2xl font-medium mb-12 tracking-wide uppercase">
                            Marketo360 Office Locations
                        </h2>

                        <div className="flex flex-col">
                            {locations.map((location) => (
                                <div key={location.id} className="border-b border-gray-300 last:border-b-0">
                                    <button
                                        onClick={() => toggleSection(location.id)}
                                        className="w-full flex justify-between items-center py-8 group text-left focus:outline-none"
                                        aria-expanded={openSection === location.id}
                                    >
                                        <span className="text-3xl md:text-5xl font-bold text-[#1a1a1a] group-hover:opacity-70 transition-opacity duration-300">
                                            {location.city}
                                        </span>
                                        <span
                                            className={`text-[#1a1a1a] transition-transform duration-300 ease-in-out transform ${openSection === location.id ? 'rotate-45' : 'rotate-0'
                                                }`}
                                        >
                                            <Plus size={32} strokeWidth={1.5} />
                                        </span>
                                    </button>

                                    <div
                                        className={`grid transition-[grid-template-rows,opacity,margin] duration-500 ease-in-out ${openSection === location.id ? 'grid-rows-[1fr] opacity-100 mb-8' : 'grid-rows-[0fr] opacity-0 mb-0'
                                            }`}
                                    >
                                        <div className="overflow-hidden">
                                            <div className="pt-4 space-y-2">
                                                <p className="text-xl font-bold text-[#1a1a1a]">{location.contactName}</p>
                                                <p className="text-3xl font-black text-[#1a1a1a] tracking-tight">{location.designation}</p>
                                                {location.address && (
                                                    <p className="text-lg text-[#1a1a1a]">
                                                        <span className="font-semibold">Address: </span>
                                                        {location.address}
                                                    </p>
                                                )}
                                                {location.email && (
                                                    <p className="text-lg text-[#1a1a1a]">
                                                        <span className="font-semibold">Email: </span>
                                                        <a href={`mailto:${location.email}`} className="hover:underline">{location.email}</a>
                                                    </p>
                                                )}
                                                <p className="text-lg text-[#1a1a1a]">
                                                    <span className="font-semibold">Cell # </span>
                                                    {location.phone}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </>
    );
};

export default LocationsPage;
