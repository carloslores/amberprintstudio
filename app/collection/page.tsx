import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { works } from "@/lib/works";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://amberprintstudio.com";

export const metadata: Metadata = {
  title: "Fossil-Inspired Sculptural Wall Art Collection",
  description:
    "Explore fossil-inspired sculptural wall panels handcrafted in mineral plaster and amber-toned resin for hospitality, residential, and curated interiors.",
  alternates: { canonical: "/collection" },
  openGraph: {
    type: "website",
    title: "Fossil-Inspired Sculptural Wall Art Collection | Amberprint Studio",
    description:
      "Explore sculptural wall panels inspired by ammonites, marine fossils, crustaceans, and prehistoric forms.",
    url: "/collection",
    siteName: "Amberprint Studio",
    images: [
      {
        url: "/images/snail-floor.png",
        alt: works[0].imageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fossil-Inspired Sculptural Wall Art Collection",
    description:
      "Sculptural wall panels handcrafted in mineral plaster and amber-toned resin.",
    images: [
      {
        url: "/images/snail-floor.png",
        alt: works[0].imageAlt,
      },
    ],
  },
};

export default function CollectionPage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Amberprint Studio Collection",
    itemListElement: works.map((work, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: work.title,
      url: `${siteUrl}/collection/${work.slug}`,
    })),
  };

  return (
    <>
      <Header />
      <main
        className="min-h-screen pt-32 pb-24 lg:pt-40 lg:pb-32"
        style={{ background: "var(--bg-primary, #fdfcf9)" }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
        />

        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <header className="mx-auto max-w-3xl text-center">
            <p
              className="mb-4 text-sm font-medium uppercase tracking-widest"
              style={{ color: "var(--amber-800, #92400e)", letterSpacing: "0.15em" }}
            >
              Selected Works
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl text-balance"
              style={{
                color: "var(--text-primary, #1c1917)",
                fontFamily: "var(--font-serif, 'Cormorant Garamond', serif)",
                fontWeight: 400,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
              }}
            >
              Fossil-Inspired Sculptural Wall Art
            </h1>
            <p
              className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed"
              style={{ color: "var(--text-secondary, #57534e)" }}
            >
              A collection of dimensional reliefs in mineral plaster and amber-toned
              resin, conceived for hospitality, residential, retail, and architectural
              interiors.
            </p>
          </header>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:mt-20">
            {works.map((work) => (
              <article
                key={work.slug}
                className="overflow-hidden rounded-3xl border border-stone-200 bg-white/70 shadow-sm"
              >
                <Link
                  href={`/collection/${work.slug}`}
                  className="group block"
                  aria-label={`View ${work.title}`}
                >
                  <div
                    className={`relative overflow-hidden ${
                      work.orientation === "horizontal"
                        ? "aspect-square sm:aspect-[4/3]"
                        : "aspect-square"
                    }`}
                  >
                    <Image
                      src={work.image}
                      alt={work.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-7 lg:p-8">
                    <h2
                      className="text-2xl lg:text-3xl"
                      style={{
                        color: "var(--text-primary, #1c1917)",
                        fontFamily: "var(--font-serif, 'Cormorant Garamond', serif)",
                        fontWeight: 400,
                      }}
                    >
                      {work.title}
                    </h2>
                    <p
                      className="mt-3 leading-relaxed"
                      style={{ color: "var(--text-secondary, #57534e)" }}
                    >
                      {work.description}
                    </p>
                    <span
                      className="mt-5 inline-flex text-sm font-semibold underline underline-offset-4"
                      style={{ color: "var(--amber-800, #92400e)" }}
                    >
                      View project
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <p
            className="mx-auto mt-12 max-w-3xl text-center text-sm leading-relaxed"
            style={{ color: "var(--text-secondary, #57534e)" }}
          >
            Images are conceptual visualizations. Final handcrafted pieces may present
            subtle variations in color, texture, and surface character.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
