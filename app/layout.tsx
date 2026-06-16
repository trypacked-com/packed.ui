import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "packed.ui",
  description:
    "Standalone shadcn registry for Packed — warm, sunset-led React components.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full font-sans antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
