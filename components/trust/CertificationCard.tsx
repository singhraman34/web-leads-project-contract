"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, FileCheck, Leaf, type LucideIcon } from "lucide-react";

interface Certification {
    icon: LucideIcon;
    title: string;
}

const CERTIFICATIONS: Certification[] = [
    { icon: Award, title: "ISO 9001 Certified" },
    { icon: FileCheck, title: "Govt Licensed Contractor" },
    { icon: ShieldCheck, title: "Safety Compliant (OHSAS)" },
    { icon: Leaf, title: "Green Building Standards" },
];

export default function CertificationRow() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {CERTIFICATIONS.map((cert, index) => {
                const Icon = cert.icon;
                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.08 }}
                        whileHover={{ y: -4 }}
                        className="flex items-center gap-4 bg-[#faf7f2]/60 border border-slate-100 p-6 rounded-[16px] shadow-[0_10px_28px_-18px_rgba(15,23,42,0.45)] hover:shadow-[0_22px_60px_-30px_rgba(15,23,42,0.65)] transition-all duration-300 group"
                    >
                        <div className="p-3 bg-white rounded-xl text-[#C9A96A] group-hover:bg-[#C9A96A] group-hover:text-white transition-colors">
                            <Icon size={24} />
                        </div>
                        <span className="text-sm font-bold text-slate-900 uppercase tracking-widest leading-snug">
                            {cert.title}
                        </span>
                    </motion.div>
                );
            })}
        </div>
    );
}
