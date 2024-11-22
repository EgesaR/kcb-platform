import Image from "next/image";
import {Spinner} from "@nextui-org/react";
import { useEffect } from "react";
// components/SplashScreen.js
const SplashScreen = ({setShowSplash}) => {
  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false)
    }, 9000)
  })
  return (
    <div className="h-screen w-full flex flex-col gap-12 sm:gap-8 justify-center items-center bg-white overflow-hidden">
      <div className="rounded-full grid place-items-center w-[260px] h-[260px] overflow-hidden">
      <Image alt="Kiira College Butiki badge" src="/badge.jpg" width={204} height={204} />
      </div>
      <Spinner color="success"/>
    </div>
  );
};

export default SplashScreen;
