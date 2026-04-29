"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Building2 } from "lucide-react";

interface ProjectShowcaseCardProps {
    slug: string;
    title: string;
    thumbnail: string;
    location: string;
    category: string;
    index: number;
}

export default function ProjectShowcaseCard({
    slug,
    title,
    thumbnail,
    location,
    category,
    index
}: ProjectShowcaseCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-[16px] bg-white shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer h-[400px]"
        >
            {/* Background Image with Hover Zoom */}
            <Image
                src={thumbnail}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
            />

            {/* Overlay Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

            {/* Content Container */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                {/* Category Badge */}
                <div className="mb-4">
                    <span className="inline-block px-4 py-1 bg-[#C9A96A] text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg">
                        {category}
                    </span>
                </div>

                {/* Title & Info */}
                <div className="space-y-4">
                    <h3 className="text-3xl md:text-4xl font-black text-white leading-tight drop-shadow-lg">
                        {title}
                    </h3>

                    {/* Metadata Row */}
                    <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm font-medium">
                        <div className="flex items-center gap-2">
                            <MapPin size={16} className="text-[#C9A96A]" />
                            <span>{location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Building2 size={16} className="text-[#C9A96A]" />
                            <span>{category} {category.toLowerCase().includes('interior') ? '' : 'Construction'}</span>
                        </div>
                    </div>
                </div>

                {/* Hover CTA Button */}
                <div className="mt-8 transition-all duration-500 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                    <Link href={`/projects/${slug}`}>
                        <div className="inline-flex items-center justify-center h-12 px-8 bg-white text-black font-black uppercase tracking-[0.2em] text-[10px] rounded-full hover:bg-[#C9A96A] hover:text-white transition-colors">
                            View Case Study
                        </div>
                    </Link>
                </div>
            </div>

            {/* Inner Border Flash on Hover */}
            <div className="absolute inset-0 border-0 group-hover:border-[8px] border-[#C9A96A]/20 transition-all duration-500 rounded-[16px] pointer-events-none" />
        </motion.div>
    );
}
