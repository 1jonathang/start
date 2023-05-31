import Providers from "@/components/Providers";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes";

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
    <html
      lang="en"
      className={cn(
        "text-slate-100 antialiased",
        inter.className
      )}
    >
      <body className="min-h-screen bg-white dark:bg-slate-800 antialiased">
        <Providers>
          {children}

          {/* @ts-expect-error Server Component */}
          <Navbar />
        </Providers>
      </body>
    </html>
  );
}
