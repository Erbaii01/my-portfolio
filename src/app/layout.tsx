import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Python & AI Automation Portfolio",
  description:
    "I automate your business with Python & AI to save time, reduce manual work, and help you grow faster.",
  keywords: [
    "Python automation",
    "AI chatbots",
    "Web scraping",
    "JavaScript web development",
    "business automation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#06070b] text-white">
        {children}
      </body>
    </html>
  );
}
