import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const display = Barlow_Condensed({
  variable: "--font-condensed",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const body = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

const SITE_URL = "https://mikebuilds.tech";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mike Builds — Baltimore, MD",
    template: "%s — Mike Builds",
  },
  description:
    "One-man shop. Websites for trades, content packs for agents, and quiet back-office automation. Baltimore, MD. Call or text 410-575-4192 — a human answers.",
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "Mike Builds — Baltimore, MD",
    description:
      "Websites for trades. Content packs for agents. Quiet automation. One phone number: 410-575-4192.",
    url: SITE_URL,
    siteName: "Mike Builds",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Mike Builds — Baltimore, MD",
    description:
      "Websites for trades. Content packs for agents. Quiet automation. Call or text 410-575-4192.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B0D14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
