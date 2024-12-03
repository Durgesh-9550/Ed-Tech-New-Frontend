import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assests/navbar/logo.png';

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <nav className="flex justify-between items-center p-2 px-24 fixed top-0 left-0 w-full z-10 bg-white shadow-md">
            {/* Fixing position, adding background color & shadow */}

            {/* Left side - Logo */}
            <div>
                <Link to="/">
                    <img
                        src={logo}
                        alt="Company Logo"
                        className="h-8"
                    />
                </Link>
            </div>

            {/* Right Side - Navigation Links */}
            <div className="flex items-center gap-4 space-x-6">
                <Link to="/" className="text-gray-800 p-2 text-lg font-open-sauce hover:text-blue-600">
                    Home
                </Link>

                <Link to="/courses" className="text-gray-800 p-2 text-lg font-open-sauce hover:text-blue-600">
                    Courses
                </Link>

                <Link to="/about-us" className="text-gray-800 p-2 text-lg font-open-sauce hover:text-blue-600">
                    About Us
                </Link>

                <Link to="/contact-us" className="text-gray-800 p-2 text-lg font-open-sauce hover:text-blue-600">
                    Contact Us
                </Link>

                <button
                    onClick={() => navigate("/login")}
                    className="ml-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-800 transition-colors">
                    Login
                </button>

                <button
                    onClick={() => navigate("/sign-up")}
                    className="ml-2 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-800 transition-colors">
                    Sign Up
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
