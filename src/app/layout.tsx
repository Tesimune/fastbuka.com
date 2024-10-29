import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/Providers"; // Import the new Providers component
import { Theme } from "@radix-ui/themes";
import "./globals.css";

// Import Satoshi fonts
const satoshiFont = localFont({
  src: "./fonts/Satoshi-Regular.woff",
  variable: "--font-satoshi",
  weight: "400 700",
});

export const metadata: Metadata = {
  title: "Fast Buka",
  description: "FastBuka – Order meals and pay with tokens",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshiFont.variable} antialiased`}>
        <Providers>
          <Header />
          <Theme>
            <main>{children}</main>
          </Theme>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
