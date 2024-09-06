import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Circle1 from "@/components/icons/Circle1";
import Circle2 from "@/components/icons/Circle2";
import Footer from "@/components/layout/Footer";
import Providers from "@/providers";
const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={lexend.className}>
        <Providers>
          <>
            <Navbar />
            <main className="h-screen overflow-scroll transition-colors duration-700 ease-in-out bg-white dark:bg-black relative">
            <Circle1 className="absolute left-0 top-0" />
            <Circle2 className="absolute right-0 dark:hidden" />
              {children}
              <Footer />
            </main>
          </>
        </Providers>
      </body>
    </html>
  );
}
