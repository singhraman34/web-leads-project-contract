import { Service } from "@/types/service";

export const SERVICES_DATA: Service[] = [
    {
        slug: "construction",
        title: "Construction",
        shortDescription: "Ground-up construction for enterprise commercial buildings and luxury residential structures.",
        overview: "Our primary construction services offer end-to-end structural development. Using advanced engineering, premium materials, and meticulous safety protocols, we deliver landmark properties that stand the test of time and elevate the surrounding environment.",
        process: [
            "Site Analysis & Preparation",
            "Foundation & Structural Framing",
            "Core MEP (Mechanical, Electrical, Plumbing) Installation",
            "Exterior & Interior Finishing",
            "Final Inspection & Handover"
        ],
        costRange: "$5M - $50M+",
        timeline: "12 - 36 Months",
        faqs: [
            { question: "Do you handle zoning and city permits?", answer: "Yes, our dedicated compliance team handles all municipal zoning, permitting, and regulatory approvals." },
            { question: "What sustainability standards do you follow?", answer: "We build to LEED certification standards, prioritizing energy efficiency and sustainable materials." }
        ],
        caseStudies: ["The Vertex Tower", "Oakland Estates"],
        category: "Core Build",
        image: "/images/3d-rendering-modern-luxury-hotel-office-reception-meeting-lounge.webp"
    },
    {
        slug: "interior",
        title: "Interior Architecture",
        shortDescription: "Bespoke interior design and structural modification for luxury spaces.",
        overview: "Transforming empty shells into stunning, functional environments. Our interior architecture service blends aesthetic brilliance with ergonomic practicality, perfect for corporate headquarters and high-end residences.",
        process: [
            "Spatial Planning & 3D Rendering",
            "Material Selection & Procurement",
            "Custom Millwork & Carpentry",
            "Lighting & Acoustic Design",
            "Styling & Furnishing"
        ],
        costRange: "$500K - $5M+",
        timeline: "3 - 9 Months",
        faqs: [
            { question: "Can you work with existing architectural plans?", answer: "Absolutely. We often collaborate with external architects to bring their interior visions to life." },
            { question: "Do you supply custom furniture?", answer: "Yes, we work with master craftsmen globally to source and build bespoke furniture pieces." }
        ],
        caseStudies: ["Metro Tech Hub Interior", "Sunset Villa Interiors"],
        category: "Design",
        image: "/images/3d-room-interior-with-classic-design-furniture.webp"
    },
    {
        slug: "renovation",
        title: "Renovation & Remodeling",
        shortDescription: "Comprehensive modernization of existing commercial and residential properties.",
        overview: "Breathe new life into aging structures. We specialize in complex structural renovations that preserve architectural heritage while integrating state-of-the-art modern amenities and safety standards.",
        process: [
            "Structural Integrity Assessment",
            "Strategic Demolition",
            "Modernization (HVAC, Electrical, Plumbing)",
            "Architectural Adjustments",
            "Premium Refinishing"
        ],
        costRange: "$250K - $3M+",
        timeline: "4 - 12 Months",
        faqs: [
            { question: "Can the building remain operational during renovation?", answer: "For commercial projects, we can implement phased renovations to allow continued partial operations." },
            { question: "Do you manage historic preservation?", answer: "Yes, we have experts in restoring and preserving historically significant architectural elements." }
        ],
        caseStudies: ["Heritage Plaza Restoration", "Grand Hotel Revamp"],
        category: "Modernization",
        image: "/images/tiler-working-renovation-apartment.webp"
    },
    {
        slug: "all-type-painting",
        title: "All Type Painting",
        shortDescription: "Enterprise-grade exterior and interior coating solutions.",
        overview: "More than just aesthetics, our painting and coating services provide crucial protection against the elements. We utilize industrial-grade, eco-friendly paints that ensure longevity, vibrancy, and structural protection.",
        process: [
            "Surface Preparation & Repair",
            "Priming & Sealing",
            "Advanced Coating Application",
            "Detailing & Texturing",
            "Quality Assurance Inspection"
        ],
        costRange: "$50K - $500K+",
        timeline: "2 - 8 Weeks",
        faqs: [
            { question: "Do you provide weather-resistant exterior coatings?", answer: "Yes, we use proprietary weatherproof seals designed to withstand severe coastal and urban climates." },
            { question: "Are your paints eco-friendly?", answer: "We strictly utilize low-VOC and zero-VOC paints to ensure indoor air quality and environmental safety." }
        ],
        caseStudies: ["Seaside Condominiums", "Corporate Park Repaint"],
        category: "Finishing",
        image: "/images/pexels-artbovich-6315808.webp"
    },
    {
        slug: "waterproofing",
        title: "Advanced Waterproofing",
        shortDescription: "High-tech moisture protection and structural sealing.",
        overview: "Water damage is the leading cause of structural decay. Our advanced waterproofing services utilize modern chemical treatments and barrier technologies to protect foundations, roofs, and basements securely.",
        process: [
            "Moisture Mapping & Leak Detection",
            "Crack Injection & Sealing",
            "Membrane Application",
            "Drainage Optimization",
            "Flood Testing"
        ],
        costRange: "$30K - $300K+",
        timeline: "1 - 4 Weeks",
        faqs: [
            { question: "Do you offer warranties on waterproofing?", answer: "Yes, we offer 10-to-25-year structural warranties depending on the specific membrane systems applied." },
            { question: "Can you fix active basement leaks?", answer: "Yes, we utilize high-pressure polyurethane injections to stop active leaks instantly." }
        ],
        caseStudies: ["Deep Foundation Sealing", "Coastal Resort Roof Prep"],
        category: "Protection",
        image: "/images/pexels-pixabay-276528.webp"
    },
    {
        slug: "civil-works",
        title: "Civil Works",
        shortDescription: "Heavy infrastructure, earthworks, and foundational engineering.",
        overview: "The backbone of any major development. Our civil works division handles massive earthmoving, structural grading, retaining walls, and subterranean utility installations with precision and scale.",
        process: [
            "Geotechnical Surveying",
            "Excavation & Earthmoving",
            "Underground Utilities Installation",
            "Retaining Walls & Shoring",
            "Concrete Flatwork & Paving"
        ],
        costRange: "$2M - $20M+",
        timeline: "6 - 18 Months",
        faqs: [
            { question: "Do you handle public infrastructure projects?", answer: "Yes, we partner with municipal governments for roadworks, bridging, and public utility routing." },
            { question: "How do you manage site run-off?", answer: "We implement advanced SWPPP (Stormwater Pollution Prevention Plan) measures on every civil site." }
        ],
        caseStudies: ["Valley Transport Hub", "Highland Retaining System"],
        category: "Infrastructure",
        image: "/images/gabriel-alenius-cPDTVCsbxcg-unsplash.webp"
    },
    {
        slug: "turnkey-projects",
        title: "Turnkey Projects",
        shortDescription: "From blank canvas to fully operational handover.",
        overview: "The ultimate hassle-free solution. We take complete ownership of the project lifecycle—from conceptual design and land acquisition to construction, furnishing, and operational handover.",
        process: [
            "Conceptual Design & Feasibility",
            "Permitting & Financing Consultation",
            "Construction & Execution",
            "Furnishing & Technology Integration",
            "Operational Handover & Training"
        ],
        costRange: "$10M - $100M+",
        timeline: "18 - 48 Months",
        faqs: [
            { question: "What is included in a turnkey project?", answer: "Absolutely everything. You provide the vision and budget, and we deliver a facility ready for day-one operations." },
            { question: "Do you handle the interior furnishing as well?", answer: "Yes, our turnkey service includes complete interior design, furnishing, and IT infrastructure setup." }
        ],
        caseStudies: ["Global Bank HQ", "Luxury Resort & Spa"],
        category: "Comprehensive",
        image: "/images/ai-generated-modern-styled-entryway.webp"
    },
    {
        slug: "industrial",
        title: "Industrial Projects",
        shortDescription: "Heavy-duty facilities, warehouses, and manufacturing plants.",
        overview: "Building the engines of commerce. We construct high-capacity industrial facilities engineered for heavy machinery, specialized logistics, and optimal operational workflow.",
        process: [
            "Logistics & Workflow Planning",
            "Heavy-Duty Foundation Casting",
            "Steel Superstructure Erection",
            "Specialized MEP & HVAC Integration",
            "Industrial Flooring & Safety Compliance"
        ],
        costRange: "$5M - $50M+",
        timeline: "9 - 24 Months",
        faqs: [
            { question: "Can you build cleanrooms for manufacturing?", answer: "Yes, we have specialized teams experienced in ISO-certified cleanroom construction for tech and pharma." },
            { question: "Do you install heavy machinery foundations?", answer: "Yes, we engineer and pour isolated, vibration-dampening foundations for heavy industrial equipment." }
        ],
        caseStudies: ["Automotive Assembly Plant", "Regional Logistics Hub"],
        category: "Core Build",
        image: "/images/3d-rendering-modern-luxury-hotel-office-reception-meeting-lounge.webp"
    }
];

export function getServiceBySlug(slug: string): Service | undefined {
    return SERVICES_DATA.find((s) => s.slug === slug);
}
