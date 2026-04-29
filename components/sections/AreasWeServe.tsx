"use client";

import { motion, AnimatePresence } from "framer-motion";
import { AREAS_WE_SERVE } from "@/lib/data/areas";
import { MapPin, Search, Filter } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AreasWeServe() {
    const [search, setSearch] = useState("");
    const [activeFilter, setActiveFilter] = useState("All");

    const filters = ["All", "East", "West", "South", "Central", "Suburban"];

    const filteredAreas = useMemo(() => {
        return AREAS_WE_SERVE.filter(area => {
            const matchesSearch = area.name.toLowerCase().includes(search.toLowerCase());
            const matchesFilter = activeFilter === "All" || area.region === activeFilter;
            return matchesSearch && matchesFilter;
        });
    }, [search, activeFilter]);

    return (
        <section className="section-vertical-spacing bg-[#faf7f2] border-t border-slate-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10 w-[500px] h-[500px] bg-[#C9A96A] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <Container className="relative z-10">
                <SectionHeading
                    title="Our Key Locations"
                    subtitle="Delivering major national infrastructure, commercial, and premium residential projects across key areas in Mumbai."
                    centered
                />

                {/* Search & Filter Controls */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 max-w-5xl mx-auto">
                    <div className="relative w-full md:w-96 group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#C9A96A] transition-colors" />
                        <input
                            type="text"
                            placeholder="Search area (e.g. Bandra, Andheri...)"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#C9A96A]/20 focus:border-[#C9A96A] transition-all shadow-sm text-slate-900"
                        />
                    </div>

                    <div className="flex items-center gap-2 overflow-x-auto pb-4 md:pb-0 no-scrollbar w-full md:w-auto">
                        <Filter className="w-4 h-4 text-slate-400 mr-2 shrink-0 hidden md:block" />
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all shrink-0 ${activeFilter === filter
                                        ? "bg-slate-900 text-white shadow-md shadow-slate-200/50"
                                        : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div 
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredAreas.map((area) => (
                            <motion.div
                                layout
                                key={area.name}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                                className="group relative h-72 rounded-[24px] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-[#C9A96A]/10 transition-all duration-500 cursor-pointer border border-slate-200/30"
                            >
                                <Link href={`/projects?area=${area.slug}`} className="absolute inset-0 z-30 focus:outline-none">
                                    <span className="sr-only">View projects in {area.name}</span>
                                </Link>

                                {/* Image with Zoom Effect */}
                                <div className="absolute inset-0 overflow-hidden">
                                    <Image
                                        src={area.image || "/images/mumbai-hq-premium.png"}
                                        alt={area.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                        className="object-cover transition-transform duration-[1000ms] ease-[cubic-bezier(0.165,0.84,0.44,1)] group-hover:scale-110"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Dynamic Overlays */}
                                <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/50 transition-colors duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-700" />

                                {/* Interactive Badges */}
                                {area.badge && (
                                    <div className="absolute top-5 left-5 z-20">
                                        <span className={`px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-[0.2em] shadow-xl backdrop-blur-md ${
                                            area.badge === "Premium" 
                                            ? "bg-[#C9A96A] text-white" 
                                            : "bg-white/95 text-slate-900"
                                        }`}>
                                            {area.badge}
                                        </span>
                                    </div>
                                )}

                                {/* Card Content */}
                                <div className="absolute inset-0 flex flex-col justify-end p-7 z-10 text-left">
                                    <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.165,0.84,0.44,1)]">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#C9A96A] animate-pulse" />
                                            <span className="text-[#C9A96A] text-[10px] font-black uppercase tracking-[0.25em] leading-none">
                                                {area.region} Mumbai
                                            </span>
                                        </div>
                                        
                                        <h3 className="text-white font-bold text-2xl mb-2 group-hover:text-white transition-colors tracking-tight">
                                            {area.name}
                                        </h3>
                                        
                                        <div className="flex flex-col gap-4">
                                            <div className="flex items-center justify-between">
                                                <p className="text-slate-200 text-[11px] font-medium opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 border-l border-[#C9A96A] pl-3">
                                                    {area.projectsCompleted}+ Exclusive Projects
                                                </p>
                                            </div>

                                            {/* CTA appearing on hover */}
                                            <div className="flex items-center gap-2 text-white text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 -translate-x-3 group-hover:translate-x-0 transition-all duration-700 delay-200">
                                                <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-colors">
                                                    View Projects &rarr;
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredAreas.length === 0 && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-32 bg-white/40 rounded-[32px] border border-dashed border-slate-300/50 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
                        >
                            <MapPin className="w-16 h-16 text-slate-300 mx-auto mb-6" />
                        </motion.div>
                        <h4 className="text-slate-800 font-bold text-2xl mb-2">
                            Quiet in this quadrant
                        </h4>
                        <p className="text-slate-500 mb-8 max-w-md mx-auto">
                            We haven&apos;t found matches for &quot;<span className="text-[#C9A96A] font-bold">{search}</span>&quot; in the <span className="text-slate-800 font-bold font-mono">{activeFilter}</span> region.
                        </p>
                        <button 
                            onClick={() => {setSearch(""); setActiveFilter("All");}}
                            className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-400/20"
                        >
                            Explore All Regions
                        </button>
                    </motion.div>
                )}
            </Container>

            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}
