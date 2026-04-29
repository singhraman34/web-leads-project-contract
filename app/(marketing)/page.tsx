import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Construction & Interior Contractors in Mumbai | 25+ Years Experience',
  description: 'Premium construction, interior architecture, and renovation services across Mumbai. 500+ projects delivered with engineering precision.',
  alternates: {
    canonical: '/',
  },
};
import Hero from "@/components/sections/Hero";

import CTA from "@/components/sections/CTA";

import TrustSection from "@/components/sections/TrustSection";
import Stats from "@/components/sections/Stats";
import ServicesOverview from "@/components/sections/ServicesOverview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ProcessSection from "@/components/sections/ProcessSection";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import TestimonialsHomeSection from "@/components/sections/TestimonialsHomeSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <div className="section-divider" />
      <TrustSection />
      <div className="section-divider" />
      <Stats />
      <div className="section-divider" />
      <ServicesOverview />
      <div className="section-divider" />
      <ExpertiseSection />
      <div className="section-divider" />
      <WhyChooseUs />
      <div className="section-divider" />
      <ProcessSection />
      <div className="section-divider" />
      <FeaturedProjects />
      <div className="section-divider" />
      <TestimonialsHomeSection />
      <CTA />
    </div>
  );
}
