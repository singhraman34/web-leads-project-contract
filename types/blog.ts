export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    content: string; // Will be split by \n\n into paragraphs for safe rendering
    category: string;
    publishDate: string;
    author: string;
    featuredImage: string;
    tags: string[];
}
