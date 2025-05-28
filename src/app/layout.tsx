import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import SITE from "@/i18n/site.json";
import "./globals.css";
import TopBarInfo from "@/components/TopBarInfo";
import { Background } from "@/components/Background";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: SITE.url,
    images: [
      {
        url: SITE.image,
      },
    ],
  },
  twitter: {
    title: SITE.title,
    description: SITE.description,
    card: "summary_large_image",
    images: [
      {
        url: SITE.image,
      },
    ],
  },
  icons: {
    icon: SITE.favicon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={SITE.lang}>
      <body
        className={`${josefinSans.variable} antialiased relative h-fit w-full min-h-[100dvh] text-foreground bg-background font-noto`}
      >
        <TopBarInfo />
        <Background />
        {children}
      </body>
    </html>
  );
}
