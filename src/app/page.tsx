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
                <div className="text-center bg-green-950 w-[90%] h-[60%] flex flex-col items-center justify-center rounded-xl">
                  <label className="text-xl sm:text-4xl font-bold">
                    Discipline, Hardwork, Excellence, Brotherhood, Legacy
                  </label>
                  <div className="w-[90%] text-center text-[18px] mt-12 font-['Sevillana']">
                    <i>Since 1959</i>
                  </div>
                </div>
              </div>
              <div className="h-[90vh] flex flex-col items-center">
                Hello
              </div>
            </div>
          </div>
        )}
      </>
    </NextUIProvider>
  );
}
