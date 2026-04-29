"use client";

import { motion } from "framer-motion";

interface Client {
    name: string;
    logo: string;
    category: 'Corporate' | 'Hospitality' | 'Residential' | 'Industrial';
}

const CLIENTS: Client[] = [
    { name: "Asian Paints", logo: "ASIAN PAINTS", category: 'Corporate' },
    { name: "Standard Chartered", logo: "STANDARD", category: 'Corporate' },
    { name: "Global Logistics", logo: "LOGISTICS", category: 'Corporate' },
];

export default function ClientLogoGrid() {
    return (
        <div className="mb-20">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-4 mb-8"
            >
                <span className="text-[#C9A96A] font-black uppercase tracking-[0.2em] text-[10px] whitespace-nowrap">
                    Distinguished Partnerships
                </span>
                <div className="h-[1px] w-full bg-gradient-to-r from-[#C9A96A]/40 via-slate-100 to-transparent" />
            </motion.div>

            <div className="relative overflow-hidden rounded-2xl border border-slate-100 bg-white/80 shadow-[0_16px_40px_-26px_rgba(15,23,42,0.45)] px-2 py-3">
                <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />

                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: ["0%", "-25%", "0%"] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="flex items-center gap-10 px-10"
                >
                    {CLIENTS.concat(CLIENTS).map((client, i) => (
                        <div key={`${client.name}-${i}`} className="group cursor-default">
                            <span className="text-xs md:text-sm font-black text-slate-300 tracking-[0.4em] uppercase grayscale group-hover:grayscale-0 group-hover:text-[#C9A96A] opacity-60 group-hover:opacity-100 transition-all duration-300">
                                {client.logo}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
