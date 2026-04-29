import { getProjectBySlug, PROJECTS_DATA } from "@/lib/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import Reveal from "@/components/animations/Reveal";
import { MapPin, Clock, CircleDollarSign, Quote, ArrowLeft } from "lucide-react";
import Link from "next/link";
import CTA from "@/components/sections/CTA";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

interface ProjectDetailPageProps {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    return PROJECTS_DATA.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
    const project = getProjectBySlug(params.slug);
    if (!project) return { title: "Project Not Found" };

    return {
        title: `${project.title} | ${project.category} Case Study`,
        description: project.description,
        alternates: {
            canonical: `/projects/${params.slug}`,
        },
    };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
    const project = getProjectBySlug(params.slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="flex flex-col bg-white">
            {/* Premium Hero Section */}
            <section className="relative h-[70vh] min-h-[600px] flex items-center bg-slate-950 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={project.afterImage || project.thumbnail}
                        alt={project.title}
                        fill
                        className="object-cover opacity-100"
                        priority
                        quality={100}
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                </div>

                <Container className="relative z-10 w-full mb-[-120px]">
                    <div className="max-w-4xl">
                        <Reveal>
                            <Link
                                href="/projects"
                                className="inline-flex items-center gap-2 text-[#C9A96A] hover:text-white mb-8 transition-colors font-black uppercase tracking-widest text-[10px]"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Back to All Projects
                            </Link>
                        </Reveal>

                        <Reveal delay={0.1}>
                            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-widest text-white bg-[#C9A96A]/20 border border-[#C9A96A]/30 rounded-full backdrop-blur-md">
                                {project.category}
                            </span>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                                {project.title}
                            </h1>
                        </Reveal>

                        <Reveal delay={0.3}>
                            <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
                                {project.description}
                            </p>
                        </Reveal>
                    </div>
                </Container>
            </section>

            {/* Quick Stats Bar */}
            <section className="relative z-20">
                <Container>
                    <Reveal>
                        <div className="bg-white rounded-[24px] shadow-2xl p-8 md:p-12 mb-20 -mt-16 border border-slate-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            <div className="flex items-start gap-4">
                                <MapPin className="text-[#C9A96A] w-8 h-8 shrink-0" />
                                <div>
                                    <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider mb-1">Location</p>
                                    <p className="text-slate-900 font-bold text-lg">{project.location}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Clock className="text-[#C9A96A] w-8 h-8 shrink-0" />
                                <div>
                                    <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider mb-1">Duration</p>
                                    <p className="text-slate-900 font-bold text-lg">{project.duration}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <CircleDollarSign className="text-[#C9A96A] w-8 h-8 shrink-0" />
                                <div>
                                    <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider mb-1">Project Value</p>
                                    <p className="text-slate-900 font-bold text-lg">{project.budget}</p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </Container>
            </section>

            {/* Case Study Details */}
            {project.caseStudy && (
                <section className="py-12 md:py-20 bg-slate-50 border-y border-slate-200">
                    <Container>
                        <div className="text-center mb-16">
                            <Reveal>
                                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                                    Engineering <span className="text-[#C9A96A]">Excellence.</span>
                                </h2>
                                <div className="w-24 h-1 bg-[#C9A96A] mx-auto rounded mt-6"></div>
                            </Reveal>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                            <div className="w-full flex justify-center items-center">
                                <Reveal width="100%">
                                    <div className="aspect-square w-full max-w-[500px] rounded-[24px] overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-700">
                                        <BeforeAfterSlider
                                            beforeImage={project.beforeImage}
                                            afterImage={project.afterImage}
                                            alt={project.title}
                                        />
                                    </div>
                                </Reveal>
                            </div>
                            <div className="flex flex-col justify-center space-y-12">
                                <Reveal delay={0.1}>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-4 border-l-4 border-[#C9A96A] pl-4">The Challenge</h3>
                                        <p className="text-slate-600 leading-relaxed text-lg">
                                            {project.caseStudy.challenge}
                                        </p>
                                    </div>
                                </Reveal>
                                <Reveal delay={0.2}>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-4 border-l-4 border-[#C9A96A] pl-4">Our Solution</h3>
                                        <p className="text-slate-600 leading-relaxed text-lg">
                                            {project.caseStudy.solution}
                                        </p>
                                    </div>
                                </Reveal>
                                <Reveal delay={0.3}>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-4 border-l-4 border-[#C9A96A] pl-4">The Outcome</h3>
                                        <p className="text-slate-600 leading-relaxed text-lg">
                                            {project.caseStudy.outcome}
                                        </p>
                                    </div>
                                </Reveal>
                            </div>
                        </div>
                    </Container>
                </section>
            )}

            {/* Testimonial */}
            {project.testimonial && (
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C9A96A]/5 rounded-full blur-[100px] -z-10" />
                    <Container>
                        <Reveal width="100%">
                            <div className="max-w-4xl mx-auto text-center">
                                <Quote className="w-16 h-16 text-[#C9A96A] mx-auto mb-8 opacity-50" />
                                <h4 className="text-2xl md:text-4xl text-slate-900 font-medium leading-relaxed italic mb-8">
                                    &quot;{project.testimonial.quote}&quot;
                                </h4>
                                <div className="flex flex-col items-center justify-center">
                                    <p className="text-slate-900 font-bold uppercase tracking-widest text-sm mb-2">
                                        {project.testimonial.client}
                                    </p>
                                    <div className="flex gap-1">
                                        {[...Array(Math.floor(project.testimonial.rating))].map((_, i) => (
                                            <svg key={i} className="w-5 h-5 text-[#C9A96A]" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </Container>
                </section>
            )}

            <CTA />
        </div>
    );
}
