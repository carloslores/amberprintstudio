import Image from "next/image";

const works = [
  {
    title: "Ammonite Relief",
    description: "Bas-relief wall tile made with Ultracal plaster and amber resin. Designed for modular wall compositions or framed wall art.",
    image: "/images/snail-floor.png",
  },
  {
    title: "Marine Fossil Series",
    description: "A collection of fossil-inspired reliefs featuring marine organisms, developed as individual panels or repeatable decorative elements.",
    image: "/images/fossil-relics.png",
  },
  {
    title: "Crustacean Study",
    description: "High-detail sculptural relief exploring fossilized crustacean forms, suitable for vertical wall art applications.",
    image: "/images/crustaceran.png",
  },
  {
    title: "Prehistoric Fossil Series – Dinosaur Skull",
    description: "A sculptural wall relief exploring the anatomy and presence of prehistoric fossils.",
    image: "/images/dino.png",
  },
];

export function CollectionSection() {
  return (
    <section id="collection" className="bg-secondary py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            Selected Works
          </p>
          <h2 className="  text-3xl font-semibold text-secondary-foreground sm:text-4xl lg:text-5xl text-balance">
            The Collection
          </h2>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {works.map((work, index) => (
            <article
              key={work.title}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={work.image || "/placeholder.svg"}
                  alt={work.title}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                  priority={index < 2}
                />
              </div>
              <div className="p-6 lg:p-8">
                <h3 className="  text-xl font-semibold text-card-foreground lg:text-2xl">
                  {work.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {work.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
