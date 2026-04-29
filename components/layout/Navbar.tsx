"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Areas", href: "/areas" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const ctaClasses = "bg-[#C9A96A] hover:bg-[#B5966B] text-white rounded-[10px] px-6 py-3 font-bold uppercase tracking-widest text-xs transition-all duration-250 shadow-md";


    return (
        <header className={`sticky top-0 z-50 w-full transition-all duration-300 h-20 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-white"}`}>
            <div className="mx-auto max-w-[1280px] h-full flex items-center justify-between px-6">
                <Link href="/" className="flex items-center shrink-0 group">
                    <div className="relative w-[280px] h-[80px] transition-transform duration-500 group-hover:scale-105">
                        <Image
                            src="/logo/logo-final.png"
                            alt="Singhs Interiors Logo"
                            fill
                            sizes="(max-width: 768px) 180px, 280px"
                            className="object-contain"
                            priority
                        />
                    </div>
                </Link>
                <nav className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            aria-current={pathname === link.href ? "page" : undefined}
                            className={`text-xs font-bold uppercase tracking-widest transition-colors duration-250 ${pathname === link.href ? "text-[#C9A96A]" : "text-slate-600 hover:text-[#C9A96A]"}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/get-quote" className={ctaClasses}>
                        Get Quote
                    </Link>
                </nav>

                {/* Mobile Nav Toggle */}
                <div className="lg:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-slate-900 hover:text-[#C9A96A] transition-colors"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 py-6 shadow-2xl z-40 overflow-y-auto max-h-[calc(100vh-80px)]"
                    >
                        <div className="flex flex-col space-y-4 px-6 text-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    aria-current={pathname === link.href ? "page" : undefined}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-sm font-bold uppercase tracking-widest py-3 border-b border-slate-50 transition-colors ${pathname === link.href ? "text-[#C9A96A]" : "text-slate-600 hover:text-[#C9A96A]"}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/get-quote"
                                onClick={() => setIsOpen(false)}
                                className={`${ctaClasses} text-center mt-6`}
                            >
                                Get Quote
                            </Link>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
