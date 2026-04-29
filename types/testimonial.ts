export interface Testimonial {
    id: string;
    clientName: string;
    company?: string;
    rating: number;
    quote: string;
    projectSlug?: string;
    area?: string;
    videoUrl?: string;
    date: string;
}
