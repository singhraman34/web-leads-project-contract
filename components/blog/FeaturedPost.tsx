"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/types/blog";
import { Calendar, User, ArrowRight } from "lucide-react";

export default function FeaturedPost({ post }: { post: BlogPost }) {
    const formattedDate = new Date(post.publishDate).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full bg-white border border-slate-100 rounded-[2rem] overflow-hidden hover:border-primary/50 transition-all duration-500 group mb-24 lg:flex shadow-xl shadow-slate-200/50"
        >
            <div className="relative w-full lg:w-1/2 min-h-[400px] lg:min-h-full overflow-hidden">
                <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>

            <div className="w-full lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                    <span className="px-4 py-1.5 bg-primary/10 backdrop-blur-md border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest rounded-full">
                        Featured Analysis
                    </span>
                    <span className="px-3 py-1.5 bg-slate-100 border border-slate-200 text-slate-900 text-xs font-bold uppercase tracking-widest rounded-full">
                        {post.category}
                    </span>
                </div>

                <div className="flex items-center gap-5 text-sm font-bold uppercase tracking-wider text-slate-900/50 mb-6">
                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-primary" /> {formattedDate}</span>
                    <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-primary" /> {post.author}</span>
                </div>

                <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight group-hover:text-primary transition-colors">
                        {post.title}
                    </h3>
                </Link>

                <p className="text-lg text-slate-600 leading-relaxed mb-10 border-l-2 border-primary pl-4">
                    {post.excerpt}
                </p>

                <Link href={`/blog/${post.slug}`} className="inline-flex items-center justify-center bg-primary text-white font-bold uppercase tracking-widest h-14 px-10 rounded-xl hover:opacity-90 shadow-md hover:shadow-lg transition-all w-max">
                    Read the Full Guide <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
            </div>
        </motion.div>
    );
}
