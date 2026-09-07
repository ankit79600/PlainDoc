import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://plaindoc.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "PlainDoc — Explain Any Legal Document in Plain English",
    template: "%s | PlainDoc",
  },
  description:
    "Free AI tool that explains rental agreements, medical bills, terms and conditions, employment contracts, and more in plain, simple English. Understand what you sign.",
  keywords: [
    "explain legal document",
    "plain english contract",
    "rental agreement explainer",
    "medical bill decoder",
    "terms and conditions summary",
    "employment contract explained",
    "understand my lease",
    "insurance policy explainer",
  ],
  authors: [{ name: "PlainDoc" }],
  creator: "PlainDoc",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "PlainDoc",
    title: "PlainDoc — Explain Any Legal Document in Plain English",
    description:
      "Free AI tool that explains legal documents in plain English. Paste your document and get a clause-by-clause explanation in seconds.",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "PlainDoc — Plain English Document Explainer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PlainDoc — Explain Any Legal Document in Plain English",
    description:
      "Free AI tool that explains legal documents in plain English. Understand what you sign.",
    images: [`${SITE_URL}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
