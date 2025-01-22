
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Furniture Store",
  description: " by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ClerkProvider dynamic>

    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer/>
        </body>
    </html>
      
   </ClerkProvider>
  );
}
