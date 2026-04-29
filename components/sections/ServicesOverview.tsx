"use client";

import { motion } from "framer-motion";
import { SERVICES_DATA } from "@/lib/data/services";
import {
    Building,
    LayoutDashboard,
    Hammer,
    Paintbrush,
    Droplet,
    HardHat,
    Briefcase,
    Factory,
    LucideIcon
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import HomeServiceCard from "./HomeServiceCard";

const ICON_MAP: Record<string, LucideIcon> = {
    construction: Building,
    interior: LayoutDashboard,
    renovation: Hammer,
    "all-type-painting": Paintbrush,
    waterproofing: Droplet,
    "civil-works": HardHat,
    "turnkey-projects": Briefcase,
    industrial: Factory,
};

export default function ServicesOverview() {
    return (
        <section className="section-vertical-spacing bg-[#f7f7f7]">
            <Container>
                {/* 1. Header */}
                <div className="max-w-3xl mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-[#C9A96A] font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">
                            Our Core Capabilities
                        </span>
                        <h2 className="section-heading text-slate-900 mb-6">
                            Expertise that Shapes <br /> the Modern Landscape
                        </h2>
                        <p className="body-text text-slate-600 max-w-2xl leading-relaxed">
                            Integrated construction, engineering, and interior solutions designed for complex commercial developments and luxury residential projects.
                        </p>
                    </motion.div>
                </div>

                {/* 2. Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {SERVICES_DATA.map((service, index) => {
                        const Icon = ICON_MAP[service.slug] || Building;
                        return (
                            <HomeServiceCard
                                key={service.slug}
                                index={index}
                                title={service.title}
                                description={service.shortDescription}
                                capabilities={service.process} // Using process steps as key capabilities
                                icon={Icon}
                                href={`/services/${service.slug}`}
                            />
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
