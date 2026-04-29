"use client";

import { motion } from "framer-motion";
import { Users, ClipboardList, HardHat, ShieldCheck, PackageCheck, LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";

interface Step {
    id: number;
    title: string;
    description: string;
    icon: LucideIcon;
}

const STEPS: Step[] = [
    {
        id: 1,
        title: "Consultation",
        description: "In-depth discovery session to understand your vision, requirements, and site feasibility.",
        icon: Users
    },
    {
        id: 2,
        title: "Planning & Design",
        description: "Detailed blueprints, material sourcing, and 3D visual mapping of your project.",
        icon: ClipboardList
    },
    {
        id: 3,
        title: "Engineering & Execution",
        description: "Precision construction by certified engineers using premium-grade industrial materials.",
        icon: HardHat
    },
    {
        id: 4,
        title: "Quality Control",
        description: "Rigorous ISO-standard inspections at every milestone to ensure absolute perfection.",
        icon: ShieldCheck
    },
    {
        id: 5,
        title: "Project Delivery",
        description: "Final walkthrough, documentation handover, and seamless transition to your new space.",
        icon: PackageCheck
    }
];

export default function ProcessSection() {
    return (
        <section className="section-vertical-spacing bg-white overflow-hidden">
            <Container>
                {/* Header */}
                <div className="max-w-3xl mb-16 px-4 md:px-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-[#C9A96A] font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">
                            Our Methodology
                        </span>
                        <h2 className="section-heading text-slate-900 mb-6 font-bold">
                            Our Project Delivery Process
                        </h2>
                        <p className="body-text text-slate-600 max-w-2xl leading-relaxed">
                            A structured approach ensuring uncompromising quality, full transparency, and timely delivery at every milestone.
                        </p>
                    </motion.div>
                </div>

                {/* Process Steps for Desktop (Horizontal) */}
                <div className="hidden lg:block relative py-12">
                    {/* Connecting Line */}
                    <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#C9A96A]/30 -translate-y-[100px]" />
                    
                    <div className="grid grid-cols-5 gap-6">
                        {STEPS.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative flex flex-col items-center text-center group"
                                >
                                    {/* Number & Icon Bubble */}
                                    <div className="relative z-10 mb-8 flex items-center justify-center">
                                        <div className="w-20 h-20 rounded-2xl bg-white border border-slate-100 shadow-sm group-hover:shadow-xl group-hover:border-[#C9A96A]/40 transition-all duration-300 flex items-center justify-center text-slate-700 group-hover:bg-[#C9A96A] group-hover:text-white relative">
                                            <Icon size={32} />
                                            {/* Step Number */}
                                            <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#C9A96A] text-white text-xs font-black flex items-center justify-center border-4 border-white shadow-md">
                                                {step.id}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3 className="section-heading text-xl mb-3 text-slate-900 group-hover:text-[#C9A96A] transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="body-text text-sm text-slate-600 leading-relaxed max-w-[180px]">
                                        {step.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Process Steps for Tablet/Mobile (Stacked/Vertical) */}
                <div className="lg:hidden flex flex-col space-y-8 px-4">
                   {STEPS.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col md:flex-row gap-6 bg-white border border-slate-100 p-8 rounded-[16px] shadow-sm items-start relative overflow-hidden group hover:border-[#C9A96A]/20 transition-all"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-[#C9A96A]/5 -mr-12 -mt-12 rounded-full group-hover:scale-125 transition-transform duration-500" />
                                
                                <div className="p-4 bg-slate-50 rounded-xl text-[#C9A96A] shrink-0 group-hover:bg-[#C9A96A] group-hover:text-white transition-colors relative z-10">
                                    <Icon size={32} />
                                </div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-[#C9A96A] font-black text-sm">Step 0{step.id}</span>
                                        <h3 className="section-heading text-2xl text-slate-900">{step.title}</h3>
                                    </div>
                                    <p className="body-text text-slate-600">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                   })}
                </div>
            </Container>
        </section>
    );
}
