import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";

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
      <body className="bg-background text-foreground">
        <Header />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
