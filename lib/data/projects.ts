import { Project } from "@/types/project";

export const PROJECTS_DATA: Project[] = [
    {
        slug: "the-vertex-tower",
        areaSlug: "bandra-west",
        title: "The Vertex Tower",
        category: "Construction",
        location: "Downtown Metropolis",
        budget: "$45M",
        duration: "32 Months",
        beforeImage: "/images/construction-site-interior.webp",
        afterImage: "/images/3d-rendering-modern-luxury-hotel-office-reception-meeting-lounge.webp",
        thumbnail: "/images/3d-rendering-modern-luxury-hotel-office-reception-meeting-lounge.webp",
        description: "A state-of-the-art 45-story commercial skyscraper featuring sustainable energy management systems, premium glass facades, and modular interior corporate suites. Engineered to maintain LEED Platinum certification standards.",
        testimonial: {
            client: "Global Horizons Investment Group",
            quote: "Elite Contractors delivered an absolute landmark. Their meticulous attention to structural integrity and architectural vision was beyond ordinary.",
            rating: 5
        },
        caseStudy: {
            challenge: "Constructing a 45-story skyscraper in a densely populated business district required extreme structural precision and minimal noise pollution during work hours.",
            solution: "Our engineering team utilized advanced pre-fabricated structural modules and a night-time parallel construction workflow to maximize progress without disturbing the neighboring commercial hubs.",
            outcome: "The project was delivered 2 months ahead of schedule, achieving a LEED Platinum certification for energy efficiency, a first in the region."
        },
        pdf: "/downloads/vertex-tower-case-study.pdf"
    },
    {
        slug: "oakland-estates",
        areaSlug: "andheri-west",
        title: "Oakland Estates",
        category: "Interior",
        location: "Corporate Heights",
        budget: "$8.5M",
        duration: "14 Months",
        beforeImage: "/images/3d-room-interior-with-classic-design-furniture.webp",
        afterImage: "/images/beautiful-kitchen-interior-design.webp",
        thumbnail: "/images/beautiful-kitchen-interior-design.webp",
        description: "A sweeping interior redesign of several corporate penthouses. We featured smart home tech, imported Italian marble, and bespoke millwork for an executive environment.",
        testimonial: {
            client: "Jonathan Oakland",
            quote: "They managed to keep the soul of our 100-year-old home while giving us a futuristic, deeply luxurious sanctuary.",
            rating: 5
        },
        caseStudy: {
            challenge: "Integrating modern home automation and luxury fittings into a 100-year-old structural frame without compromising heritage integrity.",
            solution: "We implemented a custom structural reinforcement plan using carbon-fiber wrapping and hidden conduit systems to house advanced IoT architecture.",
            outcome: "A seamless transition from historic exterior to futuristic luxury interior, increasing property value by 45% post-renovation."
        }
    },
    {
        slug: "lumina-headquarters",
        areaSlug: "lower-parel",
        title: "Lumina Corporate Headquarters",
        category: "Interior",
        location: "Lower Parel",
        budget: "$18M",
        duration: "14 Months",
        beforeImage: "/images/gabriel-alenius-cPDTVCsbxcg-unsplash.webp",
        afterImage: "/images/3d-rendering-modern-luxury-hotel-office-reception-meeting-lounge (1).webp",
        thumbnail: "/images/3d-rendering-modern-luxury-hotel-office-reception-meeting-lounge (1).webp",
        description: "A visionary 150,000 sq.ft ultra-luxury corporate headquarters. Defined by its multi-story vertical gardens, Italian marble flooring, and entirely custom-crafted glass partition systems.",
        testimonial: {
            client: "Lumina Tech Group",
            quote: "An absolute masterpiece of modern workspace design. Elite Contractors brought our vision to life with zero compromises on quality.",
            rating: 5
        },
        caseStudy: {
            challenge: "Transforming an old, industrial mill structure into a Class-A, LEED-certified modern corporate hub while preserving the heritage brick facade.",
            solution: "We engineered a sophisticated 'building-within-a-building' structural frame to support the new glass and steel interior without bearing load on the historic exterior.",
            outcome: "Award-winning commercial space delivered on schedule, praised for perfectly balancing industrial heritage with ultra-modern corporate luxury."
        }
    },
    {
        slug: "sunset-villa",
        areaSlug: "bandra-west",
        title: "Executive Suites Renovation",
        category: "Renovation",
        location: "Coastal Park",
        budget: "$3.2M",
        duration: "8 Months",
        beforeImage: "/images/ai-generated-modern-styled-entryway.webp",
        afterImage: "/images/3d-rendering-white-minimal-kitchen-with-wood-decoration.webp",
        thumbnail: "/images/3d-rendering-white-minimal-kitchen-with-wood-decoration.webp",
        description: "Complete exterior and structural renovation of a luxury corporate villa. Added advanced waterproofing, reinforced foundation pillars, and a modern glass-edge infinity pool.",
        testimonial: {
            client: "The Martinez Executive Group",
            quote: "Not only did they rescue our sinking foundation, the finished aesthetic is breathtaking. Phenomenal work.",
            rating: 5
        },
        caseStudy: {
            challenge: "The existing structure suffered from significant foundation sinking due to coastal soil erosion and water ingress.",
            solution: "We executed a pressure-grouting soil stabilization process and installed helical piers to lift and stabilize the foundation before proceeding with luxury finishes.",
            outcome: "Fully stabilized structure with an life-expectancy increase of 50 years, featuring all requested premium amenities."
        }
    },
    {
        slug: "harbor-freight-logistics",
        title: "Premium Logistics Hub",
        category: "Industrial",
        location: "Seaport Industrial",
        budget: "$15M",
        duration: "12 Months",
        beforeImage: "/images/outdoor-sofa-with-beige-cushions-coffee-table-front-restaurant-window.webp",
        afterImage: "/images/outdoor-sofa-with-beige-cushions-coffee-table-front-restaurant-window.webp",
        thumbnail: "/images/outdoor-sofa-with-beige-cushions-coffee-table-front-restaurant-window.webp",
        description: "A sprawling coastal logistics warehouse designed for heavy maritime freight transfer. Constructed with specialized anti-corrosive metals.",
        testimonial: {
            client: "Pacific Shipping Co.",
            quote: "Punctual, heavy-duty, and exactly to spec. They understand the harsh realities of coastal industrial building.",
            rating: 4.5
        },
        caseStudy: {
            challenge: "The project location in a high-salinity coastal zone meant standard steel structures would corrode within years.",
            solution: "Used marine-grade stainless steel reinforcements and advanced thermal-spray aluminum (TSA) coatings for all exposed metal frameworks.",
            outcome: "A durable, industrial-scale logistics hub with zero maintenance required for the first 15 years of coastal operation."
        }
    },
    {
        slug: "heritage-plaza",
        title: "Grand Entrance RESTORATION",
        category: "Renovation",
        location: "City Center",
        budget: "$12M",
        duration: "24 Months",
        beforeImage: "/images/modern-styled-entryway.webp",
        afterImage: "/images/modern-styled-entryway.webp",
        thumbnail: "/images/modern-styled-entryway.webp",
        description: "Painstaking restoration of a historic grand entrance. Involved upgrading underground tunnels and reinforcing century-old brickwork.",
        testimonial: {
            client: "City Council",
            quote: "A masterclass in urban restoration. They handled the logistics of city center construction with unbelievable professionalism.",
            rating: 5
        },
        caseStudy: {
            challenge: "Restoring 100-year-old brickwork and underground access tunnels while keeping the main city center accessible to thousands of pedestrians daily.",
            solution: "Developed a modular shoring system that allowed for subterranean work without closing the surface-level pedestrian paths.",
            outcome: "Seamless restoration delivered with zero accidents and minimal disruption to the city's commercial flow."
        }
    },
    {
        slug: "skyline-bistro",
        areaSlug: "worli",
        title: "Skyline Gourmet Bistro",
        category: "Restaurant",
        location: "Worli, Mumbai",
        budget: "$1.8M",
        duration: "6 Months",
        beforeImage: "/images/outdoor-sofa-with-beige-cushions-coffee-table-front-restaurant-window.webp",
        afterImage: "/images/outdoor-sofa-with-beige-cushions-coffee-table-front-restaurant-window.webp",
        thumbnail: "/images/outdoor-sofa-with-beige-cushions-coffee-table-front-restaurant-window.webp",
        description: "A high-end restaurant fit-out featuring a bespoke bar, industrial kitchen integration, and atmospheric lighting design. The project required specialized ventilation and acoustic treatments.",
        testimonial: {
            client: "Chef Marco V.",
            quote: "The attention to detail in the kitchen workflow and the dining ambiance is exactly what a high-end bistro needs.",
            rating: 5
        },
        caseStudy: {
            challenge: "Installing a heavy-duty industrial ventilation system in a high-rise building with limited vertical ducting space.",
            solution: "Engineered a horizontal high-velocity exhaust system with advanced carbon filtering to manage smoke and odors at the floor level.",
            outcome: "Award-winning restaurant space with perfect air quality and a unique acoustic profile for intimate dining."
        }
    },
    {
        slug: "palazzo-residences",
        areaSlug: "malabar-hill",
        title: "The Palazzo Residences",
        category: "Residential",
        location: "Malabar Hill",
        budget: "$12.5M",
        duration: "18 Months",
        beforeImage: "/images/ai-generated-modern-styled-entryway.webp",
        afterImage: "/images/3d-rendering-white-minimal-kitchen-with-wood-decoration.webp",
        thumbnail: "/images/3d-rendering-white-minimal-kitchen-with-wood-decoration.webp",
        description: "Luxury residential complex featuring 12 boutique apartments with private pools, smart home automation, and sustainable landscape architecture.",
        testimonial: {
            client: "Asha K. Developments",
            quote: "Elite Contractors redefined luxury residential living for this project. The finish quality is unmatched in the city.",
            rating: 5
        },
        caseStudy: {
            challenge: "The client required all 12 boutique apartments to be delivered with zero visible plumbing or electrical conduits, maintaining a minimalist aesthetic.",
            solution: "Implemented a 'Hidden Utility' design phase, using double-skin walls and integrated floor-joist routing for all MEP services.",
            outcome: "Pristine, minimalist residential spaces that set a new benchmark for luxury interiors in Malabar Hill."
        }
    },
    {
        slug: "imperial-flooring-works",
        areaSlug: "andheri-east",
        title: "Imperial Corporate Flooring",
        category: "Interior",
        location: "Andheri East",
        budget: "$1.2M",
        duration: "3 Months",
        beforeImage: "/images/tiler-working-renovation-apartment.webp",
        afterImage: "/images/tiler-working-renovation-apartment (1).webp",
        thumbnail: "/images/tiler-working-renovation-apartment (1).webp",
        description: "A comprehensive flooring and structural remodeling project for a major corporate office. We executed seamless epoxy finishes, imported Italian marble tiling, and raised access floors for advanced IT routing.",
        testimonial: {
            client: "Global Logistics Ltd",
            quote: "The flooring transformation completely changed our workspace dynamics. Brilliant craftsmanship and flawless execution.",
            rating: 5
        },
        caseStudy: {
            challenge: "Replacing old, uneven concrete subfloors across a 40,000 sq ft office without disrupting the main structural pillars.",
            solution: "Utilized self-leveling laser technology and high-performance rapid-cure polymers to create a perfectly flat base before laying premium marble and engineered wood.",
            outcome: "Delivered a spotless, highly durable premium flooring solution that brought immediate brightness and luxury to the office."
        }
    },
    {
        slug: "villa-artisan-painting",
        areaSlug: "powai",
        title: "Artisan Villa Painting & Decor",
        category: "Residential",
        location: "Powai",
        budget: "$400K",
        duration: "2 Months",
        beforeImage: "/images/pexels-artbovich-6315808.webp",
        afterImage: "/images/pexels-artbovich-6580416.webp",
        thumbnail: "/images/pexels-artbovich-6580416.webp",
        description: "A luxury interior painting and wall decoration project for a lakeside villa. Featuring hand-applied Venetian plaster, metallic accent walls, and weatherproof, fade-resistant exterior coatings.",
        testimonial: {
            client: "The Desai Family",
            quote: "Every wall feels like a piece of art. The attention to detail in the texturing and color gradients is absolutely stunning.",
            rating: 5
        },
        caseStudy: {
            challenge: "The villa was highly exposed to the lakeside humidity, risking rapid peeling and mold growth on interior walls.",
            solution: "Applied advanced anti-fungal epoxy primers and top-tier moisture-resistant elastomeric paints, combined with custom aesthetic texturing.",
            outcome: "A deeply vibrant, protective, and luxurious aesthetic that carries a 15-year guarantee against fading and peeling."
        }
    },
    {
        slug: "sky-garden-grillwork",
        areaSlug: "santacruz-west",
        title: "Sky Garden Metal & Glass Work",
        category: "Interior",
        location: "Santacruz West",
        budget: "$650K",
        duration: "4 Months",
        beforeImage: "/images/modern-styled-entryway.webp",
        afterImage: "/images/ai-generated-modern-styled-entryway.webp",
        thumbnail: "/images/ai-generated-modern-styled-entryway.webp",
        description: "Custom fabrication and installation of architectural metal grills, modern safety railings, and frameless glass partitions for a multi-level luxury penthouse.",
        testimonial: {
            client: "K. Mehta",
            quote: "Our balconies and staircases look incredibly modern. The custom grillwork perfectly blends safety with high-end luxury.",
            rating: 5
        },
        caseStudy: {
            challenge: "Installing massive, heavy structural safety grills and frameless glass panels on the 32nd floor with extremely high wind loads.",
            solution: "Engineered aerodynamic, marine-grade stainless steel grill designs anchored directly into the core concrete slab, alongside tempered laminated glass.",
            outcome: "A stunning, highly secure modern interior perimeter that maximizes the ocean view while exceeding local safety codes."
        }
    }
];

export function getProjectBySlug(slug: string): Project | undefined {
    return PROJECTS_DATA.find((p) => p.slug === slug);
}
