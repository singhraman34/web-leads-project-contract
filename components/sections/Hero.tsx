"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const HERO_IMAGES = [
    "/images/3d-rendering-modern-luxury-hotel-office-reception-meeting-lounge.jpg",
    "/images/modern-elegant-living-room-with-fireplace.jpg",
    "/images/outdoor-sofa-with-beige-cushions-coffee-table-front-restaurant-window.jpg",
];

const STATS_DATA = [
    { label: "Years Experience", value: 25, suffix: "+" },
    { label: "Projects Delivered", value: 500, suffix: "+" },
    { label: "Corporate Clients", value: 120, suffix: "+" },
];

function CountUp({ end, suffix }: { end: number; suffix: string }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let requestId: number;
        let startTime: number;
        const duration = 2000;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            const easeOut = 1 - Math.pow(1 - percentage, 4);

            setCount(Math.floor(end * easeOut));

            if (progress < duration) {
                requestId = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        requestId = requestAnimationFrame(animate);
        return () => {
            if (requestId) cancelAnimationFrame(requestId);
        };
    }, [end]);

    return <span>{count}{suffix}</span>;
}

export default function Hero() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const fadeUpVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.23, 1, 0.32, 1],
            },
        },
    };

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    return (
        <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-black py-20 lg:py-0">
            {/* Background Image Rotation */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="popLayout" initial={false}>
                    <motion.div
                        key={currentImage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={HERO_IMAGES[currentImage]}
                            alt="Singhs Interiors - Premium construction and luxury interior design in Mumbai"
                            fill
                            sizes="100vw"
                            priority
                            className="object-cover opacity-60"
                        />
                    </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
            </div>

            <Container className="relative z-20">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="max-w-4xl"
                >
                    {/* Badge */}
                    <motion.div variants={fadeUpVariants} className="flex items-center gap-4 mb-8">
                        <span className="w-12 h-[2px] bg-[#C9A96A]"></span>
                        <span className="text-[#C9A96A] font-black uppercase tracking-[0.2em] text-[10px] md:text-xs">
                            Est. 1999 • Mumbai&apos;s Premium Contractor
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        variants={fadeUpVariants}
                        className="text-white font-black leading-[1.1] tracking-tight mb-8 text-5xl md:text-6xl lg:text-[64px]"
                    >
                        25+ Years Building <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A96A] via-[#EAD0A8] to-[#C9A96A]">Mumbai&apos;s Premium Spaces.</span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        variants={fadeUpVariants}
                        className="text-slate-300 text-lg md:text-xl lg:text-[20px] max-w-2xl leading-relaxed mb-12 font-medium"
                    >
                        From luxury interiors to large-scale construction, we deliver precision engineering and uncompromising quality across every project.
                    </motion.p>

                    {/* Stats Bar */}
                    <motion.div
                        variants={fadeUpVariants}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12"
                    >
                        {STATS_DATA.map((stat, i) => (
                            <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-4 md:p-6 rounded-[14px] hover:border-[#C9A96A]/30 transition-colors shadow-xl">
                                <div className="text-2xl md:text-3xl font-black text-white mb-1">
                                    <CountUp end={stat.value} suffix={stat.suffix} />
                                </div>
                                <div className="text-[10px] md:text-xs font-bold text-white/50 uppercase tracking-widest leading-tight">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        variants={fadeUpVariants}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Link href="/get-quote">
                            <Button className="w-full sm:w-auto h-14 md:h-16 px-10 text-lg font-bold uppercase tracking-widest shadow-2xl shadow-[#C9A96A]/20">
                                Start Your Project <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Link href="/projects">
                            <Button variant="outline" className="w-full sm:w-auto h-14 md:h-16 px-10 border-white/20 text-white hover:bg-white hover:text-black transition-all text-lg font-bold uppercase tracking-widest">
                                View Our Portfolio
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </Container>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center gap-2"
            >
                <span className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em] rotate-180 [writing-mode:vertical-lr]">
                    Scroll to Explore
                </span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-5 h-5 text-white/40"
                >
                    <ChevronDown className="w-full h-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
