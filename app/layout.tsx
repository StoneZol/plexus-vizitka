import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),// замени на свой домен
  title: "NickPlexus",
  description: "I",
  openGraph: {
    title: "NickPlexus",
    description: "I",
    url: "http://localhost:3000", // замени на свой домен
    siteName: "NickPlexus",
    images: [
      {
        url: "/plexprew.webp",
        width: 373,
        height: 257,
        alt: "NickPlexus Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NickPlexus",
    description: "I",
    images: ["/plexprew.webp"],
  },
  icons: {
    icon: "/favicon.ico", // если есть
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <noscript>Make by Stone Zol</noscript>
        {children}
      </body>
    </html>
  );
}
