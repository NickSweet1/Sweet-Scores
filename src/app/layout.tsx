import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./_components/NavBar";
import Layout from "./_components/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sweet Scores",
  description: "A gaming site for all.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Layout>
        <NavBar />
        {children}
      </Layout>
      </body>
    </html>
  );
}
