import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = ({ isSidebarOpen, setSidebarOpen}) => {
  return (
    <div className="w-full h-20 px-0 sm:px-2 flex items-center text-black fixed top-0 left-0 bg-white dark:bg-[#0a0a0a] dark:text-white px-8">
      <h2 className="text-xl font-bold sm:text-3xl">Kirra College Butiki</h2>
      <div className="hidden sm:flex gap-8 mx-auto font-semibold">
        <a href="#" className="text-lg">
          Home
        </a>
        <a href="#" className="text-lg">
          About
        </a>
        <a href="#" className="text-lg">
          Around the college
        </a>
        <a href="#" className="text-lg">
          Admission
        </a>
      </div>
      <div className="hidden sm:flex gap-6 ml-auto font-semibold">
        <button>contacts</button>
        <button className="bg-green-900 rounded-full h-3/4 w-[62.5px] sm:w-[125px] py-1.5 px-2 text-white hover:bg-bg-green-700">
          Log In
        </button>
      </div>
      <button
        id="hs-dropdown-custom-trigger"
        type="button"
        className="hs-dropdown-toggle ml-auto w-12 h-12 flex items-center justify-center font-medium rounded-lg bg-transparent text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
        aria-haspopup="menu"
        aria-expanded="false"
        aria-label="Dropdown"
        onClick={() => setSidebarOpen(true)}
      >
        <FontAwesomeIcon
          icon={faBars}
          className={`size-5`}
        />
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
