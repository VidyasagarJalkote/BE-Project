import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaChartBar,
  FaUsers,
  FaCalendarAlt,
  FaBook,
  FaComments,
  FaCog,
  FaChevronRight,
  FaChevronLeft,
  FaGraduationCap
} from "react-icons/fa";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  // Check screen size and handle resize
  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 1024);
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Auto-close on mobile when navigating
  useEffect(() => {
    if (isMobile) setIsOpen(false);
  }, [location.pathname, isMobile]);

  const navItems = [
    { path: "/", icon: <FaChartBar />, label: "Dashboard" },
    { path: "/mentees", icon: <FaUsers />, label: "My Mentees" },
    { path: "/sessions", icon: <FaCalendarAlt />, label: "Sessions" },
    { path: "/resources", icon: <FaBook />, label: "Resources" },
    { path: "/messages", icon: <FaComments />, label: "Messages" },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && isMobile && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside 
        className={`
          fixed lg:relative z-50
          bg-dark-500 text-white h-screen flex flex-col
          transition-all duration-300 ease-in-out
          ${isOpen ? 'w-64' : 'w-20'}
          ${isMobile ? 'left-0' : 'left-0'}
          ${!isOpen && isMobile ? '-translate-x-full' : 'translate-x-0'}
        `}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-dark-400">
          {isOpen ? (
            <div className="flex items-center space-x-2">
              <FaGraduationCap className="text-primary-400 text-xl" />
              <h1 className="text-xl font-bold text-primary-400 whitespace-nowrap">
                Mentor<span className="text-white">Dash</span>
              </h1>
            </div>
          ) : (
            <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center">
              <FaGraduationCap className="text-white text-sm" />
            </div>
          )}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white p-1 rounded-full hover:bg-dark-400"
          >
            {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`
                    flex items-center rounded-lg py-3 px-3
                    transition-colors hover:bg-dark-400
                    ${location.pathname === item.path ? 'bg-primary-600 text-white' : 'text-gray-300'}
                  `}
                >
                  <span className="text-lg flex-shrink-0">{item.icon}</span>
                  {isOpen && (
                    <span className="ml-3 text-sm whitespace-nowrap overflow-hidden overflow-ellipsis">
                      {item.label}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-dark-400">
          <Link
            to="/settings"
            className={`
              flex items-center rounded-lg py-2 px-3
              transition-colors hover:bg-dark-400 text-gray-300
              ${location.pathname === '/settings' ? 'bg-primary-600 text-white' : ''}
            `}
          >
            <FaCog className="text-lg flex-shrink-0" />
            {isOpen && <span className="ml-3 text-sm">Settings</span>}
          </Link>
        </div>
      </aside>

      {/* Mobile Menu Button */}
      {!isOpen && isMobile && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 left-4 z-40 bg-primary-600 text-white p-3 rounded-full shadow-lg"
        >
          <FaChevronRight />
        </button>
      )}
    </>
  );
}