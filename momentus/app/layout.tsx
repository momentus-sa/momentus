import type { Metadata } from "next";
import { Josefin_Sans, Raleway } from "next/font/google";
import "./globals.css";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "momentus",
  description: "Developed by Lara, Miguel, Ryam e Yan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefinSans.variable} ${raleway.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
