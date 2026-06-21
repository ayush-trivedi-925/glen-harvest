import type { Metadata } from "next";
import { Poppins, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import LenisProvider from "@/components/providers/LenisProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/shared/ScrollToTop";
import BackToTopButton from "@/components/shared/BackToTopButton";
import SocialDock from "@/components/shared/SocialDock";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Glen Harvest",
  description: "Premium quality makhana and healthy snacks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(poppins.variable, cormorant.variable)}>
      <body className="font-sans bg-brand-cream text-brand-text min-h-screen flex flex-col">
        <LenisProvider>
          <ScrollToTop />
          <Navbar />
          <main className="grow">{children}</main>
          <Footer />
          <BackToTopButton />
          <SocialDock />
        </LenisProvider>
      </body>
    </html>
  );
}
