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
              <div className="h-[90vh] pt-44 flex flex-col items-center">
                <div className="text-4xl font-bold text-center bg-green-950 w-[90%] h-[60%] grid place-items-center rounded-xl">
                  Discipline, Hardwork, Excellence, Brotherhood, Legacy
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    </NextUIProvider>
  );
}
