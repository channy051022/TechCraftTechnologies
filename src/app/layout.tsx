import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TechCraft Technologies — Build What's Next.",
  description: "TechCraft Technologies builds modern digital products, web platforms, and custom software for businesses ready to move forward.",
  openGraph: {
    title: "TechCraft Technologies — Build What's Next.",
    description: "TechCraft Technologies builds modern digital products, web platforms, and custom software for businesses ready to move forward.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechCraft Technologies — Build What's Next.",
    description: "TechCraft Technologies builds modern digital products, web platforms, and custom software for businesses ready to move forward.",
  },
  icons: {
    icon: "/techcraftlogo.png",
    apple: "/techcraftlogo.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden selection:bg-primary-light/30 selection:text-white">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
