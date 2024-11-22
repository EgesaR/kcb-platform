"use client";

import Image from "next/image";
import { useState } from "react";
import SplashScreen from "../components/SplashScreen";
import { NextUIProvider } from "@nextui-org/react";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <NextUIProvider>
      <>
        {showSplash ? (
          <SplashScreen setShowSplash={setShowSplash} />
        ) : (
          <div className="w-full h-screen bg-black text-white overflow-y-hidden">
            <div className="overflow-y-scroll h-screen">
              <Navbar />
              <p className="mt-4">Scroll down to see the navbar in action.</p>
              <div className="h-[200vh]"></div>
            </div>
          </div>
        )}
      </>
    </NextUIProvider>
  );
}
