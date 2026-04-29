"use client";

import { motion } from "framer-motion";

interface SkeletonProps {
    className?: string;
    width?: string;
    height?: string;
}

export default function SkeletonCard({ className = "", width = "100%", height = "300px" }: SkeletonProps) {
    return (
        <div 
            className={`relative overflow-hidden bg-slate-100/50 rounded-[16px] ${className}`}
            style={{ width, height }}
        >
            <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "linear"
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-15deg] w-[200px]"
            />
            <div className="p-8 h-full flex flex-col justify-end space-y-4">
                <div className="h-6 w-3/4 bg-slate-200/50 rounded-full" />
                <div className="h-4 w-1/2 bg-slate-200/50 rounded-full" />
                <div className="flex gap-4">
                    <div className="h-4 w-1/4 bg-slate-200/50 rounded-full" />
                    <div className="h-4 w-1/4 bg-slate-200/50 rounded-full" />
                </div>
            </div>
        </div>
    );
}
