"use client";

import React from 'react';
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    className?: string;
    centered?: boolean;
}

export function SectionHeading({ title, subtitle, className, centered = false }: SectionHeadingProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className={cn("mb-16", centered ? "text-center" : "", className)}
        >
            <h2 className={cn("text-3xl md:text-5xl font-extrabold mb-6", !className?.includes('text-') && "text-slate-900")}>
                {title}
            </h2>
            {subtitle && (
                <p className={cn("text-lg", centered ? "max-w-2xl mx-auto" : "max-w-2xl", !className?.includes('text-') ? "text-slate-600" : "opacity-90")}>
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
}
