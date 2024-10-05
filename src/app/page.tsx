import Image from "next/image";
import Hero from "../components/Portifolio/Hero";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] w-full h-screen">
      <div className="fllex flex-col gap-20">
      <Hero>
        <div className="w-full h-full bg-green-800 rounded-3xl flex justify-center items-center flex-col">
          <h1 className="text-2xl text-center text-slate-200 font-bold sm:text-4xl animate-fade-up animate-once animate-duration-700 animate-delay-1000">
            Motto: "Discipline and Hardwork"
          </h1>
          <h3 className="mt-3 animate-fade-up animate-once animate-duration-1000 animate-delay-[1000ms]">
            Greetings to you and greetings to you all
          </h3>
        </div>
      </Hero>
      <Hero>
        <div className="h-full w-[45%] flex flex-col justify-center">
          <h1 className="text-2xl font-semibold mb-8 animate-fade-up animate-once animate-duration-700 animate-delay-1000">
            WELCOME TO THE HILL OF THE INTELLUAL HORIZONS PLATFORM.
          </h1>
          <h1 className="text-xl font-semibold animate-fade-up animate-once animate-duration-700 animate-delay-1000">
            VISION:
          </h1>
          <p className="text-sm mb-4 animate-fade-down animate-once animate-duration-700 animate-delay-1000">
            old sho of the whomsimziuqimmizqohdgeyuiomzoxjeuhixcdfwqwsj
          </p>
          <h3 className="text-xl font-semibold animate-fade-up animate-once animate-duration-700 animate-delay-1000">
            MISSION:
          </h3>
          <p className="mb-4 animate-fade-down animate-once animate-duration-700 animate-delay-1000">
            old sho of the whomsimziuqimmizqohdgeyuiomzoxjeuhixcdfwqwsj
          </p>
          <h4 className="text-xl font-semibold animate-fade-up animate-once animate-duration-700 animate-delay-1000">
            CORE VALUES:
          </h4>
          <p className="mb-4 animate-fade-down animate-once animate-duration-700 animate-delay-1000">
            old she
          </p>
        </div>
        <div className="flex h-full w-[55%] items-center justify-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0TG6I-bbD3yxPd5W6GEU1u36Q6SRAjDSvFQ&s"
            className="h-[65%] w-[65%] rounded-2xl animate-fade-left animate-once animate-duration-700 animate-delay-1000"
          />
        </div>
      </Hero>
      Hello World
      </div>
    </div>
  );
}
