import { notFound } from "next/navigation";
import { getServiceBySlug, SERVICES_DATA } from "@/lib/data/services";
import { Container } from "@/components/ui/Container";
import ServiceHero from "@/components/services/ServiceHero";
import ProcessStepper from "@/components/services/ProcessStepper";
import FAQAccordion from "@/components/services/FAQAccordion";
import CTA from "@/components/sections/CTA";
import { Metadata } from "next";
import StructuredData from "@/components/seo/StructuredData";
import Reveal from "@/components/animations/Reveal";

// Pre-render dynamic routes
export async function generateStaticParams() {
    return SERVICES_DATA.map((service) => ({
        slug: service.slug,
    }));
}

// Generate Dynamic SEO Metadata
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const service = getServiceBySlug(params.slug);

    if (!service) {
        return {
            title: "Service Not Found",
        };
    }

    const title = `${service.title} | Construction & Interior Contractors in Mumbai`;
    const description = `${service.shortDescription} delivered with engineering precision and luxury craftsmanship across Mumbai.`;
    const image = service.image || '/logo/logo-final.png';

    return {
        title,
        description,
        alternates: {
            canonical: `/services/${params.slug}`,
        },
        openGraph: {
            title,
            description,
            type: 'article',
            images: [{ url: image }],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [image],
        },
    };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
    const service = getServiceBySlug(params.slug);

    if (!service) {
        notFound();
    }

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.title,
        "description": service.shortDescription,
        "provider": {
            "@type": "LocalBusiness",
            "name": "Singhs Interiors"
        },
        "areaServed": {
            "@type": "City",
            "name": "Mumbai"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": service.category,
            "itemListElement": service.process.map((step) => ({
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": step
                }
            }))
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": service.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <main className="flex flex-col min-h-screen bg-background overflow-hidden">
            <StructuredData data={serviceSchema} />
            <StructuredData data={faqSchema} />
            
            {/* A) Service Hero Banner */}
            <ServiceHero
                title={service.title}
                description={service.shortDescription}
                category={service.category}
            />

            <div className="section-divider" />

            <Container className="section-vertical-spacing px-4 md:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
                    {/* Main Content Area */}
                    <div className="lg:col-span-2">
                        {/* B) Overview Section */}
                        <Reveal width="100%">
                            <section className="mb-16">
                                <h2 className="section-heading text-slate-900 mb-8 font-black">Service Overview</h2>
                                <p className="body-text text-slate-600 leading-relaxed text-lg">
                                    {service.overview}
                                </p>
                            </section>
                        </Reveal>

                        <div className="section-divider mb-16 opacity-30" />

                        {/* C) Process Stepper */}
                        <Reveal width="100%">
                            <ProcessStepper steps={service.process} />
                        </Reveal>

                        <div className="section-divider my-16 opacity-30" />

                        {/* F) FAQ Accordion */}
                        <Reveal width="100%">
                            <FAQAccordion faqs={service.faqs} />
                        </Reveal>
                    </div>

                    {/* Sidebar / Info Metrics */}
                    <div className="lg:col-span-1">
                        <Reveal width="100%">
                            <div className="sticky top-28 w-full">
                                {/* G) Case Studies Preview block */}
                                <div className="p-10 bg-slate-50 border border-slate-200 rounded-[24px] shadow-sm hover:shadow-xl transition-all group">
                                    <div className="w-12 h-1 bg-[#C9A96A] mb-8 group-hover:w-24 transition-all duration-500 rounded-full" />
                                    <h4 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tight">Related Projects</h4>
                                    <ul className="space-y-6">
                                        {service.caseStudies.map((caseStudy, i) => (
                                            <li key={i} className="flex items-center gap-4 group/item">
                                                <span className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-[#C9A96A] group-hover/item:scale-150 transition-transform" />
                                                <span className="text-slate-600 font-bold uppercase tracking-[0.1em] text-xs md:text-sm">{caseStudy}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </Container>

            <div className="section-divider" />

            {/* H) Strong CTA */}
            <Reveal width="100%">
                <CTA serviceSlug={service.slug} />
            </Reveal>
        </main>
    );
}
