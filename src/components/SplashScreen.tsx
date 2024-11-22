// components/SplashScreen.tsx
import Image from "next/image";
import { Spinner } from "@nextui-org/react";
import { useEffect } from "react";

// Define the props interface
interface SplashScreenProps {
  setShowSplash: (value: boolean) => void; // Function type with a boolean parameter
}

const SplashScreen: React.FC<SplashScreenProps> = ({ setShowSplash }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 9000);

    // Cleanup timer on unmount
    return () => clearTimeout(timer);
  }, [setShowSplash]); // Dependency ensures effect re-runs if `setShowSplash` changes

  return (
    <div className="h-screen w-full flex flex-col gap-12 sm:gap-8 justify-center items-center bg-white overflow-hidden">
      <div className="rounded-full grid place-items-center w-[260px] h-[260px] overflow-hidden">
        <Image
          alt="Kiira College Butiki badge"
          src="/badge.jpg"
          width={204}
          height={204}
        />
      </div>
      <Spinner color="success" />
    </div>
  );
};

export default SplashScreen;
