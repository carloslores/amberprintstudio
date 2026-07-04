"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { track } from "@vercel/analytics";

const works = [
  {
    title: "Ammonite Relief",
    description: "Bas-relief wall tile made with Ultracal plaster and amber resin. Designed for modular wall compositions or framed wall art.",
    image: "/images/snail-floor.png",
    details: ["Ultracal plaster + amber resin", "Modular or framed format", "Hospitality and residential"],
  },
  {
    title: "Marine Fossil Series",
    description: "A collection of fossil-inspired reliefs featuring marine organisms, developed as individual panels or repeatable decorative elements.",
    image: "/images/fossil-relics.png",
    details: ["Marine fossil relief series", "Repeatable panel system", "Feature walls and retail"],
  },
  {
    title: "Crustacean Study",
    description: "High-detail sculptural relief exploring fossilized crustacean forms, suitable for vertical wall art applications.",
    image: "/images/crustaceran.png",
    orientation: "horizontal",
    details: ["High-detail sculptural relief", "Horizontal panel format", "Statement wall applications"],
  },
  {
    title: "Prehistoric Fossil Series – Dinosaur Skull",
    description: "A sculptural wall relief exploring the anatomy and presence of prehistoric fossils.",
    image: "/images/dino.png",
    orientation: "horizontal",
    details: ["Prehistoric fossil study", "Horizontal panel format", "Hospitality and feature installations"],
  },
];

export function CollectionSection() {
  const ref = useScrollAnimation({ staggerDelay: 0.2 });

  return (
    <section
      id="collection"
      className="py-20 lg:py-32"
      style={{ background: "var(--bg-primary, #fdfcf9)" }}
    >
      {/* Scoped styles for collection hover effects */}
      <style>{`
        .coll-card {
          position: relative;
          overflow: hidden;
          border-radius: 20px;
          cursor: default;
          background: var(--bg-secondary, #faf8f5);
          transition: all 1s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .coll-media {
          position: relative;
          overflow: hidden;
        }
        .coll-card:hover {
          transform: translateY(-16px) scale(1.02);
          box-shadow: 0 35px 70px -18px rgba(28, 25, 23, 0.18);
        }
        .coll-card .coll-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 1.4s cubic-bezier(0.23, 1, 0.32, 1);
          filter: saturate(0.9) contrast(1.02);
        }
        .coll-card:hover .coll-img {
          transform: scale(1.12);
          filter: saturate(1.05) contrast(1.05);
        }
        .coll-overlay {
          position: relative;
          background: var(--stone-900, #1c1917);
          padding: 1.5rem;
          transform: translateY(0);
          opacity: 1;
          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
          backdrop-filter: blur(12px) saturate(180%);
          -webkit-backdrop-filter: blur(12px) saturate(180%);
        }
        .coll-overlay h3 {
          font-family: var(--font-serif, 'Cormorant Garamond', serif);
          font-size: 1.75rem;
          color: white;
          margin-bottom: 0.5rem;
          font-weight: 400;
          letter-spacing: -0.02em;
          transform: translateY(0);
          opacity: 1;
          transition: all 0.7s cubic-bezier(0.23, 1, 0.32, 1) 0.1s;
        }
        .coll-overlay p {
          color: rgba(255, 255, 255, 0.85);
          font-size: 0.9375rem;
          line-height: 1.6;
          max-width: 90%;
          transform: translateY(0);
          opacity: 1;
          transition: all 0.7s cubic-bezier(0.23, 1, 0.32, 1) 0.2s;
        }
        .coll-details {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.8125rem;
          line-height: 1.5;
          margin-top: 0.75rem;
        }
        .coll-inquire {
          color: white;
          display: inline-flex;
          margin-top: 1rem;
          font-size: 0.875rem;
          font-weight: 600;
          text-decoration: underline;
          text-underline-offset: 4px;
        }
        @media (hover: hover) and (pointer: fine) and (min-width: 641px) {
          .coll-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 3rem 2rem 2rem;
            background: linear-gradient(to top,
              rgba(28, 25, 23, 0.95) 0%,
              rgba(28, 25, 23, 0.7) 40%,
              rgba(28, 25, 23, 0.3) 70%,
              transparent 100%);
          }
          .coll-overlay,
          .coll-overlay h3,
          .coll-overlay p {
            opacity: 0;
          }
          .coll-overlay {
            transform: translateY(100%);
          }
          .coll-card:hover .coll-overlay,
          .coll-card:focus-within .coll-overlay,
          .coll-card:hover .coll-overlay h3,
          .coll-card:focus-within .coll-overlay h3,
          .coll-card:hover .coll-overlay p,
          .coll-card:focus-within .coll-overlay p {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-6 lg:px-8" ref={ref}>
        <div className="mx-auto max-w-3xl text-center">
          <p
            className="mb-4 text-sm font-medium uppercase tracking-widest"
            style={{ color: "var(--amber-800, #92400e)", letterSpacing: "0.15em" }}
          >
            Selected Works
          </p>
          <h2
            className="text-3xl font-semibold sm:text-4xl lg:text-5xl text-balance"
            style={{
              fontFamily: "var(--font-serif, 'Cormorant Garamond', serif)",
              lineHeight: "1.1",
              color: "var(--text-primary, #1c1917)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
            }}
          >
            The Collection
          </h2>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {works.map((work, index) => (
            <article
              key={work.title}
              data-animate="fade-up-scale"
              data-delay={index}
              className="coll-card"
            >
              <div className={`coll-media ${work.orientation === "horizontal" ? "aspect-[4/3]" : "aspect-square"}`}>
                <Image
                  src={work.image || "/placeholder.svg"}
                  alt={work.title}
                  fill
                  className="coll-img"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="coll-overlay">
                <h3>{work.title}</h3>
                <p>{work.description}</p>
                <ul className="coll-details">
                  {work.details.map((detail) => <li key={detail}>• {detail}</li>)}
                </ul>
                <Link
                  href="#contact"
                  className="coll-inquire"
                  onClick={() => track("collection_inquiry_click", { piece: work.title })}
                >
                  Discuss this piece
                </Link>
              </div>
            </article>
          ))}
        </div>
        <p
          className="mt-10 text-sm leading-relaxed text-center"
          style={{ color: "var(--text-secondary, #57534e)" }}
        >
          Images shown are conceptual visualizations of the collection. Final physical pieces are currently in production and may present slight variations.
        </p>
      </div>
    </section>
  );
}
