import type { Metadata } from "next";
import "./globals.css";
import { Bebas_Neue, Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Tez-Wingz — Chicago-Inspired Wingz",
  description: "Tez-Wingz: Chicago-inspired wingz in OKC. Two locations, bold flavors, and fast online ordering.",
  openGraph: {
    title: "Tez-Wingz — Chicago-Inspired Wingz",
    description: "Tez-Wingz: Chicago-inspired wingz in OKC. Two locations, bold flavors, and fast online ordering.",
    url: "https://tez-wingz.example.com",
    type: "website",
  },
  themeColor: "#000000",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebas.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-black text-white antialiased">
        <NavBar />
        <main className="mx-auto max-w-6xl px-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
