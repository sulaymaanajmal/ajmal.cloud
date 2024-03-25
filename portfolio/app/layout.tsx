import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sulaymaan Ajmal",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-screen bg-background font-sans antialiased selection:bg-accent">
      <head>
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      </head>
      <body className={font.className}>{children}</body>
    </html>
  );
}
