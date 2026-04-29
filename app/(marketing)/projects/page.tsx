import { PROJECTS_DATA } from "@/lib/data/projects";
import { Container } from "@/components/ui/Container";
import CTA from "@/components/sections/CTA";
import ParallaxImage from "@/components/animations/ParallaxImage";

import ProjectsFilterSection from "@/components/projects/ProjectsFilterSection";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: "Our Portfolio | 500+ Luxury & Commercial Projects in Mumbai",
    description: "Explore Singhs Interiors' extensive portfolio of high-end civil construction, commercial interiors, and luxury residential renovations across Mumbai.",
    alternates: {
        canonical: "/projects",
    },
    openGraph: {
        title: "Our Portfolio | 500+ Luxury & Commercial Projects in Mumbai",
        description: "Explore Singhs Interiors' extensive portfolio of high-end civil construction, commercial interiors, and luxury residential renovations across Mumbai.",
        url: 'https://elitecontractors.com/projects',
    }
};

export default function ProjectsListingPage() {
    return (
        <div className="flex flex-col bg-white">
            {/* Main Header Space */}
            <section className="relative h-[60vh] md:h-[70vh] flex items-center bg-black overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <ParallaxImage
                        src="/images/ai-generated-modern-styled-entryway.jpg"
                        alt="Showcase of luxury interior design and construction projects in Mumbai"
                        height="h-full"
                        strength={0.2}
                        className="opacity-100"
                        priority={true}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
                </div>
                <Container className="relative z-20 text-center lg:text-left">
                        <div className="max-w-4xl mx-auto lg:mx-0">
                            <span className="text-[#C9A96A] font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">
                                Showcase of Excellence
                            </span>
                            <h1 className="hero-heading text-white mb-8 text-5xl md:text-7xl">
                                Our Build <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A96A] via-[#EAD0A8] to-[#C9A96A]">Portfolio.</span>
                            </h1>
                            <p className="body-text text-slate-300 max-w-2xl leading-relaxed text-lg md:text-xl">
                                Explore a legacy of landmark civil engineering projects and luxury interior transformations across Mumbai&apos;s most prestigious locations.
                            </p>
                        </div>
                </Container>
            </section>

            <div className="section-divider" />

            {/* Filtering Engine & Grid Component */}
            <Suspense fallback={<div className="min-h-screen" />}>
                <ProjectsFilterSection projects={PROJECTS_DATA} />
            </Suspense>

            <div className="section-divider" />

            <CTA />
        </div>
    );
}
