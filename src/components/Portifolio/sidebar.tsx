import Link from 'next/link';
import React from 'react';


const Sidebar= ({ isOpen, onClose }) => {
  return (
    <div className={`h-[100vh] w-full fixed top-0 left-0 bg-black/70 z-[240] ${isOpen ? "" : "hidden"}`}>
        <div
      className={` top-0 left-0 z-[240] h-screen w-64 bg-gray-800 text-white transition-transform duration-300 ease-in-out transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex items-center justify-between p-4">
        <h2 className="text-xl font-bold">Menu</h2>
        <button onClick={() => onClose(false)} className="text-gray-400 hover:text-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <nav className="mt-6 pt-5 relative h-[90%]">
        <ul>
          <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer">
            <Link onClick={() => onClose(false)} href="/">Home</Link>
          </li>
          <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer">
            <Link onClick={() => onClose(false)} href="/about">About</Link>
          </li>
          <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer">
            <Link onClick={() => onClose(false)} href="/around_the_college">Around the college</Link>
          </li>
          <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer">
            <Link onClick={() => onClose(false)} href="/admission">Admission</Link>
          </li>
        </ul>
        <div className="absolute bottom-10 left-0 w-full h-6 flex items-center justify-between bg-red-600">
          <button className="bg-green-900 px-4 py-1.5 rounded-full text-white hover:bg-green-700">
            <Link onClick={() => onClose(false)} href="/contactus">contactus us</Link>
          </button>
          <button
            className="bg-green-900 rounded-full text-white hover:bg-green-700 px-4 py-1.5"
          >
            <Link onClick={() => onClose(false)} href="/auth/login">Log In</Link>
          </button>
        </div>
      </nav>
    </div>
    </div>
  );
};

export default Sidebar;
