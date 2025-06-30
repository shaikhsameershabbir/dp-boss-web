import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Remove restrictive settings to allow scroll restoration
  // maximumScale: 1,
  // userScalable: false,
};

export const metadata: Metadata = {
  title: "DSBOSS | SATTA MATKA | KALYAN MATKA | MATKA RESULT | MATKA | SATTA ",
  description:
    "DSBOSS | SATTA MATKA | KALYAN MATKA | MATKA RESULT | MATKA | SATTA ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
