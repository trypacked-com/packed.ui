import type { Metadata } from "next";

import { ThemeProvider } from "@/registry/lib/theme-provider";

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
      <body className="flex min-h-full flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
