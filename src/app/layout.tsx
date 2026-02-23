import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Full-Stack Developer | Portfolio",
  description: "Premium portfolio showcasing Full-Stack Development, Video Editing, and Graphic Design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${poppins.variable} ${inter.className} bg-primary text-white overflow-x-hidden pt-24 selection:bg-accent-gold/30 selection:text-white antialiased`}
      >
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
