export interface ServiceFAQ {
    question: string;
    answer: string;
}

export interface Service {
    slug: string;
    title: string;
    shortDescription: string;
    overview: string;
    process: string[];
    costRange: string;
    timeline: string;
    faqs: ServiceFAQ[];
    caseStudies: string[];
    category: string;
    image?: string;
}
