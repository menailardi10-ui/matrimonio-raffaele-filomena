import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import BottomNavigation from "@/components/BottomNavigation";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-title",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Raffaele & Filomena",
  description: "24 Ottobre 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
  className={`${cormorant.variable} ${montserrat.variable}`}
>
  <div className="pb-24">
    {children}
  </div>

  <BottomNavigation />
</body>
    </html>
  );
}