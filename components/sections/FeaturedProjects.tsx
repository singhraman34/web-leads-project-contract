"use client";

import { motion } from "framer-motion";
import { PROJECTS_DATA } from "@/lib/data/projects";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import ProjectShowcaseCard from "./ProjectShowcaseCard";

export default function FeaturedProjects() {
    return (
        <section className="section-vertical-spacing bg-white">
            <Container>
                {/* Section Header */}
                <div className="max-w-3xl mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-[#C9A96A] font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">
                            Our Portfolio
                        </span>
                        <h2 className="section-heading text-slate-900 mb-6">
                            Featured Projects
                        </h2>
                        <p className="body-text text-slate-600 max-w-2xl leading-relaxed">
                            Selected construction and interior projects demonstrating scale, craftsmanship, and engineering precision across Mumbai.
                        </p>
                    </motion.div>
                </div>

                {/* Project Showcase Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
                    {PROJECTS_DATA.slice(0, 4).map((project, index) => (
                        <ProjectShowcaseCard
                            key={project.slug}
                            index={index}
                            title={project.title}
                            thumbnail={project.thumbnail}
                            location={project.location}
                            category={project.category}
                            slug={project.slug}
                        />
                    ))}
                </div>

                {/* Explore Portfolio CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col items-center justify-center pt-8"
                >
                    <Link href="/projects">
                        <Button className="h-16 px-12 text-lg font-bold uppercase tracking-widest shadow-xl shadow-[#C9A96A]/20">
                            Explore Full Portfolio <ArrowRight className="ml-3 w-5 h-5" />
                        </Button>
                    </Link>
                </motion.div>
            </Container>
        </section>
    );
}
