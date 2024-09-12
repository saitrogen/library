import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import React from "react";

export const metadata: Metadata = {
  title: "Amal Library",
  description: "Welcome to the Amal Library website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-primary overflow-hidden">
        <Header />
        <section className="container mx-auto flex flex-col md:flex-row max-h-screen overflow-y-auto">{children}</section>
        
      </body>
    </html>
  );
}
