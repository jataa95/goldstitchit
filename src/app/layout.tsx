import type { Metadata, Viewport } from "next";
import { Sora } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — Custom Tailoring & Cloth Making in Lagos`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "tailor Lagos",
    "custom clothing Lagos",
    "streetwear production Nigeria",
    "tailoring training Lagos",
    "fashion designer Yaba",
    "bulk clothing production",
    "Gold Stitch It",
  ],
  openGraph: {
    title: `${site.name} — Custom Tailoring & Cloth Making`,
    description: site.tagline,
    type: "website",
    locale: "en_NG",
    images: [{ url: "/images/hero-poster.jpg", width: 576, height: 1024, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.tagline,
    images: ["/images/hero-poster.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0c0c0d",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sora.variable} antialiased`}>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
