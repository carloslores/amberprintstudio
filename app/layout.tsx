import type { Metadata, Viewport } from "next";
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
    "Handcrafted fossil-inspired wall panels in plaster and amber resin for hospitality, retail, and luxury interiors. Designed and made in Miami.",

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
      "Handcrafted fossil-inspired sculptural wall panels in plaster and amber resin for hospitality, retail, and luxury interiors.",
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
    title: "Fossil-Inspired Sculptural Wall Panels | Amberprint Studio",
    description:
      "Handcrafted wall panels in plaster and amber resin, designed and made in Miami.",
    images: [
      {
        url: "/opengraph-image",
        alt: "Amberprint Studio — luxury fossil-inspired sculptural wall panels",
      },
    ],
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
    "@id": `${siteUrl}/#organization`,
    name: "Amberprint Studio",
    legalName: "Amberprint Studio LLC",
    url: siteUrl,
    email: "contact@amberprintstudio.com",
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/icon.png`,
      width: 585,
      height: 585,
    },
    sameAs: [
      "https://www.instagram.com/amberprintstudio",
      "https://www.facebook.com/profile.php?id=61588302980119",
      "https://www.linkedin.com/company/amberprint-studio",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Miami",
      addressRegion: "FL",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Miami, Florida",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "project inquiries",
      email: "contact@amberprintstudio.com",
    },
  };
}

function jsonLdWebSite() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "Amberprint Studio",
    url: siteUrl,
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          id="ld-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization()) }}
        />
        <script
          id="ld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite()) }}
        />

        {children}
        <Analytics />
      </body>
    </html>
  );
}
