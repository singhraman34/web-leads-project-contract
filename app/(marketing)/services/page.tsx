import { SERVICES_DATA } from "@/lib/data/services";
import { Container } from "@/components/ui/Container";
import ServiceCard from "@/components/services/ServiceCard";
import CTA from "@/components/sections/CTA";

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Enterprise Construction & Interior Services | Singhs Interiors Mumbai",
    description: "Bespoke construction, luxury interior design, and large-scale industrial building solutions. Over 25 years of excellence in Mumbai.",
    alternates: {
        canonical: "/services",
    },
};

import ParallaxImage from "@/components/animations/ParallaxImage";
import Reveal from "@/components/animations/Reveal";

export default function ServicesPage() {
    return (
        <div className="flex flex-col bg-white">
            {/* Simple Hero for main listing page */}
            <section className="relative h-[60vh] md:h-[70vh] flex items-center bg-black overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <ParallaxImage
                        src="/images/3d-rendering-modern-luxury-hotel-office-reception-meeting-lounge.jpg"
                        alt="Premium interior design, renovation and construction services in Mumbai"
                        height="h-full"
                        strength={0.2}
                        className="opacity-100"
                        priority={true}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
                </div>
                <Container className="relative z-20 text-center lg:text-left">
                    <Reveal width="100%">
                        <div className="max-w-4xl mx-auto lg:mx-0">
                            <span className="text-[#C9A96A] font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">
                                Expert Solutions
                            </span>
                            <h1 className="hero-heading text-white mb-8 text-5xl md:text-7xl">
                                Our Enterprise <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A96A] via-[#EAD0A8] to-[#C9A96A]">Capabilities.</span>
                            </h1>
                            <p className="body-text text-slate-300 max-w-2xl leading-relaxed text-lg md:text-xl">
                                From luxury interiors to large-scale construction, we deliver precision engineering and uncompromising quality across every project discipline.
                            </p>
                        </div>
                    </Reveal>
                </Container>
            </section>

            <div className="section-divider" />

            {/* Services Grid */}
            <section className="section-vertical-spacing bg-white">
                <Container>
                    <Reveal width="100%">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                            {SERVICES_DATA.map((service, index) => (
                                <ServiceCard key={service.slug} service={service} index={index} />
                            ))}
                        </div>
                    </Reveal>
                </Container>
            </section>

            <div className="section-divider" />

            <Reveal width="100%">
                <CTA />
            </Reveal>
        </div>
    );
}
