import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingContactBar from "@/components/ui/FloatingContactBar";
import StructuredData from "@/components/seo/StructuredData";
import LeadPopup from "@/components/LeadPopup";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "ConstructionCompany",
    name: "Singhs Interiors",
    image: "https://elitecontractors.com/logo/logo-final.png",
    "@id": "https://elitecontractors.com",
    url: "https://elitecontractors.com",
    telephone: "+91 800 123 4567",
    priceRange: "₹₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shop No. 5, Malad Link Road",
      addressLocality: "Mumbai",
      postalCode: "400064",
      addressRegion: "MH",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 19.1827,
      longitude: 72.8401,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "20:00",
      },
    ],
    sameAs: [
      "https://facebook.com/singhsinteriors",
      "https://instagram.com/singhsinteriors",
      "https://linkedin.com/company/singhsinteriors",
    ],
    areaServed: [
      { "@type": "City", name: "Mumbai" },
      { "@type": "City", name: "Navi Mumbai" },
      { "@type": "City", name: "Thane" },
    ],
    description:
      "Premium construction, interior architecture, and renovation services across Mumbai for 25+ years.",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "General Contracting & Interior Architecture",
    provider: {
      "@type": "LocalBusiness",
      name: "Singhs Interiors",
    },
    areaServed: [
      { "@type": "City", name: "Mumbai" },
      { "@type": "City", name: "Navi Mumbai" },
      { "@type": "City", name: "Thane" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Construction & Interior Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Civil Construction",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Interior Architecture",
          },
        },
      ],
    },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <StructuredData data={businessSchema} />
      <StructuredData data={serviceSchema} />
      <Navbar />
      <main className="flex-1 flex flex-col">
        {children}
      </main>
      <Footer />
      <FloatingContactBar />
      <LeadPopup />
    </div>
  );
}
