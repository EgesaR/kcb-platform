import React from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white transition-transform duration-300 ease-in-out transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex items-center justify-between p-4">
        <h2 className="text-xl font-bold">Sidebar</h2>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-200">
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
      <nav className="mt-6">
        <ul>
          <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer">
            <a href="#">Dashboard</a>
          </li>
          <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer">
            <a href="#">Reports</a>
          </li>
          <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer">
            <a href="#">Settings</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
