"use client"   

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import PrelineScript from "../components/PrelineScript";
import NavBar from "../components/Portifolio/navbar";
import SplashScreen from "@/components/splashscreen"
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react"
import SideBar from "@/components/Portifolio/sidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

/*export const metadata: Metadata = {
  title: "Kiira College Butiki",
  description: "A school of intellectual horizons",
};*/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [isLoading, setIsLoading] = useState(isHome)
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    if (isLoading) return;
  }, [isLoading])
  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased sm:px-16 px-4`}
      >
        {isLoading ? (
          <SplashScreen finishLoading={() => setIsLoading(false)} />
        ) : (
          <>
            <PrelineScript />
            <NavBar
              isSidebarOpen={isSidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
            <SideBar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
            {children}
          </>
        )}
      </body>
    </html>
  );
}
