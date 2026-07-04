import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://amberprintstudio.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Luxury Fossil-Inspired Wall Panels | Amberprint Studio Miami",
    template: "%s | Amberprint Studio",
  },

  description:
    "Handcrafted sculptural wall panels in resin and plaster, inspired by fossils and natural textures. Designed for high-end interiors and hospitality projects. Made in Miami, Florida.",

  applicationName: "Amberprint Studio",
  category: "Art & Design",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    // Opcional: evita indexar params raros
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Amberprint Studio",
    title: "Luxury Fossil-Inspired Wall Panels | Amberprint Studio Miami",
    description:
      "Handcrafted sculptural wall panels in resin and plaster, inspired by fossils and natural textures. Designed for high-end interiors and hospitality projects.",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Amberprint Studio — luxury fossil-inspired sculptural wall panels",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Amberprint Studio",
    description:
      "Luxury fossil-inspired sculptural wall panels handcrafted in Miami, Florida.",
    images: ["/opengraph-image"],
  },

  appleWebApp: {
    capable: true,
    title: "Amberprint Studio",
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0b0b",
};

function jsonLdOrganization() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Amberprint Studio",
    url: siteUrl,
    logo: `${siteUrl}/icon.png`,
    sameAs: [
      "https://www.instagram.com/amberprintstudio",
      "https://www.facebook.com/amberprintstudio",
      "https://www.linkedin.com/company/amberprint-studio",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Miami",
      addressRegion: "FL",
      addressCountry: "US",
    },
  };
}

function jsonLdWebSite() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Amberprint Studio",
    url: siteUrl,
  };
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Script
          id="ld-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization()) }}
        />
        <Script
          id="ld-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite()) }}
        />

        {children}
        <Analytics />
      </body>
    </html>
  );
}
