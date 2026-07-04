import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import TermsAndConditions from "@/components/legal/terms-and-conditions-content";

export const metadata: Metadata = {
    title: "Terms and Conditions",
    description: "Terms governing use of the Amberprint Studio website, artwork, imagery, and project inquiries.",
    alternates: { canonical: "/terms-and-conditions" },
    openGraph: {
        title: "Terms and Conditions | Amberprint Studio",
        url: "/terms-and-conditions",
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
