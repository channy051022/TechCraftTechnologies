import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import PageLoader from "@/components/PageLoader";
import SmoothScroll from "@/components/SmoothScroll";

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
    icon: [
      { url: "/company logo/TC icon logo.png", type: "image/png" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/company logo/TC icon logo.png",
    apple: "/company logo/TC icon logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased scroll-smooth`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");var d=t==="dark"||((!t||t==="system")&&window.matchMedia("(prefers-color-scheme: dark)").matches);if(d){document.documentElement.classList.add("dark")}else{document.documentElement.classList.remove("dark")}}catch(e){}})()`,
          }}
        />
      </head>
      <body
        className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden selection:bg-primary-light/30 selection:text-white"
        suppressHydrationWarning
      >
        <ThemeProvider>
          <PageLoader />
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
