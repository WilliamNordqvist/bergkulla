import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ClarityScript } from "@/components/clarity-script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

function JsonLd() {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      name: "Bergkulla Stiftelse",
      image: "https://bergkulla.ax/images/hero.jpg",
      description:
        "Moderna stugor för långtidsboende på Åland. Fullt utrustade med havsutsikt, privat båthus, tennisplan och bastu.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Hamnsundsvägen 523, Bertbyvik",
        addressLocality: "Saltvik",
        postalCode: "AX-22430",
        addressRegion: "Åland",
        addressCountry: "FI",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "60.3433304",
        longitude: "20.0928428",
      },
      url: "https://bergkulla.ax",
      telephone: "",
      email: "niclas@bergkulla.ax",
      priceRange: "€€",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
      amenityFeature: [
        {
          "@type": "LocationFeatureSpecification",
          name: "Privat båthus",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Tennisplan",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Bastu",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Höghastighetsnätverk",
          value: true,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://bergkulla.ax/#organization",
      name: "Bergkulla Stiftelse",
      url: "https://bergkulla.ax",
      logo: {
        "@type": "ImageObject",
        url: "https://bergkulla.ax/images/bergkulla-logo.png",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://bergkulla.ax/#website",
      url: "https://bergkulla.ax",
      name: "Bergkulla",
      publisher: {
        "@id": "https://bergkulla.ax/#organization",
      },
      inLanguage: "sv-SE",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://bergkulla.ax/#webpage",
      url: "https://bergkulla.ax",
      name: "Bergkulla - Exklusivt Långtidsboende på Åland",
      isPartOf: {
        "@id": "https://bergkulla.ax/#website",
      },
      about: {
        "@id": "https://bergkulla.ax/#organization",
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://bergkulla.ax/images/hero.jpg",
      },
      inLanguage: "sv-SE",
    },
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL("https://bergkulla.ax"),
  title: {
    default:
      "Bergkulla - Exklusivt Långtidsboende på Åland | Moderna stugor från 550€/månad",
    template: "%s | Bergkulla Stiftelse",
  },
  description:
    "Upptäck moderna stugor för långtidsboende på Bergkulla, Åland. Fullt utrustade stugor med havsutsikt, privat båthus, tennisplan och bastu. Från endast 550€/månad, perfekt för distansarbete i skärgårdsmiljö.",
  keywords: [
    "långtidsboende åland",
    "stugor åland",
    "bergkulla stiftelse",
    "saltvik åland",
    "boende åland",
    "uthyrning åland",
    "skärgårdsboende",
    "moderna stugor",
    "distansarbete åland",
    "havsutsikt åland",
    "båthus åland",
    "tennisplan åland",
    "hyra fritidshus",
  ],
  authors: [{ name: "Bergkullastiftelsen", url: "https://bergkulla.ax" }],
  creator: "Bergkullastiftelsen",
  publisher: "Bergkullastiftelsen",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Bergkulla - Exklusivt Långtidsboende på Åland",
    description:
      "Moderna stugor för långtidsboende i åländska skärgården. Fullt utrustade med havsutsikt, privat båthus, tennisplan och bastu. Från 550€/månad.",
    url: "https://bergkulla.ax",
    siteName: "Bergkulla Stiftelse",
    locale: "sv_SE",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Bergkulla stugor i skärgårdsmiljö - Havsutsikt och modern komfort",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bergkulla - Långtidsboende på Åland",
    description:
      "Moderna stugor för långtidsboende i åländska skärgården. Från 550€/månad.",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://bergkulla.ax",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  category: "bostäder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#040B1C" />
        <meta
          name="google-site-verification"
          content="rdWY0ceF7irJ67h8wf3RnRb2mWlchnWtlhaLtAsttJo"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />

        <link rel="alternate" hrefLang="sv" href="https://bergkulla.ax" />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://bergkulla.ax"
        />

        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        <meta name="referrer" content="strict-origin-when-cross-origin" />

        <meta name="google-site-verification" content="din-verifieringskod" />

        <meta name="geo.region" content="FI-01" />
        <meta name="geo.placename" content="Saltvik, Åland" />
        <meta name="geo.position" content="60.3433304;20.0928428" />
        <meta name="ICBM" content="60.3433304, 20.0928428" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#FAF9F6]`}
      >
        <ClarityScript />
        <JsonLd />
        <Analytics />

        {children}
      </body>
    </html>
  );
}
