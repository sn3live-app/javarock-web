import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { site } from "./content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://javarock-web.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  icons: {
    icon: [
      { url: "/javarock-favicon.svg", type: "image/svg+xml" },
      { url: "/javarock-icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/javarock-favicon.svg",
    apple: "/javarock-icon.png",
  },
  openGraph: {
    title: site.name,
    description: site.description,
    siteName: site.name,
    images: [
      {
        url: "/javarock-icon.png",
        width: 512,
        height: 512,
        alt: "JavaRock app logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
