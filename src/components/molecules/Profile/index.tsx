"use client"

import { FotoDiri } from '@/assets/images'
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'

export default function Profile({ title }: { title: string }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [resumeDropdownOpen, setResumeDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleScroll = (id: string) => {
        const targetElement = document.getElementById(id);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setMenuOpen(false); // Close menu on mobile
        }
    };

    const toggleResumeDropdown = () => {
        setResumeDropdownOpen(!resumeDropdownOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setResumeDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="rounded-3xl p-8 md:p-12 bg-gradient-to-r from-[#98C1D9] to-[#3D5A80] shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
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
                <div className="flex flex-row gap-6 mt-4 relative">
                    <div className="relative" ref={dropdownRef}>
                        <button 
                            onClick={toggleResumeDropdown} 
                            className="bg-blue-700 py-3 px-5 rounded-md text-white hover:bg-blue-900 transition-all duration-200">
                            Resume
                        </button>
                        {resumeDropdownOpen && (
                            <div className="absolute top-full mt-2 w-40 bg-white rounded-md shadow-lg z-10">
                                <a 
                                    href="https://drive.google.com/file/d/1cASIWqipgvVq2XtfnsqhPB5lbechZrT-/view?usp=drive_link" 
                                    target="_blank" 
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-t-md transition border-b-2">
                                    Bahasa Indonesia
                                </a>
                                <a 
                                    href="https://drive.google.com/file/d/1za-7hEr8XyC3oSrZI8oJ4zfiDkIMP_Dl/view?usp=drive_link" 
                                    target="_blank" 
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-b-md transition">
                                    English
                                </a>
                            </div>
                        )}
                    </div>
                    <button 
                        className="shadow-md py-3 px-5 rounded-md bg-white hover:bg-gray-300 transition-all duration-200"
                        onClick={() => handleScroll("projects")}>Projects
                    </button>
                </div>
            </div>
        </div>
    );
}