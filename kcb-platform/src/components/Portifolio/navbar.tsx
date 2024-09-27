import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  return (
    <div className="w-full h-20 px-0 sm:px-2 flex items-center text-black fixed top-0 left-0 dark:bg-[#0a0a0a] dark:text-white">
      <h2 className="text-3xl font-bold hidden sm:block">
        Kirra College Butiki
      </h2>
      <h2 className="text-3xl font-bold block sm:hidden">KCB</h2>
      
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
      </div>
      <div className="hidden sm:flex gap-6 ml-auto font-semibold">
        <button>contacts</button>
        <button className="bg-green-900 rounded-full h-3/4 w-[62.5px] text-sm sm:text-lg sm:w-[125px] py-1.5 px-2 text-white hover:bg-bg-green-700">
          get started
        </button>
      </div>
      <div className="ml-auto font-semibold">
        <FontAwesomeIcon icon={faEnvelope} />
      </div>
    </div>
  );
};

export default NavBar;
