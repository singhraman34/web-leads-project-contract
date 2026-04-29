export type ProjectCategory = "Construction" | "Interior" | "Renovation" | "Industrial" | "Restaurant" | "Residential";

export interface ProjectTestimonial {
    client: string;
    quote: string;
    rating: number; /* out of 5 */
}

export interface ProjectCaseStudy {
    challenge: string;
    solution: string;
    outcome: string;
}

export interface Project {
    slug: string;
    areaSlug?: string;
    title: string;
    category: ProjectCategory;
    location: string;
    budget: string;
    duration: string;
    beforeImage: string;
    afterImage: string;
    thumbnail: string;
    testimonial: ProjectTestimonial;
    description: string;
    caseStudy?: ProjectCaseStudy;
    pdf?: string;
}
