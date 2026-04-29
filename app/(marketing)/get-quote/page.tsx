import { Suspense } from "react";
import dynamic from "next/dynamic";
import ContactHero from "@/components/contact/ContactHero";
import MultiStepForm from "@/components/contact/MultiStepForm";
import ContactInfoBlock from "@/components/contact/ContactInfoBlock";
const MapSection = dynamic(() => import("@/components/contact/MapSection"), { ssr: false });
import { Container } from "@/components/ui/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Request a Quote | Civil & Interior Contractor in Mumbai",
    description: "Request consultation for construction, renovation, painting and turnkey projects across Mumbai.",
};



export default function GetQuotePage() {
    return (
        <div className="flex flex-col bg-white">
            <ContactHero />

            <div className="section-divider" />

            <section className="py-24 relative z-10 bg-slate-50/40">
                <Container>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                            {/* Interactive Multi-Step Form */}
                            <div className="lg:col-span-8 h-full">
                                <Suspense fallback={<div className="h-96 flex items-center justify-center bg-white rounded-[3rem] border border-slate-100 shadow-xl animate-pulse text-[#C9A96A] font-black uppercase tracking-widest text-xs">Initializing Enterprise Quote Engine...</div>}>
                                    <MultiStepForm />
                                </Suspense>
                            </div>

                            {/* Persistent Contact Info Sidebar */}
                            <div className="lg:col-span-4 h-full">
                                <ContactInfoBlock />
                            </div>
                        </div>
                </Container>
            </section>

            <div className="section-divider" />

            <MapSection />
        </div>
    );
}
