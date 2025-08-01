import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  FaChartBar, 
  FaUsers,
  FaCalendarAlt,
  FaBook,
  FaComments,
  FaCog,
  FaBars,
  FaTimes
} from "react-icons/fa";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { path: "/", icon: <FaChartBar />, label: "Dashboard" },
    { path: "/mentees", icon: <FaUsers />, label: "My Mentees" },
    { path: "/sessions", icon: <FaCalendarAlt />, label: "Sessions" },
    { path: "/resources", icon: <FaBook />, label: "Resources" },
    { path: "/messages", icon: <FaComments />, label: "Messages" },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button 
        onClick={toggleSidebar}
        className="fixed lg:hidden z-50 top-4 left-4 p-2 rounded-md bg-primary-600 text-white"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      <aside 
        className={`
          fixed lg:static z-40
          bg-dark-500 text-white h-full w-64 px-4 py-4 shadow-lg
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="flex justify-between items-center mb-6 px-2 py-2">
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-bold text-primary-400">Mentor<span className="text-white">Dash</span></h1>
          </div>
          <button 
            onClick={toggleSidebar}
            className="lg:hidden text-gray-300 hover:text-white"
          >
            <FaTimes />
          </button>
        </div>
        
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                onClick={() => window.innerWidth < 1024 && setIsOpen(false)}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? "bg-primary-600 text-white"
                    : "text-gray-300 hover:bg-dark-400 hover:text-white"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="text-sm">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
        
        <div className="mt-auto pt-4 border-t border-dark-400">
          <Link
            to="/settings"
            onClick={() => window.innerWidth < 1024 && setIsOpen(false)}
            className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-dark-400 hover:text-white transition-colors"
          >
            <FaCog />
            <span className="text-sm">Settings</span>
          </Link>
        </div>
      </aside>
    </>
  );
}