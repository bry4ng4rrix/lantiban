import type { Metadata } from "next";
import "./globals.css";
import Navbard from "@/components/Navbard";
import Footer from "@/components/footer";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "lantiban",
  description: "pour florian",
  icons: {
    icon: "/logo.avif",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full antialiased", "font-sans", geist.variable)}
    >
      <body className="min-h-screen h-full w-full flex flex-col font-sans">
        <Navbard/>
        <div className="flex-1">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
