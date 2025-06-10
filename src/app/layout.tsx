import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "./components/navbar";
import Script from "next/script";
import Head from "next/head";
// import { ThemeProvider } from "./components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elevate HR | Human Resources Solutions",
  description:
    "Comprehensive HR services including recruitment, employee management, and compliance tailored to elevate your workforce.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.css"
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]`}
      >
        {/* <ThemeProvider   //Will setup later
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        > */}
        <NavBar />
        <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-5 flex-grow">
          {children}
        </div>
        <div className="flex justify-center items-center bg-gray-800 text-gray-400 py-5">
          <p className="text-sm">© 2025 Elevate HR. All rights reserved.</p>
        </div>
        {/* </ThemeProvider> */}
        <Script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></Script>
      </body>
    </html>
  );
}
