"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function ProcessSection() {
  const processRef = useScrollAnimation({ staggerDelay: 0.2 });
  const appsRef = useScrollAnimation({ staggerDelay: 0.15 });

  return (
    <>
      {/* Process Section - Dark with radial glow */}
      <section
        id="process"
        className="py-20 lg:py-32 relative overflow-hidden"
        style={{ background: "var(--stone-900, #1c1917)", color: "white" }}
      >
        {/* Radial glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "50%",
            left: "50%",
            width: "100%",
            height: "100%",
            background: "radial-gradient(ellipse at center, rgba(251, 191, 36, 0.06) 0%, transparent 60%)",
            transform: "translate(-50%, -50%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8" ref={processRef}>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <p
              className="mb-4 text-sm font-medium uppercase tracking-widest"
              style={{ color: "var(--amber-400, #fbbf24)", letterSpacing: "0.15em", opacity: 0.9 }}
            >
              Materials & Production
            </p>
            <h2
              className="text-3xl font-semibold sm:text-4xl text-balance"
              style={{
                fontFamily: "var(--font-serif, 'Cormorant Garamond', serif)",
                lineHeight: "1.1",
                color: "white",
                fontWeight: 400,
                letterSpacing: "-0.02em",
              }}
            >
              Crafted for Excellence
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                num: "1",
                title: "Ultracal 30 Plaster",
                desc: "High-definition relief with structural stability and consistency across molds.",
              },
              {
                num: "2",
                title: "Amber-Toned Resin",
                desc: "Integrated to introduce translucency, depth, and contrast, enhancing the fossil-like aesthetic.",
              },
              {
                num: "3",
                title: "Mold-Based Reproduction",
                desc: "Scalable manufacturing with size variations and adaptable formats.",
              },
            ].map((step, i) => (
              <div
                key={step.num}
                data-animate="fade-up"
                data-delay={i}
                className="text-center p-8 rounded-3xl glass-card-dark group cursor-default"
                style={{ transition: "all 0.8s cubic-bezier(0.23, 1, 0.32, 1)" }}
              >
                <div
                  className="group-hover:scale-115 group-hover:-translate-y-2"
                  style={{
                    fontFamily: "var(--font-serif, 'Cormorant Garamond', serif)",
                    fontSize: "4rem",
                    color: "var(--amber-600, #d97706)",
                    fontWeight: 300,
                    opacity: 0.25,
                    lineHeight: 1,
                    marginBottom: "1.5rem",
                    display: "inline-block",
                    transition: "all 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
                  }}
                >
                  {step.num}
                </div>
                <h3
                  className="group-hover:-translate-y-1.5"
                  style={{
                    fontFamily: "var(--font-serif, 'Cormorant Garamond', serif)",
                    fontSize: "1.5rem",
                    marginBottom: "1rem",
                    color: "white",
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                    transition: "all 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="group-hover:-translate-y-1"
                  style={{
                    color: "var(--stone-400, #a8a29e)",
                    lineHeight: 1.7,
                    fontSize: "0.9375rem",
                    transition: "all 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
                  }}
                >
                  {step.desc}
                </p>

                {/* Hover state enhancement */}
                <style>{`
                  .glass-card-dark:hover {
                    background: rgba(255, 255, 255, 0.1) !important;
                    transform: translateY(-12px) scale(1.02) !important;
                    border-color: rgba(251, 191, 36, 0.3) !important;
                    box-shadow: 0 25px 50px -15px rgba(0, 0, 0, 0.5) !important;
                  }
                  .glass-card-dark:hover > div:first-child {
                    opacity: 0.9 !important;
                    color: var(--amber-400, #fbbf24) !important;
                  }
                  .glass-card-dark:hover p {
                    color: var(--stone-300, #d6d3d1) !important;
                  }
                `}</style>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section
        className="py-20 lg:py-32"
        style={{ background: "var(--bg-tertiary, #f5f2ed)" }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8" ref={appsRef}>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <p
              className="mb-4 text-sm font-medium uppercase tracking-widest"
              style={{ color: "var(--amber-800, #92400e)", letterSpacing: "0.15em" }}
            >
              Applications
            </p>
            <h2
              className="text-3xl font-semibold sm:text-4xl text-balance"
              style={{
                fontFamily: "var(--font-serif, 'Cormorant Garamond', serif)",
                lineHeight: "1.1",
                color: "var(--text-primary, #1c1917)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
              }}
            >
              Designed for Impact
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Hospitality Wall Art",
                desc: "Hotels, resorts, and boutique interiors seeking distinctive statement pieces",
                icon: (
                  <svg className="h-5 w-5" style={{ color: "var(--amber-800, #92400e)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                ),
              },
              {
                title: "Retail Decorative Panels",
                desc: "Elevated retail environments and curated commercial spaces",
                icon: (
                  <svg className="h-5 w-5" style={{ color: "var(--amber-800, #92400e)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                  </svg>
                ),
              },
              {
                title: "Framed Sculptural Art",
                desc: "Individual pieces designed for residential and commercial wall art systems",
                icon: (
                  <svg className="h-5 w-5" style={{ color: "var(--amber-800, #92400e)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                ),
              },
              {
                title: "Feature Installations",
                desc: "Large-scale curated feature walls and architectural installations",
                icon: (
                  <svg className="h-5 w-5" style={{ color: "var(--amber-800, #92400e)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                  </svg>
                ),
              },
            ].map((app, i) => (
              <div
                key={app.title}
                data-animate={i % 2 === 0 ? "fade-left" : "fade-right"}
                data-delay={i}
                className="glass-card rounded-2xl p-8 group cursor-default"
                style={{ transition: "all 0.8s cubic-bezier(0.23, 1, 0.32, 1)" }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                    style={{ background: "rgba(146, 64, 14, 0.1)" }}
                  >
                    {app.icon}
                  </div>
                  <div>
                    <h3
                      className="font-medium group-hover:text-primary group-hover:translate-x-1.5"
                      style={{
                        fontFamily: "var(--font-serif, 'Cormorant Garamond', serif)",
                        fontSize: "1.375rem",
                        color: "var(--text-primary, #1c1917)",
                        fontWeight: 500,
                        letterSpacing: "-0.02em",
                        transition: "all 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
                      }}
                    >
                      {app.title}
                    </h3>
                    <p
                      className="mt-1"
                      style={{
                        color: "var(--text-secondary, #57534e)",
                        fontSize: "0.9375rem",
                        lineHeight: 1.6,
                      }}
                    >
                      {app.desc}
                    </p>
                  </div>
                </div>

                {/* Hover enhancement */}
                <style>{`
                  .glass-card:hover {
                    background: rgba(255, 255, 255, 0.95) !important;
                    transform: translateX(16px) scale(1.02) !important;
                    border-color: rgba(146, 64, 14, 0.2) !important;
                    box-shadow: 0 20px 40px -12px rgba(28, 25, 23, 0.12) !important;
                  }
                `}</style>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
