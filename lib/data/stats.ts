export interface Stat {
    id: string;
    label: string;
    value: number;
    suffix: string;
}

export const STATS: Stat[] = [
    { id: "s1", label: "Years Experience", value: 25, suffix: "+" },
    { id: "s2", label: "Projects Delivered", value: 500, suffix: "+" },
    { id: "s3", label: "Happy Clients", value: 1000, suffix: "+" },
    { id: "s4", label: "Satisfaction", value: 98, suffix: "%" },
];
