import dynamic from "next/dynamic";
import { TESTIMONIALS_DATA } from "@/lib/data/testimonials";
import TestimonialsHero from "@/components/testimonials/TestimonialsHero";
import RatingSummary from "@/components/testimonials/RatingSummary";
import TestimonialCard from "@/components/testimonials/TestimonialCard";
const VideoTestimonialSection = dynamic(() => import("@/components/testimonials/VideoTestimonialSection"), { ssr: false });
import CTA from "@/components/sections/CTA";
import { Container } from "@/components/ui/Container";
import { Metadata } from "next";
import Reveal from "@/components/animations/Reveal";

export const metadata: Metadata = {
    title: "Client Testimonials | Trusted Civil Contractor in Mumbai",
    description: "Real reviews from our commercial and residential clients. Delivering precision engineering across Mumbai for over 25 years.",
    openGraph: {
        title: "Client Testimonials | Trusted Civil Contractor in Mumbai",
        description: "Real reviews from our commercial and residential clients. Providing precision engineering in Mumbai since 1999.",
        url: 'https://elitecontractors.com/testimonials',
    }
};

export default function TestimonialsPage() {
    return (
        <main className="flex flex-col min-h-screen bg-background overflow-hidden">
            <TestimonialsHero />

            <div className="section-divider" />

            <Reveal width="100%">
                <RatingSummary testimonials={TESTIMONIALS_DATA} />
            </Reveal>

            <div className="section-divider" />

            {/* Testimonial Grid */}
            <section className="section-vertical-spacing bg-background">
                <Container>
                    <Reveal width="100%">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {TESTIMONIALS_DATA.map((testimonial, index) => (
                                <TestimonialCard
                                    key={testimonial.id}
                                    testimonial={testimonial}
                                    index={index}
                                />
                            ))}
                        </div>
                    </Reveal>
                </Container>
            </section>

            <div className="section-divider" />

            <Reveal width="100%">
                <VideoTestimonialSection testimonials={TESTIMONIALS_DATA} />
            </Reveal>

            <div className="section-divider" />

            <CTA />
        </main>
    );
}
