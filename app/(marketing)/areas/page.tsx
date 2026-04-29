import Image from "next/image";
import { Container } from "@/components/ui/Container";
import AreasWeServe from "@/components/sections/AreasWeServe";
import CTA from "@/components/sections/CTA";
import Reveal from "@/components/animations/Reveal";

export default function AreasPage() {
    return (
        <div className="flex flex-col bg-white">
            {/* Unique Areas Hero */}
            <section className="relative h-[60vh] flex items-center bg-black overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/japanese-house-entrance.jpg"
                        alt="Service Areas Mumbai"
                        fill
                        priority
                        className="object-cover opacity-100"
                        quality={100}
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                </div>
                <Container className="relative z-10 text-center lg:text-left">
                    <Reveal width="100%">
                        <div className="max-w-4xl">
                            <span className="text-[#C9A96A] font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">
                                Service Locations
                            </span>
                            <h1 className="hero-heading text-white mb-8 text-5xl md:text-7xl">
                                Serving the Soul <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A96A] via-[#EAD0A8] to-[#C9A96A]">of Mumbai.</span>
                            </h1>
                            <p className="body-text text-slate-200 max-w-2xl leading-relaxed text-lg md:text-xl">
                                Delivering excellence across Mumbai&apos;s most prestigious commercial and residential hubs.
                            </p>
                        </div>
                    </Reveal>
                </Container>
            </section>

            <div className="section-divider" />

            {/* Main Areas Section */}
            <Reveal width="100%">
                <AreasWeServe />
            </Reveal>

            <div className="section-divider" />

            <CTA />
        </div>
    );
}
