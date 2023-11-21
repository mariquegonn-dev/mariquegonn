import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { Header } from "@/components/my-ui/Header";
import { Mobile } from "@/components/my-ui/Mobile";

export const metadata: Metadata = {
  title: "Henrique Gonçalves",
  description:
    "Henrique Gonçalves, desenvolvedor Front-end especializado em React e Typescript.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png" type="image/png" />
      </head>
      <body className={`${GeistSans.className} bg-black-primary`}>
        <Header />
        <Mobile />
        {children}
      </body>
    </html>
  );
}
