import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope, Oswald } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Providers } from "@/components/providers";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Lapo Gym — Train without compromise",
    template: "%s · Lapo Gym",
  },
  description:
    "Lapo Gym is a luxury performance club with three New York locations. Unlimited classes, personal training, and a private-club floor.",
  icons: { icon: "/images/logo.png" },
  openGraph: {
    title: "Lapo Gym",
    description: "Three clubs. One standard. New York performance training.",
    images: ["/images/hero.jpg"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${oswald.variable} ${manrope.variable}`}>
      <body className="min-h-screen bg-ink font-sans text-cream antialiased">
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
