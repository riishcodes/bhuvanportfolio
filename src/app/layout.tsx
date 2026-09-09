import type { Metadata, Viewport } from "next";
import { Outfit, Caveat } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://bhuvanportfolio.com"),
  title: "BHUVAN | Fashion & Visual Media • Forex Technical Analyst • Fitness Coach",
  description:
    "Official portfolio of Bhuvan. Combining creative direction & visual storytelling, disciplined Forex technical analysis, and aesthetic physique coaching. A more disciplined tomorrow.",
  keywords: [
    "Bhuvan",
    "Portfolio",
    "Creative Director",
    "Forex Technical Analyst",
    "Fitness Coach",
    "Fashion & Visual Media",
    "Model",
    "Entrepreneur",
  ],
  authors: [{ name: "Bhuvan" }],
  openGraph: {
    title: "BHUVAN | Discipline Creates Freedom",
    description: "Fashion & Visual Media • Forex Technical Analyst • Fitness Coach",
    url: "https://bhuvanportfolio.com",
    siteName: "BHUVAN",
    images: [
      {
        url: "/photos/hero-portrait.png",
        width: 1200,
        height: 630,
        alt: "Bhuvan - Fashion & Visual Media, Forex Analyst, Fitness Coach",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BHUVAN | Discipline Creates Freedom",
    description: "Fashion & Visual Media • Forex Technical Analyst • Fitness Coach",
    images: ["/photos/hero-portrait.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${caveat.variable} scroll-smooth dark`}
    >
      <body className="min-h-screen bg-[#080808] text-[#f4f4f5] antialiased selection:bg-[#e4ded5] selection:text-[#0a0a0a] overflow-x-hidden font-sans">
        {children}
      </body>
    </html>
  );
}
