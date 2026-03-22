import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import { LazyMotion, domAnimation } from "framer-motion";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohit — AI Fullstack Developer",
  description:
    "Portfolio of Mohit, an AI Fullstack Developer building intelligent digital experiences.",
  openGraph: {
    title: "Mohit — AI Fullstack Developer",
    description:
      "Building intelligent digital experiences at the intersection of AI and fullstack development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <body className="bg-black text-white antialiased">
        <LazyMotion features={domAnimation} strict>
          <CustomCursor />
          <SmoothScroll>
            <Navbar />
            <main>{children}</main>
          </SmoothScroll>
        </LazyMotion>
      </body>
    </html>
  );
}
