import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://atelier-maison.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Atelier Maison | Architecture intérieure à Paris",
    template: "%s | Atelier Maison",
  },
  description:
    "Atelier Maison imagine des intérieurs intemporels à Paris : architecture intérieure, rénovation et aménagement sur mesure.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: "Atelier Maison",
    title: "Atelier Maison | Architecture intérieure à Paris",
    description:
      "Des intérieurs intemporels, conçus autour de la lumière, des matières et des volumes.",
    images: ["/images/atelier-maison-social.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
