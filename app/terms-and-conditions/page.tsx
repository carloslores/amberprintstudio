import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import TermsAndConditions from "@/components/legal/terms-and-conditions-content";

export const metadata: Metadata = {
    title: "Terms and Conditions",
    description: "Terms governing use of the Amberprint Studio website, artwork, imagery, and project inquiries.",
    alternates: { canonical: "/terms-and-conditions" },
    openGraph: {
        type: "website",
        title: "Terms and Conditions | Amberprint Studio",
        description: "Terms governing use of the Amberprint Studio website, artwork, imagery, and project inquiries.",
        url: "/terms-and-conditions",
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
        title: "Terms and Conditions | Amberprint Studio",
        description: "Terms governing use of the Amberprint Studio website, artwork, imagery, and project inquiries.",
        images: [
            {
                url: "/opengraph-image",
                alt: "Amberprint Studio — fossil-inspired sculptural wall panels",
            },
        ],
    },
};

export default function TermsAndConditionsPage() {
    return (
        <>
            <Header />
            <main>
                <TermsAndConditions />
            </main>
            <Footer />
        </>
    );
}
