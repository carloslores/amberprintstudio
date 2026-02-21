import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ background: "var(--bg-primary, #fdfcf9)", paddingTop: "80px" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none hero-glow"
        style={{
          top: "-50%",
          right: "-20%",
          width: "80%",
          height: "150%",
          background: "radial-gradient(ellipse at center, rgba(251, 191, 36, 0.08) 0%, transparent 70%)",
          opacity: 0.6,
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-16 lg:px-10 lg:pt-24 lg:pb-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <p
              className="hero-animate-label mb-6 text-sm font-medium uppercase relative inline-block"
              style={{
                color: "var(--amber-800, #92400e)",
                letterSpacing: "0.15em",
              }}
            >
              Sculptural Wall Art
              <span
                className="absolute left-0"
                style={{
                  bottom: "-8px",
                  width: "40px",
                  height: "1px",
                  background: "var(--amber-800, #92400e)",
                  transform: "scaleX(0)",
                  transformOrigin: "left",
                  animation: "expandWidth 1.4s cubic-bezier(0.23, 1, 0.32, 1) 1s forwards",
                }}
              />
            </p>
            <h1
              className="hero-animate-title text-4xl font-semibold leading-tight sm:text-5xl text-balance"
              style={{
                fontFamily: "var(--font-serif, 'Cormorant Garamond', serif)",
                lineHeight: "1.05",
                letterSpacing: "-0.03em",
                color: "var(--text-primary, #1c1917)",
                fontWeight: 400,
              }}
            >
              Inspired by Fossils and Amber
            </h1>
            <p
              className="hero-animate-desc mt-6 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
              style={{ color: "var(--text-secondary, #57534e)", lineHeight: 1.7 }}
            >
              Handcrafted bas-relief pieces made with Ultracal plaster and amber resin,
              designed for hospitality, retail, and architectural interiors.
            </p>
            <p
              className="hero-animate-desc mt-4 text-base leading-relaxed max-w-xl mx-auto lg:mx-0"
              style={{ color: "var(--text-tertiary, #78716c)", lineHeight: 1.7 }}
            >
              Conceived as modular wall art and decorative panels suitable for
              large-scale production and licensing.
            </p>
            <div className="hero-animate-buttons mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link href="#collection" className="btn-primary">
                <span>View Collection</span>
              </Link>
              <Link href="#contact" className="btn-secondary">
                <span>Partner With Us</span>
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none hero-animate-image">
            {/* Floating glow behind image */}
            <div
              className="absolute -inset-5 rounded-3xl -z-10"
              style={{
                background: "linear-gradient(135deg, rgba(251, 191, 36, 0.12), transparent)",
                opacity: 0.4,
                animation: "subtleFloat 8s ease-in-out infinite",
              }}
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl hero-image-float">
              <Image
                src="/images/snail.png"
                alt="Ammonite bas-relief sculptural wall art in Ultracal plaster with amber resin"
                fill
                className="object-cover"
                style={{ transition: "all 1s cubic-bezier(0.23, 1, 0.32, 1)" }}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
