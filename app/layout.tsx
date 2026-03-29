import type { Metadata } from "next";
import "./globals.css";
import Navbard from "@/components/Navbard";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "lantiban",
  description: "Cree par Bryan garrix",
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
      className="h-full antialiased"
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
