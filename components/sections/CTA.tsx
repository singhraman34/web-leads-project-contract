"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { PhoneCall } from "lucide-react";

interface CTAProps {
    serviceSlug?: string;
    projectSlug?: string;
}

export default function CTA({ serviceSlug, projectSlug }: CTAProps) {
    let contactHref = "/get-quote";
    if (serviceSlug) {
        contactHref = `/get-quote?service=${serviceSlug}`;
    } else if (projectSlug) {
        contactHref = `/get-quote?project=${projectSlug}`;
    }

    return (
        <section className="relative overflow-hidden bg-[#faf7f2]">
            <div className="flex flex-col lg:flex-row min-h-[500px]">
                {/* Left Pane - Gold Content */}
                <div className="lg:w-[45%] bg-[#C9A96A] p-12 lg:p-24 flex flex-col justify-center relative z-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="section-heading mb-8 text-white leading-tight">
                            Book your complimentary design consultation today!
                        </h2>
                        
                        <div className="flex items-center gap-4 mb-10 text-white">
                            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center">
                                <PhoneCall className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <p className="text-white/80 text-sm uppercase tracking-widest font-bold">Call us</p>
                                <a href="tel:1800ELITEBUILD" className="text-xl md:text-2xl font-bold hover:underline">
                                    1-800-ELITE-BUILD
                                </a>
                            </div>
                        </div>

                        <Link href={contactHref}>
                            <Button className="bg-white text-slate-900 hover:bg-slate-50 px-10 py-7 text-lg font-bold uppercase tracking-widest transition-all shadow-xl">
                                Get in touch
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Desktop Diagonal Cut */}
                    <div className="hidden lg:block absolute top-0 right-[-100px] h-full w-[200px] bg-[#C9A96A] skew-x-[-15deg] z-10" />
                </div>

                {/* Right Pane - Interior Image */}
                <div className="lg:w-[55%] relative min-h-[400px] lg:min-h-full overflow-hidden">
                    <Image
                        src="/images/modern-elegant-living-room-with-fireplace.jpg"
                        alt="Luxury Interior Design"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/10" />
                </div>
            </div>
        </section>
    );
}
