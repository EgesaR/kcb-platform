const Footer = () => {
  return (
    <footer className="absolute bottom-[-375vh] sm:bottom-[-335vh] left-0 z-[10] w-full h-40 flex items-center justify-center">
      <div className="flex flex-col w-full h-[60%] px-2 py-3 -mt-12 gap-11 sm:w-[70%]">
        <div className="flex justify-center relative">
          <label className="text-xl sm:text-2xl text-[#04363f] font-semibold flex justify-center items-center">
            KCB
          </label>
          <div className="flex gap-2 ml-auto justify-end w-1/2 sm:gap-6">
            <input
              placeholder="Enter your email"
              className="hidden sm:block w-1/2 sm:w-[80%] border-2 border-[#04363f] text-[#04363f] rounded-lg px-2 py-2"
            />
            <button className="hidden sm:block py-1.5 px-4 bg-[#04363f] rounded-xl">
              Subscribe
            </button>
            <button className="py-1.5 px-4 bg-[#04363f] rounded-xl">
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex">
          <p className="ml-auto text-sm sm:text-base text-slate-500 font-medium">
            &copy; Kiira College Butiki. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
