import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ResponsiveHeader from "./components/header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Página de inicio",
  description: "Página de aterrizaje del proyecto Dejando Huella",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ResponsiveHeader />
        <section className="pt-[40px] md:pt-[70px]">
          {children}
        </section>
      </body>
    </html>
  );
}
