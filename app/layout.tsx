import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import Shayelo from "./comps/Shayelo";
import { ToastProvider } from "./comps/Toast";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
})

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
      <body className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}>
        <ToastProvider>
          <Shayelo />
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
