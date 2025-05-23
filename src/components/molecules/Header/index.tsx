'use client'

import { Logo } from '@/assets/images'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { DM_Sans } from 'next/font/google'
import { clsxm } from '@/utils/lib'
import { Hamburger } from '@/assets/icons'

const dmSans = DM_Sans({ weight: '400', subsets: ['latin'] })

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => setMenuOpen((prev) => !prev);

    const menu = [
        { name: "Home", id: "home" },
        { name: "Projects", id: "projects" },
        { name: "Certificates", id: "certificates" },
    ];

    const handleScroll = (id: string) => {
        const targetElement = document.getElementById(id);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setMenuOpen(false); // Close menu on mobile
        }
    };

    useEffect(() => {
        const handleScrollEvent = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScrollEvent);

        return () => {
            window.removeEventListener('scroll', handleScrollEvent);
        };
    }, []);

    return (
        <header
            className={clsxm(
                "m-5 sticky top-2 z-50 transition-opacity duration-300 ease-in-out",
                isScrolled ? "opacity-75" : "opacity-100"
            )}
        >
            <div className="flex flex-row justify-between items-center bg-[#98c1d9] p-2 rounded-full shadow-sm border-b-2">
                {/* Logo Section */}
                <button onClick={() => handleScroll("home")} className="flex flex-row items-center gap-3">
                    <div className="rounded-full bg-[#E0FBFC] shadow-md p-2">
                        <Image src={Logo} alt="Logo" width={30} height={30} />
                    </div>
                    <p className={clsxm(dmSans.className, "text-2xl font-bold text-gray-800")}>imanuel.vs</p>
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex h-fit">
                    <div className="flex flex-row gap-6">
                        {menu.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => handleScroll(item.id)}
                                className="text-gray-900 hover:text-white hover:bg-[#3d5a80] p-2 rounded-full transition-all duration-400"
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                </nav>

                <a href="mailto:imanuelvs19@gmail.com"
                    className="hidden md:block rounded-full bg-gradient-to-r from-[#3D5A80] to-[#293241] text-white px-4 py-2 hover:from-[#507CA0] hover:to-[#1F2833] transition-all duration-300"
                >
                    Contact Me
                </a>


                {/* Hamburger Menu */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden border-2 rounded-full px-4 py-2 border-[#E0FBFC] hover:bg-[#527A99] transition-all duration-200"
                >
                    <Hamburger />
                </button>
            </div>

            {/* Mobile Navigation */}
            <nav
                className={clsxm(
                    "md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-slate-300 rounded-b-xl shadow-lg mx-8 mt-1",
                    menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
            >
                <ul className="flex flex-col gap-2 p-3">
                    {menu.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => handleScroll(item.id)}
                            className="text-gray-900 hover:text-white hover:bg-[#3d5a80] p-2 rounded-full transition-all duration-400"
                        >
                            {item.name}
                        </button>
                    ))}
                    <a href='mailto:imanuelvs19@gmail.com'
                        className="w-fit self-center rounded-full bg-gradient-to-r from-[#3D5A80] to-[#293241] text-white px-8 py-3 hover:from-[#507CA0] hover:to-[#1F2833] transition-all duration-300 mt-4"
                    >
                        Contact Me
                    </a>
                </ul>
            </nav>
        </header>
    );
}
