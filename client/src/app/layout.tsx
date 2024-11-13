import type { Metadata } from "next";
import "./globals.css";
import { PT_Sans } from "next/font/google";

const ptSan = PT_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Book Management Sys.",
  description: "GraphQL CRUD App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${ptSan.className} min-h-[100svh] h-full p-2 antialiased bg-background`}
      >
        {children}
      </body>
    </html>
  );
}
