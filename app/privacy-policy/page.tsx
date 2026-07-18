import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import PrivacyPolicy from "@/components/legal/privacy-policy-content";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "How Amberprint Studio collects, uses, and protects information submitted through this website.",
    alternates: { canonical: "/privacy-policy" },
    openGraph: {
        type: "website",
        title: "Privacy Policy | Amberprint Studio",
        description: "How Amberprint Studio collects, uses, and protects information submitted through this website.",
        url: "/privacy-policy",
        siteName: "Amberprint Studio",
        images: [
            {
                url: "/opengraph-image",
                alt: "Amberprint Studio — fossil-inspired sculptural wall panels",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Privacy Policy | Amberprint Studio",
        description: "How Amberprint Studio collects, uses, and protects information submitted through this website.",
        images: [
            {
                url: "/opengraph-image",
                alt: "Amberprint Studio — fossil-inspired sculptural wall panels",
            },
        ],
    },
};

export default function PrivacyPolicyPage() {
    return (
        <>
            <Header />
            <main>
                <PrivacyPolicy />
            </main>
            <Footer />
        </>
    );
}
