"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/types/blog";
import { Calendar, User } from "lucide-react";

export default function BlogCard({ post, index }: { post: BlogPost, index: number }) {
    const formattedDate = new Date(post.publishDate).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: (index % 3) * 0.15 }}
            className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full overflow-hidden"
        >
            <Link href={`/blog/${post.slug}`} className="block relative w-full aspect-[4/3] overflow-hidden">
                <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                />
                <div className="absolute top-4 left-4 z-10 px-4 py-1.5 bg-white/95 backdrop-blur-md text-sky-600 text-xs font-bold uppercase tracking-widest rounded-full border border-slate-100 shadow-sm">
                    {post.category}
                </div>
            </Link>

            <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-sky-500" /> {formattedDate}</span>
                    <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-sky-500" /> {post.author}</span>
                </div>

                <Link href={`/blog/${post.slug}`} className="block mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-sky-500 transition-colors leading-tight line-clamp-2">
                        {post.title}
                    </h3>
                </Link>

                <p className="text-slate-600 leading-relaxed line-clamp-3 flex-grow mb-6">
                    {post.excerpt}
                </p>

                <div className="mt-auto pt-6 border-t border-slate-100">
                    <Link href={`/blog/${post.slug}`} className="inline-flex font-bold text-sky-500 uppercase tracking-widest text-sm hover:text-sky-600 hover:underline underline-offset-4 transition-colors">
                        Read Article →
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
