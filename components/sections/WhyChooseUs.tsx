"use client";

import { motion } from "framer-motion";
import { WHY_CHOOSE_US } from "@/config/constants";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import ParallaxImage from "@/components/animations/ParallaxImage";

export default function WhyChooseUs() {
    return (
        <section className="section-vertical-spacing bg-[#faf7f2] border-y border-slate-200 font-inter overflow-hidden">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <SectionHeading
                            title="Why Choose Us"
                            subtitle="We don't just build structures; we forge lasting partnerships, guaranteeing premium results that exceed expectations time and time again."
                            className="mb-10 text-left"
                            centered={false}
                        />
                        <div className="space-y-8">
                            {WHY_CHOOSE_US.map((item, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="mt-1">
                                        <CheckCircle2 className="text-[#C9A96A] w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="sub-heading text-slate-900 mb-2">{item.title}</h4>
                                        <p className="body-text text-slate-600">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-6 h-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative mt-12 group rounded-[14px] overflow-hidden shadow-2xl"
                        >
                            <ParallaxImage
                                src="/images/tiler-working-renovation-apartment.jpg"
                                alt="Expert Tiling Work"
                                height="h-[300px] md:h-[400px]"
                                strength={0.15}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: -40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="relative mb-12 group rounded-[14px] overflow-hidden shadow-2xl"
                        >
                            <ParallaxImage
                                src="/images/construction-site-interior.jpg"
                                alt="Commercial Construction"
                                height="h-[300px] md:h-[400px]"
                                strength={-0.15} // Opposite direction for variety
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none" />
                        </motion.div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
