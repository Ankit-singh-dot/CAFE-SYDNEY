"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about" },
    { name: "The Lounge", href: "#lounge" },
    { name: "Reservations", href: "#reservations" },
    { name: "Menus", href: "#menus" },
    { name: "Events", href: "#events" },
    { name: "Shop", href: "#shop" },
    { name: "Journal", href: "#journal" },
    { name: "Careers", href: "#careers" },
    { name: "Gallery", href: "#gallery" },
    { name: "FAQ’s", href: "#faq" },
    { name: "Contact Us", href: "#contact" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.1,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            when: "afterChildren",
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
};

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
                    isScrolled
                        ? "bg-[#373831] shadow-md py-4"
                        : "bg-transparent py-4"
                )}
            >
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <Link href="/" className="relative w-40 h-20 md:w-52 md:h-16">
                        <Image
                            src="/cheery_images/CS-LOGO-STONE-OYSTER-600x288.png"
                            alt="Cafe Sydney Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navLinks.slice(0, 6).map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium hover:text-[var(--color-accent-bronze)] transition-colors uppercase tracking-wider",
                                    "text-white"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button
                            className="lg:hidden"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <Menu size={24} className="text-white" />
                        </button>
                    </nav>

                    {/* Mobile Menu Button - Styled */}
                    <button
                        className="lg:hidden text-white flex items-center gap-2 group"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <span className="uppercase text-xs tracking-widest font-bold hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity">Menu</span>
                        <div className="p-2 border border-white/30 rounded-full group-hover:bg-white group-hover:text-[#373831] transition-all">
                            <Menu size={20} />
                        </div>
                    </button>

                    <div className="hidden lg:flex items-center space-x-6">
                        <Link href="#reservations" className={cn(
                            "px-6 py-2 border transition-all duration-300 uppercase text-xs tracking-widest font-bold",
                            "border-white text-white hover:bg-white hover:text-[#373831]"
                        )}>
                            Make a Reservation
                        </Link>
                    </div>
                </div>
            </header>

            {/* Premium Mobile Menu Overlay (Inspiration Style) */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed inset-0 z-[60] bg-[#bfbfba] text-[var(--color-accent-bronze)] flex flex-col justify-between"
                    >
                        {/* Background Watermark - Subtle */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.05]">
                            <Image
                                src="/cheery_images/CS-LOGO-STONE-OYSTER-600x288.png"
                                alt="Watermark"
                                fill
                                className="object-cover scale-150 grayscale"
                            />
                        </div>

                        {/* Header: Logo & Close */}
                        <div className="relative z-10 flex justify-between items-center p-6">
                            {/* Hidden Logo on Mobile Menu to match clean inspiration, or keep it subtle? Inspiration has no logo at top left, just Close button. 
                                Let's keep a small logo for branding but make it blend or keep it standard. 
                                User's image has no logo, just a close button. Let's try minimal. 
                                Actually, checking the image again, it has "CAFE SYDNEY" text logo at top left.
                            */}
                            <Link href="/" className="relative w-32 h-12 opacity-80" onClick={() => setIsMobileMenuOpen(false)}>
                                <Image
                                    src="/cheery_images/CS-LOGO-STONE-OYSTER-600x288.png"
                                    alt="Cafe Sydney Logo"
                                    fill
                                    className="object-contain invert-0 brightness-0 opacity-60" // Make it dark/neutral
                                />
                            </Link>

                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="group p-2 rounded-full hover:bg-black/5 transition-colors"
                            >
                                <X size={40} className="text-[var(--color-accent-bronze)] opacity-80" />
                            </button>
                        </div>

                        {/* Navigation Links - Centered List */}
                        <div className="relative z-10 flex-1 overflow-y-auto flex flex-col justify-center items-center py-4">
                            <nav className="flex flex-col items-center space-y-4 md:space-y-6">
                                {/* Special Links from Inspiration */}
                                <motion.div variants={itemVariants} className="w-full text-center">
                                    <Link
                                        href="#reservations"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="inline-block text-3xl md:text-5xl font-serif text-[var(--color-accent-bronze)] hover:text-[#777669] transition-colors uppercase tracking-widest"
                                    >
                                        Reservations
                                    </Link>
                                </motion.div>

                                {navLinks.filter(l => l.name !== "Reservations").map((link) => (
                                    <motion.div variants={itemVariants} key={link.name} className="w-full text-center">
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={cn(
                                                "inline-block text-2xl md:text-4xl font-serif transition-colors uppercase tracking-widest",
                                                link.name === "Home" ? "text-black/40" : "text-[var(--color-accent-bronze)] hover:text-[#777669]"
                                            )}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>
                        </div>

                        {/* Footer (Empty or Minimal to match inspiration) */}
                        <div className="h-12"></div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
