import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Service Areas | Top Contractor in Mumbai, Navi Mumbai & Thane",
    description: "Singhs Interiors provides premium construction and interior services across Mumbai, including BKC, Worli, Malad, Thane, and Navi Mumbai.",
};

export default function AreasLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
