export interface TimelineEvent {
    year: string;
    title: string;
    description: string;
}

export interface Milestone {
    metric: string;
    label: string;
}

export interface Certification {
    title: string;
    description: string;
}

export interface FounderData {
    name: string;
    title: string;
    message: string;
    image: string;
    yearsOfExperience: string;
}

export interface AboutData {
    founder: FounderData;
    journeyTimeline: TimelineEvent[];
    milestones: Milestone[];
    certifications: Certification[];
    safetyCompliance: string[];
}
