"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
interface ServiceCardProps {
    title: string;
    description: string;
    capabilities: string[];
    icon: LucideIcon;
    href: string;
    index: number;
}

export default function HomeServiceCard({ title, description, capabilities, icon: Icon, href, index }: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-white p-8 rounded-[16px] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
        >
            {/* Icon */}
            <div className="mb-8 relative overflow-hidden">
                <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 group-hover:bg-[#C9A96A] group-hover:text-white transition-colors duration-300">
                    <Icon size={32} />
                </div>
            </div>

            {/* Title & Description */}
            <h3 className="section-heading text-2xl mb-4 text-slate-900 group-hover:text-[#C9A96A] transition-colors">{title}</h3>
            <p className="body-text text-slate-600 mb-6 leading-relaxed line-clamp-2">
                {description}
            </p>

            {/* Capabilities List */}
            <ul className="space-y-3 mb-8 flex-grow">
                {capabilities.slice(0, 3).map((capability, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96A]" />
                        {capability}
                    </li>
                ))}
            </ul>

            {/* CTA */}
            <Link href={href} className="inline-flex items-center gap-2 text-[#C9A96A] font-black uppercase tracking-[0.2em] text-[10px] group/link">
                Explore Service 
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </Link>
        </motion.div>
    );
}
