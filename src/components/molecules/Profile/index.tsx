"use client"

import { FotoDiri } from '@/assets/images'
import Image from 'next/image'
import React, { useState } from 'react'

export default function Profile({title}: {title: string}) {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleScroll = (id: string) => {
        const targetElement = document.getElementById(id);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setMenuOpen(false); // Close menu on mobile
        }
    };

    return (
        <div className="rounded-3xl p-8 md:p-12 bg-gradient-to-r from-slate-400 to-slate-500 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <div className="flex flex-col items-center">
                <Image
                    src={FotoDiri}
                    alt="Profile"
                    width={500}
                    height={500}
                    className="h-40 w-40 md:h-60 md:w-60 rounded-full border-4 border-white shadow-md"
                />
                <h2 className="mt-4 md:mt-6 text-lg md:text-xl font-semibold text-gray-800">
                    IMANUEL VICKY SANJAYA
                </h2>
                <p className="text-white">{title}</p>
                <div className="flex flex-row gap-6 mt-4">
                    <a href='https://drive.google.com/file/d/1JPqCmtcHRzzMaZBerD0y9SaS7VaqmDNW/view?usp=sharing' target='_blank' className="bg-blue-700 py-3 px-5 rounded-md text-white hover:bg-blue-900 transition-all duration-200">Resume</a>
                    <button className="shadow-md py-3 px-5 rounded-md bg-white hover:bg-gray-300 transition-all duration-200"
                        onClick={() => handleScroll("projects")}>Projects</button>
                </div>
            </div>
        </div>
    )
}
