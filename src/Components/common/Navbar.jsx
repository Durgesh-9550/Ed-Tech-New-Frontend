import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assests/navbar/logo.png";
import AuthContext from "../../context/AuthContext";

import { FaHome, FaSignOutAlt, FaMapSigns } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { MdContactPhone, MdDashboard } from "react-icons/md";
import { CiLogin } from "react-icons/ci";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { isLoggedIn, user, logout } = useContext(AuthContext);

  return (
    <nav className="flex justify-between items-center p-2 px-4 md:px-12 lg:px-24 fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div>
        <Link to="/">
          <img src={logo} alt="Company Logo" className="h-8 sm:h-10" />
        </Link>
      </div>

      <div className="hidden sm:flex items-center gap-4 space-x-6">
        <Link
          to="/"
          className="text-gray-800 p-2 text-sm sm:text-base lg:text-lg font-open-sauce hover:text-blue-600"
        >
          Home
        </Link>

        {/* <Link to="/courses" className="text-gray-800 p-2 text-sm sm:text-base lg:text-lg font-open-sauce hover:text-blue-600">
                    Courses
        </Link> */}

        <Link
          to="/about-us"
          className="text-gray-800 p-2 text-sm sm:text-base lg:text-lg font-open-sauce hover:text-blue-600"
        >
          About Us
        </Link>

        <Link
          to="/contact-us"
          className="text-gray-800 p-2 text-sm sm:text-base lg:text-lg font-open-sauce hover:text-blue-600"
        >
          Contact Us
        </Link>

        {isLoggedIn ? (
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="flex items-center focus:outline-none"
            >
              <img
                src={user?.image}
                alt="Profile"
                className="w-10 h-10 rounded-full border border-gray-300"
              />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md py-2 z-20">
                <button
                  onClick={() => navigate("/dashboard")}
                  className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Dashboard
                </button>
                <button
                  onClick={() => {
                    logout();
                    setDropdownOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <div>
            <button
              onClick={() => navigate("/login")}
              className="ml-4 px-4 py-2 sm:px-6 sm:py-2 bg-blue-600 text-white rounded hover:bg-blue-800 transition-colors text-sm sm:text-base"
            >
              Login
            </button>

            <button
              onClick={() => navigate("/sign-up")}
              className="ml-2 px-4 py-2 sm:px-6 sm:py-2 bg-green-600 text-white rounded hover:bg-green-800 transition-colors text-sm sm:text-base"
            >
              Sign Up
            </button>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      <div className="sm:hidden relative">
        <button
          className="text-gray-800 text-xl focus:outline-none"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>

        {isMobileMenuOpen && (
          <div className="absolute top-12 right-0 w-48 bg-white shadow-md rounded-md py-2 z-20">
            <Link
              to="/"
              className="px-4 py-2 text-gray-800 hover:bg-gray-100 flex gap-2 items-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FaHome />
              Home
            </Link>
            {/* <Link
                            to="/courses"
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Courses
                        </Link> */}
            <Link
              to="/about-us"
              className="flex gap-2 items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FcAbout />
              About Us
            </Link>
            <Link
              to="/contact-us"
              className="flex gap-2 items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <MdContactPhone />
              Contact Us
            </Link>
            {isLoggedIn ? (
              <div>
                <button
                  onClick={() => navigate("/dashboard")}
                  className="flex gap-2 items-center w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  <MdDashboard />
                  Dashboard
                </button>
                <button
                  onClick={() => {
                    logout();
                    setDropdownOpen(false);
                  }}
                  className="flex gap-2 items-center w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  <FaSignOutAlt />
                  Logout
                </button>
              </div>
            ) : (
              <div>
                <button
                  onClick={() => {
                    navigate("/login");
                    setMobileMenuOpen(false);
                  }}
                  className="flex gap-2 items-center w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  <CiLogin />
                  Login
                </button>
                <button
                  onClick={() => {
                    navigate("/sign-up");
                    setMobileMenuOpen(false);
                  }}
                  className="flex gap-2 items-center w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  <FaMapSigns />
                  Sign Up
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
