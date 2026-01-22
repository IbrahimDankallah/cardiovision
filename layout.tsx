import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "CardioVision Healthcare and Training Academy",
    template: "%s | CardioVision Healthcare",
  },
  description: "Advancing Cardiovascular Care, Training & Research in Northern Nigeria",
  keywords: ["cardiovascular care", "healthcare training", "Nigeria", "cardiology", "medical training", "Azare", "Bauchi"],
  authors: [{ name: "CardioVision Healthcare" }],
  creator: "CardioVision Healthcare and Training Academy",
  publisher: "CardioVision Healthcare and Training Academy",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://cardiovision.ng"),
  openGraph: {
    title: "CardioVision Healthcare and Training Academy",
    description: "Advancing Cardiovascular Care, Training & Research in Northern Nigeria",
    type: "website",
    locale: "en_NG",
    siteName: "CardioVision Healthcare",
  },
  twitter: {
    card: "summary_large_image",
    title: "CardioVision Healthcare and Training Academy",
    description: "Advancing Cardiovascular Care, Training & Research in Northern Nigeria",
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
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-gray-50">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-lg"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-grow" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
