import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const NavBar = ({ setSidebarOpen}) => {
  return (
    <div className="w-full h-20 fixed px-2 sm:px-2 flex items-center text-black top-0 left-0 bg-white dark:bg-black z-[220] dark:text-white">
      <h2 className="hidden sm:hidden lg:flex text-xl font-bold sm:text-xl animate-fade-down animate-once animate-duration-[1000ms] animate-delay-[250ms]">
        Kiira College Butiki
      </h2>
      <h2 className="flex lg:hidden text-xl font-bold sm:text-xl animate-fade-down animate-once animate-duration-[1000ms] animate-delay-[250ms]">
        KCB
      </h2>
      <div className="hidden md:flex lg:flex items-center gap-8 sm:pl-10 mx-auto font-semibold">
        <Link
          href="/"
          className="text-lg dark:text-white flex justify-center animate-fade-down animate-once animate-duration-[1000ms] animate-delay-[350ms]"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-lg dark:text-white flex justify-center animate-fade-down animate-once animate-duration-[1000ms] animate-delay-[450ms]"
        >
          About
        </Link>
        <Link
          href="/around_the_college"
          className="text-lg dark:text-white flex justify-center animate-fade-down animate-once animate-duration-[1000ms] animate-delay-[550ms]"
        >
          Around the college
        </Link>
        <Link
          href="/admissions"
          className="text-lg dark:text-white flex justify-center animate-fade-down animate-once animate-duration-[1000ms] animate-delay-[650ms]"
        >
          Admission
        </Link>
      </div>
      <div className="hidden md:flex sm:flex gap-6 pl-2 font-semibold">
        <button className="animate-fade-down animate-once animate-duration-[1000ms] animate-delay-[750ms]">
          <Link
          href="/contactus"
        >
          Contact Us
        </Link>
        </button>
        <button
          className="bg-green-900 rounded-full h-3/4 w-[62.5px] sm:w-[125px] py-1.5 px-2 text-white 
        hover:bg-bg-green-700 animate-fade-down animate-once animate-duration-[1000ms] animate-delay-[850ms]"
        >
          <Link
          href="/auth/login"
        >
          Log In
        </Link>
        </button>
      </div>
      <button
        id="hs-dropdown-custom-trigger"
        type="button"
        className="hs-dropdown-toggle w-12 h-12 flex md:hidden sm:hidden items-center justify-center absolute right-0 font-medium rounded-lg bg-transparent 
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

export default NavBar;
