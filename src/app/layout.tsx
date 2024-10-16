"use client"   

import localFont from "next/font/local";
import "./globals.css";
import PrelineScript from "../components/PrelineScript";
import NavBar from "../components/Portifolio/navbar";
import SplashScreen from "@/components/splashscreen"
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react"
import SideBar from "@/components/Portifolio/sidebar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

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
    <html lang='en' className='scroll-smooth'>
      <head>
        <title>KCB Platform</title>
        <link
          href='https://cdn.jsdelivr.net/npm/pagedone@1.2.2/src/css/pagedone.css '
          rel='stylesheet'
        />
        <script src='https://cdn.jsdelivr.net/npm/pagedone@1.2.2/src/js/pagedone.js'></script>
      </head>
      <body
        className={`${geistSans.variable} ${
          geistMono.variable
        } antialiased overflow-x-hidden ${
          isSidebarOpen ? "overflow-hidden" : ""
        }`}>
        {isLoading ? (
          <SplashScreen finishLoading={() => setIsLoading(false)} />
        ) : (
          <>
            <PrelineScript />
            <NavBar setSidebarOpen={setSidebarOpen} />
            <SideBar isOpen={isSidebarOpen} onClose={setSidebarOpen} />
            {children}
          </>
        )}
      </body>
    </html>
  );
}
