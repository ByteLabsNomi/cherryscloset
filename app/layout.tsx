import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "CHERRY'S CLOSET — CURATED VINTAGE, LOS ANGELES",
    template: "%s — CHERRY'S CLOSET",
  },
  description:
    "CURATED VINTAGE DESIGNER CLOTHING POPUP SHOP IN LOS ANGELES. CHANEL, VERSACE, MUGLER, AND MORE.",
  openGraph: {
    title: "CHERRY'S CLOSET",
    description:
      "CURATED VINTAGE DESIGNER CLOTHING POPUP SHOP IN LOS ANGELES.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased flex flex-col min-h-screen`}>
        <AnnouncementBar />
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
