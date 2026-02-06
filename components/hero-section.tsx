import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-primary">
      <div className="mx-auto max-w-7xl px-6 pt-32 pb-16 lg:px-8 lg:pt-40 lg:pb-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary-foreground/70">
              Sculptural Wall Art
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-primary-foreground sm:text-5xl text-balance">
              Inspired by Fossils and Amber
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/85 max-w-xl mx-auto lg:mx-0">
              Handcrafted bas-relief pieces made with Ultracal plaster and amber resin,
              designed for hospitality, retail, and architectural interiors.
            </p>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/70 max-w-xl mx-auto lg:mx-0">
              Conceived as modular wall art and decorative panels suitable for
              large-scale production and licensing.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="#collection"
                className="rounded-full bg-background px-8 py-4 text-base font-medium text-foreground transition-all hover:bg-background/90"
              >
                View Collection
              </Link>
              <Link
                href="#contact"
                className="rounded-full border border-primary-foreground/30 px-8 py-4 text-base font-medium text-primary-foreground transition-all hover:bg-primary-foreground/10"
              >
                Partner With Us
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/snail.png"
                alt="Ammonite bas-relief sculptural wall art in Ultracal plaster with amber resin"
                fill
                className="object-cover"
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
