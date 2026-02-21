"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function AboutSection() {
  const ref = useScrollAnimation({ staggerDelay: 0.2 });

  return (
    <section
      id="about"
      className="py-20 lg:py-32"
      style={{ background: "var(--bg-secondary, #faf8f5)" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8" ref={ref}>
        <div className="mx-auto max-w-3xl text-center">
          <p
            className="mb-4 text-sm font-medium uppercase tracking-widest"
            style={{ color: "var(--amber-800, #92400e)", letterSpacing: "0.15em", opacity: 0.9 }}
          >
            About the Collection
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
            The Visual Language of Geological Time
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {[
            {
              icon: (
                <svg className="h-6 w-6" style={{ color: "var(--amber-800, #92400e)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              ),
              title: "Fossil-Inspired Design",
              desc: "Each piece is inspired by fossilized marine life and the visual language of geological time, capturing nature\u2019s artistry in sculptural form.",
            },
            {
              icon: (
                <svg className="h-6 w-6" style={{ color: "var(--amber-800, #92400e)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                </svg>
              ),
              title: "Bas-Relief Technique",
              desc: "Developed as bas-relief compositions combining Ultracal 30 plaster with translucent amber-toned resin for depth and permanence.",
            },
            {
              icon: (
                <svg className="h-6 w-6" style={{ color: "var(--amber-800, #92400e)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>
              ),
              title: "Interior Systems",
              desc: "Conceived as a decorative system for interior spaces, with focus on reproducibility, durability, and visual impact.",
            },
          ].map((card, i) => (
            <div
              key={card.title}
              data-animate="fade-up"
              data-delay={i}
              className="relative overflow-hidden rounded-[20px] p-8 glass-card hover-lift group cursor-default"
            >
              {/* Gradient top border on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100"
                style={{
                  background: "linear-gradient(90deg, transparent, var(--amber-400, #fbbf24), transparent)",
                  transition: "opacity 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
                }}
              />
              <div
                className="mb-6 flex h-12 w-12 items-center justify-center rounded-full"
                style={{ background: "rgba(146, 64, 14, 0.1)" }}
              >
                {card.icon}
              </div>
              <h3
                className="text-xl font-semibold group-hover:translate-x-1.5"
                style={{
                  fontFamily: "var(--font-serif, 'Cormorant Garamond', serif)",
                  fontSize: "1.5rem",
                  color: "var(--text-primary, #1c1917)",
                  fontWeight: 500,
                  letterSpacing: "-0.02em",
                  transition: "all 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
                }}
              >
                {card.title}
              </h3>
              <p
                className="mt-3 text-base leading-relaxed group-hover:translate-x-1.5"
                style={{
                  color: "var(--text-secondary, #57534e)",
                  lineHeight: 1.7,
                  fontSize: "0.9375rem",
                  transition: "all 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
                }}
              >
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
