"use client";

import { BlogPost } from "@/types/blog";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function RelatedPosts({ currentSlug, allPosts }: { currentSlug: string, allPosts: BlogPost[] }) {
    // Filter out current post and take top 3
    const related = allPosts.filter(p => p.slug !== currentSlug).slice(0, 3);

    return (
        <div className="sticky top-28 bg-sky-50 border border-slate-200 rounded-2xl p-8">
            <h4 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-widest border-b border-slate-200/50 pb-4">
                More Analysis
            </h4>

            <div className="space-y-6">
                {related.map(post => {
                    const date = new Date(post.publishDate).toLocaleDateString("en-US", { month: "short", day: "numeric" });

                    return (
                        <div key={post.slug} className="group relative flex gap-4 items-center">
                            <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0">
                                <Image
                                    src={post.featuredImage}
                                    alt={post.title}
                                    fill
                                    sizes="80px"
                                    className="object-cover transition-transform group-hover:scale-110"
                                />
                            </div>
                            <div className="flex-1">
                                <p className="text-sky-500 text-[10px] uppercase font-bold tracking-widest mb-1">{date} • {post.category}</p>
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="font-bold text-slate-700 leading-tight group-hover:text-sky-500 transition-colors line-clamp-2 text-sm"
                                >
                                    {post.title}
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>

            <Link href="/blog" className="mt-8 flex items-center justify-center w-full py-4 border border-sky-500/50 text-sky-500 font-bold uppercase tracking-widest text-xs rounded hover:bg-sky-50 transition-colors">
                View All Articles <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
        </div>
    );
}
