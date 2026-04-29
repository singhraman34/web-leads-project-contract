"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project, ProjectCategory } from "@/types/project";
import ProjectCard from "@/components/projects/ProjectCard";
import { Container } from "@/components/ui/Container";

import { useSearchParams, useRouter } from "next/navigation";
import { getAreaBySlug } from "@/lib/data/areas";

interface ProjectsFilterSectionProps {
    projects: Project[];
}

const categories: ("All" | ProjectCategory)[] = ["All", "Construction", "Interior", "Renovation", "Industrial", "Restaurant", "Residential"];

export default function ProjectsFilterSection({ projects }: ProjectsFilterSectionProps) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const area = searchParams.get("area");
    
    const [activeCategory, setActiveCategory] = useState<"All" | ProjectCategory>("All");

    let displayProjects = projects;
    
    if (area) {
        displayProjects = displayProjects.filter(p => p.areaSlug === area);
    }

    displayProjects = activeCategory === "All"
        ? displayProjects
        : displayProjects.filter(p => p.category === activeCategory);

    return (
        <section className="section-vertical-spacing bg-white">
            <Container>
                {/* Area Heading & Clear Filter */}
                {area && (() => {
                    const areaData = getAreaBySlug(area);
                    return (
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12 bg-[#faf7f2] p-8 rounded-[24px] border border-[#C9A96A]/20 shadow-sm">
                            <div>
                                <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-2 tracking-tight">
                                    Projects in {areaData?.name || area}
                                </h2>
                                <p className="text-slate-600 text-lg">
                                    Showing {displayProjects.length} tailored result{displayProjects.length !== 1 ? 's' : ''} for your selected region.
                                </p>
                            </div>
                            <button 
                                onClick={() => router.push('/projects')}
                                className="px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-full font-bold uppercase tracking-wider text-[11px] hover:border-slate-900 hover:text-slate-900 transition-all self-start md:self-auto shadow-sm"
                            >
                                Clear Filter &times;
                            </button>
                        </div>
                    );
                })()}

                {/* Filtering Buttons */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-16 px-4">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            aria-pressed={activeCategory === category}
                            className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 border shadow-sm ${activeCategory === category
                                ? "bg-[#C9A96A] text-white border-[#C9A96A] shadow-xl shadow-[#C9A96A]/20"
                                : "bg-white border-slate-200 text-slate-500 hover:border-[#C9A96A]/50 hover:bg-[#faf7f2] hover:text-[#C9A96A]"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Animated Grid Output */}
                <div className="w-full">
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        <AnimatePresence mode="popLayout">
                            {displayProjects.map((project, index) => (
                                <motion.div
                                    key={project.slug}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                                >
                                    <ProjectCard project={project} index={index} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                    
                    {displayProjects.length === 0 && (
                        <div className="text-center py-20 bg-slate-50 rounded-[24px] border border-dashed border-slate-200">
                            <p className="text-slate-500 text-lg">No projects match the selected criteria.</p>
                        </div>
                    )}
                </div>
            </Container>
        </section>
    );
}
