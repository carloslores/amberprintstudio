import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getWorkBySlug, works } from "@/lib/works";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://amberprintstudio.com";

type WorkPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work) return {};

  return {
    title: work.seoTitle,
    description: work.metaDescription,
    alternates: { canonical: `/collection/${work.slug}` },
    openGraph: {
      type: "article",
      title: `${work.seoTitle} | Amberprint Studio`,
      description: work.metaDescription,
      url: `/collection/${work.slug}`,
      siteName: "Amberprint Studio",
      images: [
        {
          url: work.image,
          alt: work.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: work.seoTitle,
      description: work.metaDescription,
      images: [
        {
          url: work.image,
          alt: work.imageAlt,
        },
      ],
    },
  };
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work) notFound();

  const relatedWorks = works.filter((item) => item.slug !== work.slug).slice(0, 3);
  const artworkJsonLd = {
    "@context": "https://schema.org",
    "@type": "VisualArtwork",
    "@id": `${siteUrl}/collection/${work.slug}#artwork`,
    name: work.title,
    description: work.description,
    url: `${siteUrl}/collection/${work.slug}`,
    image: `${siteUrl}${work.image}`,
    artMedium: work.material,
    creator: {
      "@id": `${siteUrl}/#organization`,
    },
  };

  return (
    <>
      <Header />
      <main
        className="min-h-screen pt-28 pb-24 lg:pt-36 lg:pb-32"
        style={{ background: "var(--bg-primary, #fdfcf9)" }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(artworkJsonLd) }}
        />

        <article className="mx-auto max-w-7xl px-6 lg:px-10">
          <Link
            href="/collection"
            className="inline-flex text-sm font-semibold underline underline-offset-4"
            style={{ color: "var(--amber-800, #92400e)" }}
          >
            ← Back to Collection
          </Link>

          <div className="mt-8 grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div
              className={`relative overflow-hidden rounded-3xl bg-stone-100 shadow-xl ${
                work.orientation === "horizontal" ? "aspect-[4/3]" : "aspect-square"
              }`}
            >
              <Image
                src={work.image}
                alt={work.imageAlt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </div>

            <div className="lg:sticky lg:top-32">
              <p
                className="text-sm font-medium uppercase tracking-widest"
                style={{ color: "var(--amber-800, #92400e)", letterSpacing: "0.15em" }}
              >
                Sculptural Wall Art
              </p>
              <h1
                className="mt-4 text-4xl sm:text-5xl text-balance"
                style={{
                  color: "var(--text-primary, #1c1917)",
                  fontFamily: "var(--font-serif, 'Cormorant Garamond', serif)",
                  fontWeight: 400,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.05,
                }}
              >
                {work.title}
              </h1>
              <p
                className="mt-6 text-lg leading-relaxed"
                style={{ color: "var(--text-secondary, #57534e)" }}
              >
                {work.description}
              </p>

              <dl className="mt-8 divide-y divide-stone-200 border-y border-stone-200">
                {[
                  ["Material", work.material],
                  ["Format", work.format],
                  ["Applications", work.applications],
                ].map(([label, value]) => (
                  <div key={label} className="grid gap-2 py-4 sm:grid-cols-[7rem_1fr]">
                    <dt className="text-sm font-semibold text-stone-900">{label}</dt>
                    <dd className="text-sm leading-relaxed text-stone-600">{value}</dd>
                  </div>
                ))}
              </dl>

              <Link href="/#contact" className="btn-primary mt-8">
                <span>Discuss This Piece</span>
              </Link>
            </div>
          </div>

          <div className="mx-auto mt-20 grid max-w-5xl gap-10 lg:mt-28 lg:grid-cols-2">
            <section>
              <h2
                className="text-3xl"
                style={{
                  color: "var(--text-primary, #1c1917)",
                  fontFamily: "var(--font-serif, 'Cormorant Garamond', serif)",
                  fontWeight: 400,
                }}
              >
                Concept and Form
              </h2>
              <p className="mt-4 leading-7 text-stone-600">{work.concept}</p>
            </section>
            <section>
              <h2
                className="text-3xl"
                style={{
                  color: "var(--text-primary, #1c1917)",
                  fontFamily: "var(--font-serif, 'Cormorant Garamond', serif)",
                  fontWeight: 400,
                }}
              >
                Production Approach
              </h2>
              <p className="mt-4 leading-7 text-stone-600">{work.production}</p>
            </section>
          </div>

          <aside className="mt-20 border-t border-stone-200 pt-14 lg:mt-28">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p
                  className="text-sm font-medium uppercase tracking-widest"
                  style={{ color: "var(--amber-800, #92400e)" }}
                >
                  Continue Exploring
                </p>
                <h2
                  className="mt-2 text-3xl lg:text-4xl"
                  style={{
                    color: "var(--text-primary, #1c1917)",
                    fontFamily: "var(--font-serif, 'Cormorant Garamond', serif)",
                    fontWeight: 400,
                  }}
                >
                  Related Works
                </h2>
              </div>
              <Link
                href="/collection"
                className="text-sm font-semibold underline underline-offset-4"
                style={{ color: "var(--amber-800, #92400e)" }}
              >
                View full collection
              </Link>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {relatedWorks.map((related) => (
                <Link
                  key={related.slug}
                  href={`/collection/${related.slug}`}
                  className="group overflow-hidden rounded-2xl border border-stone-200 bg-white/70"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={related.image}
                      alt={related.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                  <h3 className="p-5 text-lg font-medium text-stone-900">{related.title}</h3>
                </Link>
              ))}
            </div>
          </aside>

          <p className="mt-10 text-center text-xs leading-5 text-stone-500">
            Images are conceptual visualizations. Final handcrafted pieces may present
            subtle variations in color, texture, and surface character.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
