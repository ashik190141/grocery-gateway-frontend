import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Providers from '../lib/Providers';

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grocer Gateway",
  description:
    "Welcome to Grocery Gateway – where innovation meets imagination in the dynamic realm of technology, offering a thrilling journey through the latest trends and groundbreaking discoveries in the world of tech!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en" data-theme="light">
        <body className={roboto.className}>
          {children}
        </body>
      </html>
    </Providers>
  );
}
