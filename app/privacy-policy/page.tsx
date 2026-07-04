import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import PrivacyPolicy from "@/components/legal/privacy-policy-content";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "How Amberprint Studio collects, uses, and protects information submitted through this website.",
    alternates: { canonical: "/privacy-policy" },
    openGraph: {
        title: "Privacy Policy | Amberprint Studio",
        url: "/privacy-policy",
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
