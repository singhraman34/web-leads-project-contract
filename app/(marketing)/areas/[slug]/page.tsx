import { Container } from "@/components/ui/Container";
import { PROJECTS_DATA } from "@/lib/data/projects";
import { getAreaBySlug, AREAS_WE_SERVE } from "@/lib/data/areas";
import ProjectCard from "@/components/projects/ProjectCard";
import { notFound } from "next/navigation";
import Reveal from "@/components/animations/Reveal";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowLeft, Building2 } from "lucide-react";
import { Metadata } from "next";

interface AreaPageProps {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: AreaPageProps): Promise<Metadata> {
    const area = getAreaBySlug(params.slug);
    if (!area) return { title: "Area Not Found" };

    return {
        title: `${area.name} | Premium Construction & Interior Projects`,
        description: `Explore our high-end construction and interior architecture projects in ${area.name}, Mumbai. Delivering excellence for over 25 years.`,
        alternates: {
            canonical: `/areas/${params.slug}`,
        },
    };
}

export default function AreaPage({ params }: AreaPageProps) {
    const area = getAreaBySlug(params.slug);
    
    if (!area) {
        notFound();
    }

    const areaProjects = PROJECTS_DATA.filter(p => p.areaSlug === params.slug);

    return (
        <main className="min-h-screen bg-white">
            {/* Premium Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden bg-slate-950">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={area.image || "/images/mumbai-hq-premium.png"}
                        alt={area.name}
                        fill
                        className="object-cover opacity-60 scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-white" />
                </div>

                <Container className="relative z-10">
                    <Reveal>
                        <Link 
                            href="/areas" 
                            className="inline-flex items-center gap-2 text-[#C9A96A] hover:text-white mb-8 transition-all font-black uppercase tracking-widest text-[10px] bg-slate-900/50 backdrop-blur-md px-4 py-2 rounded-full border border-[#C9A96A]/30"
                        >
                            <ArrowLeft className="w-3 h-3" />
                            Back to All Areas
                        </Link>
                    </Reveal>

                    <div className="max-w-4xl">
                        <Reveal>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-[#C9A96A]/10 backdrop-blur-sm rounded-lg border border-[#C9A96A]/20">
                                    <MapPin className="w-5 h-5 text-[#C9A96A]" />
                                </div>
                                <span className="text-[#C9A96A] font-black uppercase tracking-[0.3em] text-[10px]">
                                    {area.region} Mumbai Portfolio
                                </span>
                            </div>
                        </Reveal>

                        <Reveal>
                            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tighter leading-[0.9]">
                                {area.name}
                            </h1>
                        </Reveal>

                        <Reveal>
                            <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed italic border-l-2 border-[#C9A96A] pl-6">
                                Showcasing our architectural signature across {area.name}&apos;s most prestigious landscapes.
                                {areaProjects.length > 0 
                                    ? ` Currently featuring ${areaProjects.length} landmark developments.` 
                                    : " Engineering the future of this iconic district."}
                            </p>
                        </Reveal>
                    </div>
                </Container>
            </section>

            {/* Content Section */}
            <section className="py-24 -mt-20 relative z-20">
                <Container>
                    {areaProjects.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {areaProjects.map((project, idx) => (
                                <Reveal key={project.slug} delay={idx * 0.1}>
                                    <ProjectCard project={project} index={idx} />
                                </Reveal>
                            ))}
                        </div>
                    ) : (
                        <Reveal width="100%">
                            <div className="text-center py-24 bg-slate-50 rounded-[40px] border border-slate-200 shadow-inner overflow-hidden relative">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C9A96A] to-transparent opacity-30" />
                                <Building2 className="w-16 h-16 text-slate-300 mx-auto mb-6" />
                                <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">New Landmarks Coming Soon</h2>
                                <p className="text-slate-500 max-w-lg mx-auto mb-10 leading-relaxed">
                                    We are currently executing several high-profile projects in {area.name}. Check back soon for full case studies, or explore our national portfolio.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <Link 
                                        href="/projects" 
                                        className="bg-slate-900 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-slate-800 transition-all shadow-xl hover:shadow-slate-400/20"
                                    >
                                        Browse Portfolio
                                    </Link>
                                    <Link 
                                        href="/enquiry" 
                                        className="bg-[#C9A96A] text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-[#B5966B] transition-all shadow-xl hover:shadow-[#C9A96A]/20"
                                    >
                                        Start Your Project
                                    </Link>
                                </div>
                            </div>
                        </Reveal>
                    )}
                </Container>
            </section>
        </main>
    );
}

export async function generateStaticParams() {
    return AREAS_WE_SERVE.map((area) => ({
        slug: area.slug,
    }));
}
