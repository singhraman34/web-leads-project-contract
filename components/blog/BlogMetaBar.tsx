"use client";

import { motion } from "framer-motion";
import { BlogPost } from "@/types/blog";
import { FolderOpen, Calendar, User, Tag } from "lucide-react";

export default function BlogMetaBar({ post }: { post: BlogPost }) {
    const formattedDate = new Date(post.publishDate).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-10 p-6 bg-slate-100/20 border border-slate-200 rounded-xl w-full max-w-4xl mx-auto backdrop-blur-md"
        >
            <div className="flex items-center gap-2 text-slate-700 font-medium">
                <FolderOpen className="w-5 h-5 text-sky-500" />
                <span className="uppercase tracking-wider text-xs font-bold">{post.category}</span>
            </div>

            <div className="w-1 h-1 bg-slate-100 rounded-full" />

            <div className="flex items-center gap-2 text-slate-700 font-medium">
                <User className="w-5 h-5 text-sky-500" />
                <span className="uppercase tracking-wider text-xs font-bold">{post.author}</span>
            </div>

            <div className="w-1 h-1 bg-slate-100 rounded-full" />

            <div className="flex items-center gap-2 text-slate-700 font-medium">
                <Calendar className="w-5 h-5 text-sky-500" />
                <span className="uppercase tracking-wider text-xs font-bold">{formattedDate}</span>
            </div>

            <div className="w-1 h-1 bg-slate-100 rounded-full" />

            <div className="flex items-center gap-2 text-sky-500 font-medium">
                <Tag className="w-5 h-5" />
                <div className="flex gap-2">
                    {post.tags.map(tag => (
                        <span key={tag} className="text-xs uppercase tracking-wider font-bold hover:underline cursor-pointer">{tag}</span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
