'use client'

import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RUReady",
  description: "Learn Russian at the tip of your fingertips.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Cinzel&family=Fauna+One&family=Rubik:wght@300;400;500;600;700&display=swap");

        body {
          font-family: "Rubik", sans-serif;
        }
      `}</style>
      <html
        lang="en"
        className={cn("text-slate-100 antialiased", inter.className)}
      >
        <body className="h-screen bg-white dark:bg-slate-800 antialiased">
          <Providers>{children}</Providers>
        </body>
      </html>
    </>
  );
}
