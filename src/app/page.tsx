import Image from "next/image";
import Hero from "../components/Portifolio/Hero";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] w-full h-screen">
      <Hero>
        <div className="w-full h-full bg-green-800 rounded-3xl flex justify-center items-center flex-col">
          <h1 className="text-2xl text-center text-slate-200 font-bold sm:text-4xl">
            Motto: "Discipline and Hardwork"
          </h1>
          <h3 className="mt-3">Greetings to you and greetings to you all</h3>
        </div>
      </Hero>
      <Hero>
        <div>
          <h1>WELCOME TO THE HILL OF THE INTELLUAL HORIZONS PLATFORM.</h1>
          <h1>VISION:</h1>
          <p>old sho of the whomsimziuqimmizqohdgeyuiomzoxjeuhixcdfwqwsj</p>
          <h3>MISSION:</h3>
          <p>old sho of the whomsimziuqimmizqohdgeyuiomzoxjeuhixcdfwqwsj</p>
          <h4>CORE VALUES:</h4>
          <p>old sho of the whomsimziuqimmizqohdgeyuiomzoxjeuhixcdfwqwsj</p>
        </div>
        <div className="flex items-center">
          {" "}
          <img src="https://images.app.goo.gl/3xYYEVTXYgkQqtwM6"></img>
        </div>
        <div>
          <h1> THE FEES STRUCTURE</h1>
          <h1> term three</h1>
          <p>
            S1 student:ooo<br>S2 student:0000</br><br>S3 student:shs 14400000</br><br> S4 student:0000</br><br> S5 student:0000</br><br> S6 student:0000</br>
          </p>
        </div>
      </Hero>
    </div>
  );
}
