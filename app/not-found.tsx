import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The requested page could not be found on Amberprint Studio.",
  alternates: {
    canonical: undefined,
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main
        className="flex min-h-[72vh] items-center justify-center px-6 pt-28 pb-20 text-center"
        style={{ background: "var(--bg-primary, #fdfcf9)" }}
      >
        <div className="mx-auto max-w-2xl">
          <p
            className="text-sm font-medium uppercase tracking-widest"
            style={{ color: "var(--amber-800, #92400e)", letterSpacing: "0.15em" }}
          >
            Error 404
          </p>
          <h1
            className="mt-4 text-4xl sm:text-5xl lg:text-6xl"
            style={{
              color: "var(--text-primary, #1c1917)",
              fontFamily: "var(--font-serif, 'Cormorant Garamond', serif)",
              fontWeight: 400,
              letterSpacing: "-0.03em",
            }}
          >
            This page has moved beyond the collection.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-stone-600">
            The address may be outdated or incomplete. Continue exploring the collection
            or return to the studio homepage.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/collection" className="btn-primary">
              <span>View Collection</span>
            </Link>
            <Link href="/" className="btn-secondary">
              <span>Return Home</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
