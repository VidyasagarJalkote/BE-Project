import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaSignOutAlt, FaBell, FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-white shadow-sm border-b border-gray-200">
      {/* Left side - Logo/Title */}
      <div className="flex items-center space-x-4">
        <h1 className="text-lg font-bold text-primary-600 hidden md:block">MentorDashboard</h1>
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-8 pr-3 py-1.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-transparent text-sm w-full md:w-64"
          />
        </div>
      </div>

      {/* Right side - Navigation */}
      <div className="flex items-center space-x-4">
        <button className="relative text-gray-600 hover:text-primary-600 p-1">
          <FaBell className="text-lg" />
          <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
        </button>

        <div className="hidden md:flex items-center space-x-4">
          <Link 
            to="/" 
            className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors"
          >
            <FaHome className="text-lg" />
            <span className="text-sm font-medium">Home</span>
          </Link>
          <Link 
            to="/profile" 
            className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors"
          >
            <FaUser className="text-lg" />
            <span className="text-sm font-medium">Profile</span>
          </Link>
          <Link 
            to="/logout" 
            className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors"
          >
            <FaSignOutAlt className="text-lg" />
            <span className="text-sm font-medium">Logout</span>
          </Link>
        </div>

        {/* Mobile menu button (will show on small screens) */}
        <div className="md:hidden flex items-center">
          <button className="text-gray-700 hover:text-primary-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}