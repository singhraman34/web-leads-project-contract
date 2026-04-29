"use client";

import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/config/constants";

export default function Footer() {

    return (
        <footer className="w-full bg-[#1C1C1C] text-slate-400 py-12">
            <div className="mx-auto max-w-[1280px] px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="space-y-6">
                    <Link href="/" className="inline-block group">
                        <div className="relative w-[250px] h-[80px] transition-transform duration-500 group-hover:scale-105">
                            <Image
                                src="/logo/logo-final.png"
                                alt="Singhs Interiors Logo"
                                fill
                                className="object-contain brightness-0 invert opacity-90"
                            />
                        </div>
                    </Link>
                    <p className="text-sm text-slate-500 max-w-xs">{SITE_CONFIG.description}</p>
                </div>
                <div>
                    <h4 className="font-semibold text-lg mb-4 text-white">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/about" className="hover:text-[#C9A96A] transition-colors">About Us</Link></li>
                        <li><Link href="/services" className="hover:text-[#C9A96A] transition-colors">Services</Link></li>
                        <li><Link href="/projects" className="hover:text-[#C9A96A] transition-colors">Projects</Link></li>
                        <li><Link href="/get-quote" className="hover:text-[#C9A96A] transition-colors">Get Quote</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-lg mb-4 text-white">Contact Info</h4>
                    <ul className="space-y-2 text-sm">
                        <li>{SITE_CONFIG.contact.phone}</li>
                        <li>{SITE_CONFIG.contact.email}</li>
                        <li>{SITE_CONFIG.contact.address}</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-lg mb-4 text-white">Follow Us</h4>
                    <div className="flex space-x-4">
                        {Object.entries(SITE_CONFIG.socials).map(([platform, url]) => (
                            <a key={platform} href={url} className="text-slate-400 hover:text-[#C9A96A] capitalize text-sm transition-colors">
                                {platform}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-[1280px] px-6 mt-12 pt-8 border-t border-white/5 text-center text-sm text-slate-600">
                © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
            </div>
        </footer>
    );
}
