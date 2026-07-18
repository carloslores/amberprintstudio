"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { track } from "@vercel/analytics";
import { works } from "@/lib/works";

export function CollectionSection() {
  const ref = useScrollAnimation({ staggerDelay: 0.2 });
  const [openWork, setOpenWork] = useState<string | null>(null);

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
        .coll-media-trigger {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: 0;
          padding: 0;
          display: block;
          background: transparent;
          cursor: pointer;
        }
        .coll-card .coll-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 1.4s cubic-bezier(0.23, 1, 0.32, 1);
          filter: saturate(0.9) contrast(1.02);
        }
        .coll-card[data-open="true"] .coll-img {
          transform: scale(1.05);
          filter: saturate(1.05) contrast(1.05);
        }
        .coll-overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          background: linear-gradient(to top,
            rgba(28, 25, 23, 0.96) 0%,
            rgba(28, 25, 23, 0.75) 52%,
            rgba(28, 25, 23, 0.2) 100%);
          padding: 1.5rem;
          transform: translateY(100%);
          opacity: 0;
          overflow-y: auto;
          pointer-events: none;
          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
          backdrop-filter: blur(12px) saturate(180%);
          -webkit-backdrop-filter: blur(12px) saturate(180%);
        }
        .coll-card[data-open="true"] .coll-overlay {
          transform: translateY(0);
          opacity: 1;
          pointer-events: auto;
        }
        .coll-overlay h3 {
          font-family: var(--font-serif, 'Cormorant Garamond', serif);
          font-size: 1.75rem;
          color: white;
          margin-bottom: 0.5rem;
          font-weight: 400;
          letter-spacing: -0.02em;
          transform: translateY(20px);
          opacity: 0;
          transition: all 0.7s cubic-bezier(0.23, 1, 0.32, 1) 0.1s;
        }
        .coll-overlay p {
          color: rgba(255, 255, 255, 0.85);
          font-size: 0.9375rem;
          line-height: 1.6;
          max-width: 90%;
          transform: translateY(20px);
          opacity: 0;
          transition: all 0.7s cubic-bezier(0.23, 1, 0.32, 1) 0.2s;
        }
        .coll-card[data-open="true"] .coll-overlay h3,
        .coll-card[data-open="true"] .coll-overlay p {
          transform: translateY(0);
          opacity: 1;
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
          font-size: 0.875rem;
          font-weight: 600;
          text-decoration: underline;
          text-underline-offset: 4px;
        }
        .coll-actions {
          align-items: center;
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem 1rem;
          margin-top: 1rem;
        }
        .coll-project {
          align-items: center;
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid rgba(255, 255, 255, 0.7);
          border-radius: 999px;
          color: var(--stone-900, #1c1917);
          display: inline-flex;
          font-size: 0.8125rem;
          font-weight: 600;
          justify-content: center;
          padding: 0.65rem 0.95rem;
          text-decoration: none;
        }
        .coll-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 2.75rem;
          height: 2.75rem;
          border: 1px solid rgba(255, 255, 255, 0.55);
          border-radius: 999px;
          display: grid;
          place-items: center;
          color: white;
          background: rgba(28, 25, 23, 0.35);
          font-size: 1.5rem;
          line-height: 1;
          cursor: pointer;
        }
        .coll-tap-hint {
          position: absolute;
          z-index: 1;
          right: 1rem;
          bottom: 1rem;
          padding: 0.5rem 0.75rem;
          border-radius: 999px;
          color: white;
          background: rgba(28, 25, 23, 0.68);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
        @media (hover: hover) and (pointer: fine) and (min-width: 641px) {
          .coll-card:hover {
            transform: translateY(-16px) scale(1.02);
            box-shadow: 0 35px 70px -18px rgba(28, 25, 23, 0.18);
          }
          .coll-card:hover .coll-img {
            transform: scale(1.12);
            filter: saturate(1.05) contrast(1.05);
          }
          .coll-tap-hint,
          .coll-close {
            display: none;
          }
          .coll-overlay {
            top: auto;
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
          .coll-card[data-open="true"] .coll-overlay,
          .coll-card:hover .coll-overlay h3,
          .coll-card:focus-within .coll-overlay h3,
          .coll-card[data-open="true"] .coll-overlay h3,
          .coll-card:hover .coll-overlay p,
          .coll-card:focus-within .coll-overlay p,
          .coll-card[data-open="true"] .coll-overlay p {
            transform: translateY(0);
            opacity: 1;
            pointer-events: auto;
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
              data-open={openWork === work.title}
              onKeyDown={(event) => {
                if (event.key === "Escape") setOpenWork(null);
              }}
            >
              <div className={`coll-media ${work.orientation === "horizontal" ? "aspect-square sm:aspect-[4/3]" : "aspect-square"}`}>
                <button
                  type="button"
                  className="coll-media-trigger"
                  aria-expanded={openWork === work.title}
                  aria-controls={`collection-details-${index}`}
                  aria-label={`Show details for ${work.title}`}
                  onClick={() => setOpenWork((current) => current === work.title ? null : work.title)}
                >
                  <Image
                    src={work.image || "/placeholder.svg"}
                    alt={work.imageAlt}
                    fill
                    className="coll-img"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <span className="coll-tap-hint">Tap for details</span>
                </button>
                <div
                  id={`collection-details-${index}`}
                  className="coll-overlay"
                  aria-hidden={openWork !== work.title}
                  onClick={() => setOpenWork(null)}
                >
                  <button
                    type="button"
                    className="coll-close"
                    aria-label={`Close details for ${work.title}`}
                    tabIndex={openWork === work.title ? 0 : -1}
                    onClick={() => setOpenWork(null)}
                  >
                    ×
                  </button>
                  <h3>{work.title}</h3>
                  <p>{work.description}</p>
                  <ul className="coll-details">
                    {work.details.map((detail) => <li key={detail}>• {detail}</li>)}
                  </ul>
                  <div className="coll-actions">
                    <Link
                      href={`/collection/${work.slug}`}
                      className="coll-project"
                      tabIndex={openWork === work.title ? 0 : -1}
                      onClick={(event) => {
                        event.stopPropagation();
                        track("collection_project_click", { piece: work.title });
                      }}
                    >
                      View project
                    </Link>
                    <Link
                      href="#contact"
                      className="coll-inquire"
                      tabIndex={openWork === work.title ? 0 : -1}
                      onClick={(event) => {
                        event.stopPropagation();
                        track("collection_inquiry_click", { piece: work.title });
                      }}
                    >
                      Discuss this piece
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/collection" className="btn-secondary">
            <span>Explore the Full Collection</span>
          </Link>
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
