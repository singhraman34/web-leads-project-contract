export interface CompanyContact {
    address: string;
    phone: string;
    email: string;
    workingHours: string;
}

export interface ContactData {
    company: CompanyContact;
    budgetRanges: string[];
    timelineOptions: string[];
    serviceOptions: string[];
}
