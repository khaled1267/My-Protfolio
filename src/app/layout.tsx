import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Spotlight from "@/components/Spotlight";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Khaled Mahmud | Premium Developer Portfolio",
  description: "A high-end animated developer portfolio of Khaled mahmud, built with Next.js, GSAP, and Framer Motion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} antialiased selection:bg-blue-500/30`}>
      <body className="bg-brand-dark text-white min-h-screen">
        <SmoothScroll>
          <div className="noise-bg" />
          <CustomCursor />
          <Spotlight />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
