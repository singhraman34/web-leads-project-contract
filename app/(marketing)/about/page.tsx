import { ABOUT_DATA } from "@/lib/data/about";
import AboutHero from "@/components/about/AboutHero";
import FounderSection from "@/components/about/FounderSection";
import Timeline from "@/components/about/Timeline";
import MilestonesGrid from "@/components/about/MilestonesGrid";
import CertificationsSection from "@/components/about/CertificationsSection";
import SafetyComplianceBlock from "@/components/about/SafetyComplianceBlock";
import AwardsShowcase from "@/components/trust/AwardsShowcase";
import MediaMentions from "@/components/trust/MediaMentions";
import CTA from "@/components/sections/CTA";
import { Metadata } from "next";

import Reveal from "@/components/animations/Reveal";

export const metadata: Metadata = {
    title: "About Our 25+ Year Legacy | Singhs Interiors Mumbai",
    description: "Discover the journey, expertise, and leadership of Singhs Interiors. Delivering excellence in civil and interior contracting since 1999.",
    openGraph: {
        title: "About Our 25+ Year Legacy | Singhs Interiors Mumbai",
        description: "Discover the journey, expertise, and leadership of Singhs Interiors. Providing excellence in civil and interior contracting since 1999.",
        url: 'https://elitecontractors.com/about',
    }
};

export default function AboutPage() {
    return (
        <div className="flex flex-col bg-white">
            {/* A) About Hero (25+ Years positioning) */}
            <AboutHero />

            <div className="section-divider" />

            {/* B) Founder Message Section */}
            <Reveal width="100%">
                <FounderSection founder={ABOUT_DATA.founder} />
            </Reveal>

            <div className="section-divider" />

            {/* Industry Recognition */}
            <Reveal width="100%">
                <AwardsShowcase />
            </Reveal>

            <div className="section-divider" />

            {/* C) Timeline Component */}
            <Reveal width="100%">
                <Timeline events={ABOUT_DATA.journeyTimeline} />
            </Reveal>

            <div className="section-divider" />

            {/* D) Milestones Grid */}
            <Reveal width="100%">
                <MilestonesGrid milestones={ABOUT_DATA.milestones} />
            </Reveal>

            <div className="section-divider" />

            {/* E) Certifications Section */}
            <Reveal width="100%">
                <CertificationsSection certifications={ABOUT_DATA.certifications} />
            </Reveal>

            <div className="section-divider" />

            {/* F) Safety Compliance Section */}
            <Reveal width="100%">
                <SafetyComplianceBlock protocols={ABOUT_DATA.safetyCompliance} />
            </Reveal>

            <div className="section-divider" />

            {/* Media Mentions */}
            <Reveal width="100%">
                <MediaMentions />
            </Reveal>

            <div className="section-divider" />

            {/* G) Strong CTA */}
            <CTA />
        </div>
    );
}
