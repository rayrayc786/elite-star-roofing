import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCTA from "@/components/layout/MobileCTA";
import { businessInfo } from "@/lib/data";

const glintRace = localFont({
  src: "./fonts/GlintRace.otf",
  variable: "--font-glint",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elitestarroofing.com.au"),
  title: {
    default: `${businessInfo.name} | Professional Roofing Services`,
    template: `%s | ${businessInfo.name}`,
  },
  description:
    "Professional roofing services in Western Australia. Roof repair, leak detection, roof restoration, and roof painting. Get a free quote today.",
  keywords: [
    "roofing",
    "roof repair",
    "leak detection",
    "roof restoration",
    "roof painting",
    "roofing WA",
    "Western Australia roofing",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: businessInfo.name,
    title: `${businessInfo.name} | Professional Roofing Services`,
    description:
      "Professional roofing services in Western Australia. Roof repair, leak detection, roof restoration, and roof painting.",
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
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "RoofingContractor"],
    name: businessInfo.name,
    image: "https://elitestarroofing.com.au/Elite%20Final%20Logo.png",
    logo: "https://elitestarroofing.com.au/Elite%20Final%20Logo.png",
    description:
      "Professional roofing services in Western Australia. Roof repair, leak detection, roof restoration, and roof painting.",
    url: typeof window !== "undefined" ? window.location.origin : "",
    telephone: businessInfo.phoneRaw || undefined,
    email: businessInfo.email !== "[EMAIL ADDRESS]" ? businessInfo.email : undefined,
    address: {
      "@type": "PostalAddress",
      addressRegion: "WA",
      addressCountry: "AU",
    },
    areaServed: {
      "@type": "State",
      name: "Western Australia",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Roofing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Roof Repair" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Leak Detection" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Roof Restoration" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Roof Painting" },
        },
      ],
    },
  };

  return (
    <html lang="en" className={`${glintRace.variable} ${montserrat.variable} h-full scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-montserrat)] antialiased bg-warm-white text-text">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1 pt-[72px] lg:pt-[80px] pb-[60px] lg:pb-0">
          {children}
        </main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
