import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  style: "italic",
});

export const metadata: Metadata = {
  title: "Rei Bridal | Modern Bridal Boutique",
  description: "Your wedding, your way. Discover perfect wedding dresses from our curated collection of modern bridal designers.",
  keywords: ["bridal boutique", "wedding dresses", "bridal shop", "wedding gowns", "bride", "ireland", "dublin"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfairDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
