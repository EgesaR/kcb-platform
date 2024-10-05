import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const NavBar = ({ isSidebarOpen, setSidebarOpen}) => {
  return (
    <div className="w-full h-20 px-2 sm:px-2 flex items-center text-black fixed top-0 left-0 bg-white dark:bg-[#000] z-[220] dark:text-white">
      <h2 className="text-xl font-bold sm:text-3xl animate-fade-down animate-once animate-duration-[1000ms] animate-delay-[250ms]">
        Kirra College Butiki
      </h2>
      <div className="hidden sm:flex gap-8 mx-auto font-semibold">
        <Link
          href="#"
          className="text-lg animate-fade-down animate-once animate-duration-[1000ms] animate-delay-[350ms]"
        >
          Home
        </Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link
          href="#"
          className="text-lg animate-fade-down animate-once animate-duration-[1000ms] animate-delay-[450ms]"
        >
          About
        </Link>
        <Link
          href="#"
          className="text-lg animate-fade-down animate-once animate-duration-[1000ms] animate-delay-[550ms]"
        >
          Around the college
        </Link>
        <Link
          href="#"
          className="text-lg animate-fade-down animate-once animate-duration-[1000ms] animate-delay-[650ms]"
        >
          Admission
        </Link>
      </div>
      <div className="hidden sm:flex gap-6 ml-auto font-semibold">
        <button className="animate-fade-down animate-once animate-duration-[1000ms] animate-delay-[750ms]">
          contacts
        </button>
        <button
          className="bg-green-900 rounded-full h-3/4 w-[62.5px] sm:w-[125px] py-1.5 px-2 text-white 
        hover:bg-bg-green-700 animate-fade-down animate-once animate-duration-[1000ms] animate-delay-[850ms]"
        >
          Log In
        </button>
      </div>
      <button
        id="hs-dropdown-custom-trigger"
        type="button"
        className="hs-dropdown-toggle ml-auto w-12 h-12 flex items-center justify-center font-medium rounded-lg bg-transparent 
        text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none 
        dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 animate-fade-down animate-once
         animate-duration-[1000ms] animate-delay-[950ms]"
        aria-haspopup="menu"
        aria-expanded="false"
        aria-label="Dropdown"
        onClick={() => setSidebarOpen(true)}
      >
        <FontAwesomeIcon icon={faBars} className={`size-5`} />
      </button>
    </div>
  );
};

const MobileSlideBarMenu = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full blur-sm">
      Hello 

    </div>
  );
}
export default NavBar;
