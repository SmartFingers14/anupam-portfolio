import type { Metadata } from "next";
import { Space_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Anupam Bakshi — Marketing Manager & Growth Strategist",
  description:
    "6+ years building full-funnel marketing systems. ISB Certified. Performance Marketing, Growth Strategy, AI Automation, CRM.",
  keywords:
    "Marketing Manager, Growth Strategist, Performance Marketing, Google Ads, Meta Ads, CRM, Marketing Automation, Delhi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className={`${spaceGrotesk.className} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
