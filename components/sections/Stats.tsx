"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { useEffect, useState } from "react";
import { STATS } from "@/lib/data/stats";

function CountUp({ end, suffix }: { end: number; suffix: string }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let requestId: number;
        let startTime: number;
        const duration = 2000; // 2 seconds

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            // easeOutQuart
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

    return (
        <span className="text-4xl md:text-5xl font-extrabold text-slate-950 mb-2 flex items-center justify-center">
            {count}{suffix}
        </span>
    );
}

export default function Stats() {
    return (
        <section className="section-vertical-spacing-small bg-gradient-to-r from-[#faf7f2] to-white">
            <Container>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-200">
                    {STATS.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05, ease: [0.23, 1, 0.32, 1] }}
                            className="flex flex-col items-center justify-center text-center px-4"
                        >
                            <CountUp end={stat.value} suffix={stat.suffix} />
                            <span className="text-sm md:text-base text-slate-600 font-medium">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
