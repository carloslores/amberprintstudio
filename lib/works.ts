export type Work = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  metaDescription: string;
  image: string;
  imageAlt: string;
  details: string[];
  material: string;
  format: string;
  applications: string;
  concept: string;
  production: string;
  orientation?: "horizontal";
};

export const works: Work[] = [
  {
    slug: "ammonite-relief",
    title: "Ammonite Relief",
    seoTitle: "Ammonite Bas-Relief Wall Panel",
    description:
      "Bas-relief wall tile made with Ultracal plaster and amber resin. Designed for modular wall compositions or framed wall art.",
    metaDescription:
      "Explore an ammonite bas-relief wall panel handcrafted in Ultracal plaster and amber resin for hospitality, residential, and feature-wall interiors.",
    image: "/images/snail-floor.png",
    imageAlt:
      "Amber resin ammonite bas-relief wall panel cast in light Ultracal plaster",
    details: [
      "Ultracal plaster + amber resin",
      "Modular or framed format",
      "Hospitality and residential",
    ],
    material: "Ultracal plaster and translucent amber-toned resin",
    format: "Modular wall tile or framed sculptural composition",
    applications: "Hospitality, residential interiors, and feature walls",
    concept:
      "The Ammonite Relief translates the natural spiral and chambered structure of an ammonite into a dimensional wall surface. The contrast between pale mineral plaster and translucent amber-toned resin emphasizes depth, rhythm, and the visual language of geological time.",
    production:
      "The piece is conceived as a repeatable bas-relief element that can stand alone, be framed, or form part of a larger modular wall composition. Final physical pieces are produced by hand and may show subtle material variations.",
  },
  {
    slug: "marine-fossil-series",
    title: "Marine Fossil Series",
    seoTitle: "Marine Fossil Sculptural Wall Panels",
    description:
      "A collection of fossil-inspired reliefs featuring marine organisms, developed as individual panels or repeatable decorative elements.",
    metaDescription:
      "Discover marine fossil-inspired sculptural wall panels developed as individual reliefs or repeatable decorative elements for curated interiors.",
    image: "/images/fossil-relics.png",
    imageAlt:
      "Marine fossil-inspired sculptural relief panel in mineral plaster and amber tones",
    details: [
      "Marine fossil relief series",
      "Repeatable panel system",
      "Feature walls and retail",
    ],
    material: "Mineral plaster with amber-toned resin details",
    format: "Individual relief or repeatable decorative panel system",
    applications: "Retail, hospitality, and curated feature-wall installations",
    concept:
      "The Marine Fossil Series studies preserved ocean forms as a family of related reliefs. Repeated shells, skeletal traces, and eroded textures create a collected composition that feels archaeological while remaining suited to contemporary interiors.",
    production:
      "Each motif is developed for mold-based reproduction, allowing the series to be arranged as individual artworks or combined into larger wall systems. Finish, grouping, and presentation can be adapted to the architectural context.",
  },
  {
    slug: "crustacean-study",
    title: "Crustacean Study",
    seoTitle: "Crustacean Fossil Sculptural Wall Relief",
    description:
      "High-detail sculptural relief exploring fossilized crustacean forms, composed as a horizontal statement panel.",
    metaDescription:
      "View a high-detail crustacean fossil wall relief created for horizontal statement panels, hospitality interiors, and curated feature installations.",
    image: "/images/crustaceran.png",
    imageAlt:
      "Detailed crustacean fossil sculptural wall relief presented as a horizontal panel",
    orientation: "horizontal",
    details: [
      "High-detail sculptural relief",
      "Horizontal panel format",
      "Statement wall applications",
    ],
    material: "High-definition mineral plaster relief",
    format: "Horizontal sculptural wall panel",
    applications: "Statement walls, hospitality, and curated commercial interiors",
    concept:
      "Crustacean Study isolates the articulated anatomy of a fossilized marine organism and treats it as a graphic architectural form. Fine surface detail and a horizontal composition give the piece the presence of a specimen while preserving a restrained, sculptural character.",
    production:
      "The relief is developed for consistent mold-based casting while retaining the subtle texture associated with handcrafted mineral materials. It can be presented individually or coordinated with other works in the fossil series.",
  },
  {
    slug: "dinosaur-skull-relief",
    title: "Prehistoric Fossil Series – Dinosaur Skull",
    seoTitle: "Dinosaur Skull Sculptural Wall Relief",
    description:
      "A sculptural wall relief exploring the anatomy and presence of prehistoric fossils.",
    metaDescription:
      "Explore a dinosaur skull sculptural wall relief designed as a horizontal statement panel for hospitality and feature-wall installations.",
    image: "/images/dino.png",
    imageAlt:
      "Dinosaur skull fossil sculptural wall relief displayed as a horizontal statement panel",
    orientation: "horizontal",
    details: [
      "Prehistoric fossil study",
      "Horizontal panel format",
      "Hospitality and feature installations",
    ],
    material: "Mineral plaster sculptural relief",
    format: "Horizontal prehistoric fossil study",
    applications: "Hospitality, residential, and feature-wall installations",
    concept:
      "The Dinosaur Skull relief brings the scale and anatomical presence of a prehistoric fossil into an architectural format. The composition focuses on silhouette, cavities, and weathered surface character rather than literal museum reconstruction.",
    production:
      "Designed as part of a reproducible relief system, the work can be presented as a single framed statement or coordinated with other prehistoric studies. Hand finishing gives each physical casting subtle individual variation.",
  },
];

export function getWorkBySlug(slug: string) {
  return works.find((work) => work.slug === slug);
}
