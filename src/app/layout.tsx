import type { Metadata, Viewport } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import {
  ScrollProgress,
  BackToTop,
  FloatingWhatsApp,
  CallButton,
} from "@/components/layout/FloatingActions";
import { createMetadata, localBusinessSchema } from "@/lib/seo";
import { SITE } from "@/lib/constants";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1F2937" },
    { media: "(prefers-color-scheme: dark)", color: "#1F2937" },
  ],
};

export const metadata: Metadata = {
  ...createMetadata({
    title: SITE.name,
    description: SITE.description,
    path: "/",
  }),
  appleWebApp: {
    capable: true,
    statusBarStyle: "black",
    title: SITE.name,
  },
  other: {
    "theme-color": "#1F2937",
  },
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    apple: [{ url: "/logo.png" }],
  },
  keywords: [
    "Samsun elektrikçi",
    "Atakum elektrikçi",
    "elektrik tesisatı Samsun",
    "acil elektrikçi Samsun",
    "ARSLAN ELEKTRİK",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = localBusinessSchema();

  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Source+Sans+3:wght@400;500;600;700&display=swap&subset=latin,latin-ext"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <SmoothScroll>
          <ScrollProgress />
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[110] focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
          >
            İçeriğe atla
          </a>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <CallButton />
          <BackToTop />
        </SmoothScroll>
      </body>
    </html>
  );
}
