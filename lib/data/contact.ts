import { ContactData } from "@/types/contact";

export const CONTACT_DATA: ContactData = {
    company: {
        address: "Elite Towers, 14th Floor, Bandra Kurla Complex, Mumbai, Maharashtra 400051",
        phone: "+91 800 123 4567",
        email: "projects@elitecontractors.in",
        workingHours: "Mon - Sat: 9:00 AM - 7:00 PM"
    },
    budgetRanges: [
        "Under 5L",
        "5L - 15L",
        "15L - 50L",
        "50L+"
    ],
    timelineOptions: [
        "Immediate",
        "1 - 3 Months",
        "3 - 6 Months",
        "Planning Phase"
    ],
    serviceOptions: [
        "Construction",
        "Interior",
        "Renovation",
        "Painting",
        "Waterproofing",
        "Civil Works",
        "Turnkey Projects",
        "Industrial Projects"
    ]
};
