"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Service } from "@/types/service";

export default function ServiceCard({ service, index }: { service: Service, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="enterprise-card group relative flex flex-col justify-between border border-slate-200 hover:border-[#C9A96A]/50 transition-colors h-full cursor-pointer"
        >
            {/* Background Image with Hover Effect */}
            {service.image && (
                <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110">
                    <Image 
                        src={service.image} 
                        alt={service.title} 
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-700 rounded-[14px]"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
                </div>
            )}

            <div className="relative z-10 flex flex-col flex-grow">
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 bg-slate-50 border border-slate-200/50 text-[#C9A96A] text-xs font-bold uppercase tracking-widest rounded-full mb-6 w-max shadow-sm">
                    {service.category}
                </span>

                <h3 className="sub-heading text-slate-900 mb-4 group-hover:text-[#C9A96A] transition-colors">
                    {service.title}
                </h3>

                <p className="body-text text-slate-600 leading-relaxed mb-8 flex-grow">
                    {service.shortDescription}
                </p>
            </div>

            <div className="relative z-10">
                <Link href={`/services/${service.slug}`} className="inline-flex items-center text-[#C9A96A] font-medium group-hover:underline underline-offset-4 w-max">
                    Explore Service <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </motion.div>
    );
}
