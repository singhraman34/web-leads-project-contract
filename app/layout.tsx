import { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://elitecontractors.com"),
  title: {
    template: "%s | Singhs Interiors",
    default: "Construction & Interior Contractors in Mumbai | 25+ Years Experience",
  },
  description:
    "Premium construction, interior architecture, and renovation services across Mumbai. 500+ projects delivered with engineering precision.",
  keywords: [
    "Civil Contractor Mumbai",
    "Interior Contractor Mumbai",
    "Construction Company Mumbai",
    "Renovation Services Mumbai",
    "Luxury Interiors Mumbai",
    "Commercial Renovation India",
  ],
  openGraph: {
    title: "Construction & Interior Contractors in Mumbai | 25+ Years Experience",
    description:
      "Premium construction, interior architecture, and renovation services across Mumbai. 500+ projects delivered with engineering precision.",
    url: "https://elitecontractors.com",
    siteName: "Singhs Interiors",
    images: [
      {
        url: "/images/3d-rendering-modern-luxury-hotel-office-reception-meeting-lounge.jpg",
        width: 1200,
        height: 630,
        alt: "Singhs Interiors - Premium Construction and Luxury Interior Design Projects in Mumbai",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction & Interior Contractors in Mumbai | 25+ Years Experience",
    description:
      "Premium construction, interior architecture, and renovation services across Mumbai. 500+ projects delivered with engineering precision.",
    images: ["/images/3d-rendering-modern-luxury-hotel-office-reception-meeting-lounge.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col`}>{children}</body>
    </html>
  );
}
