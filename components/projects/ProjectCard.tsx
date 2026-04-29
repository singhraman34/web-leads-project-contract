"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types/project";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProjectCard({ project, index }: { project: Project, index: number }) {
    const router = useRouter();

    return (
        <motion.div
            onClick={() => router.push(`/projects/${project.slug}`)}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-[14px] bg-white cursor-pointer border border-slate-100 aspect-[4/3] shadow-sm hover:shadow-xl transition-all duration-500"
        >
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="absolute top-6 left-6 z-10">
                <span className="inline-block px-3 py-1 bg-[#C9A96A] backdrop-blur-md border border-[#C9A96A]/30 text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg shadow-black/50">
                    {project.category}
                </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white/80 body-text mb-2">{project.location}</p>
                <h3 className="section-heading text-white mb-4 drop-shadow-md">
                    {project.title}
                </h3>

                <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center text-[#C9A96A] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-max"
                >
                    View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
            </div>
        </motion.div>
    );
}
