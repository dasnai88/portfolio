import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Manrope, Playfair_Display } from "next/font/google";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-mono",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-display",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : undefined);

const fallbackRuntimeUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

const metadataBase = new URL(siteUrl ?? fallbackRuntimeUrl);
const socialImageUrl = "/opengraph-image";

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Ilshat | Frontend / Full-Stack разработчик для сайтов и интерфейсов",
    template: "%s | Ilshat",
  },
  description:
    "Премиальное русскоязычное портфолио frontend / full-stack разработчика для клиентских сайтов, сервисов и продуктовых интерфейсов с акцентом на ясную подачу и аккуратную реализацию.",
  keywords: [
    "Ilshat",
    "frontend developer",
    "full-stack developer",
    "portfolio",
    "Next.js",
    "React",
    "product UI",
  ],
  authors: [{ name: "Ilshat" }],
  creator: "Ilshat",
  category: "technology",
  alternates: siteUrl ? { canonical: "/" } : undefined,
  openGraph: {
    type: "website",
    locale: "ru_RU",
    title: "Ilshat | Frontend / Full-Stack разработчик для сайтов и интерфейсов",
    description:
      "Портфолио с фокусом на клиентские сайты, сервисы, product UI, ясную структуру интерфейсов и чистую инженерную реализацию.",
    siteName: "Ilshat Portfolio",
    url: siteUrl ? "/" : undefined,
    images: [
      {
        url: socialImageUrl,
        width: 1200,
        height: 630,
        alt: "Ilshat — frontend / full-stack разработчик для сайтов и интерфейсов",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ilshat | Frontend / Full-Stack разработчик для сайтов и интерфейсов",
    description:
      "Портфолио с фокусом на клиентские сайты, product UI, архитектурную дисциплину и качественную реализацию.",
    images: [socialImageUrl],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#10141d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${jetbrainsMono.variable} ${playfairDisplay.variable}`}
    >
      <body className="antialiased">
        <a href="#content" className="skip-link">
          Перейти к содержанию
        </a>
        {children}
      </body>
    </html>
  );
}
