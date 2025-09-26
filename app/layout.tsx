import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daisy Wangenga",
  description: "Her Portfolio",
  icons: {
    icon: [
      { url: "/favicon-for-public/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-for-public/web-app-manifest-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/favicon-for-public/web-app-manifest-192x192.png",
  },
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
