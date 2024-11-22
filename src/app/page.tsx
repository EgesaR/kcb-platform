"use client";

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
              <div className="h-[100vh] bg-blue-300">
                <div className="text-2xl font-bold text-center">
                  Discipline, Hardwork, Excellence, Brotherhood, Legacy
                </div>
                Kiira College Butiki offers an exceptional educational
                experience for boys in Jinja, established in 1959. Here are five
                compelling words that encapsulate why parents should consider
                this school:
              </div>
            </div>
          </div>
        )}
      </>
    </NextUIProvider>
  );
}
