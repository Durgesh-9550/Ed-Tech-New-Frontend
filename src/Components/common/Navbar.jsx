import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assests/navbar/logo.png';

const Navbar = () => {
    const navigate = useNavigate();
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="flex justify-between items-center p-2 px-4 md:px-12 lg:px-24 fixed top-0 left-0 w-full z-10 bg-white shadow-md">
            {/* Left side - Logo */}
            <div>
                <Link to="/">
                    <img
                        src={logo}
                        alt="Company Logo"
                        className="h-8 sm:h-10"
                    />
                </Link>
            </div>

            {/* Right Side - Navigation Links */}
            <div className="hidden sm:flex items-center gap-4 space-x-6">
                <Link to="/" className="text-gray-800 p-2 text-sm sm:text-base lg:text-lg font-open-sauce hover:text-blue-600">
                    Home
                </Link>

                <Link to="/courses" className="text-gray-800 p-2 text-sm sm:text-base lg:text-lg font-open-sauce hover:text-blue-600">
                    Courses
                </Link>

                <Link to="/about-us" className="text-gray-800 p-2 text-sm sm:text-base lg:text-lg font-open-sauce hover:text-blue-600">
                    About Us
                </Link>

                {/* <Link to="/contact-us" className="text-gray-800 p-2 text-sm sm:text-base lg:text-lg font-open-sauce hover:text-blue-600">
                    Contact Us
                </Link> */}

                <button
                    onClick={() => navigate("/login")}
                    className="ml-4 px-4 py-2 sm:px-6 sm:py-2 bg-blue-600 text-white rounded hover:bg-blue-800 transition-colors text-sm sm:text-base">
                    Login
                </button>

                <button
                    onClick={() => navigate("/sign-up")}
                    className="ml-2 px-4 py-2 sm:px-6 sm:py-2 bg-green-600 text-white rounded hover:bg-green-800 transition-colors text-sm sm:text-base">
                    Sign Up
                </button>
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
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                            onClick={() => setMobileMenuOpen(false)}
                        >
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
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            About Us
                        </Link>
                        <Link
                            to="/contact-us"
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Contact Us
                        </Link>
                        <button
                            onClick={() => {
                                navigate("/login");
                                setMobileMenuOpen(false);
                            }}
                            className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                            Login
                        </button>
                        <button
                            onClick={() => {
                                navigate("/sign-up");
                                setMobileMenuOpen(false);
                            }}
                            className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                            Sign Up
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
