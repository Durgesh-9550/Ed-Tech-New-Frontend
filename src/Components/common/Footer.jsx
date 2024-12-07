import React from "react";
import { FaLinkedin, FaYoutube, FaInstagram, FaQuora } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import footerData from "../../data/footer-data";
import logo from '../../assests/navbar/logo.png'
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white py-10 px-8">
            <div className="max-w-7xl mx-auto">
                {/* Main Sections */}
                <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
                    {/* Logo and Description */}
                    <div>
                        <Link to="/">
                            <img
                                src={logo}
                                alt="Company Logo"
                                className="h-8"
                            />
                        </Link>
                        <p className="md:w-[40%] text-sm  mt-2">{footerData.description}</p>
                    </div>

                    {/* Footer Links */}
                    {footerData.sections.map((section, index) => (
                        <div key={index}>
                            <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                            <ul>
                                {section.links.map((link, idx) => (
                                    <li key={idx} className="mb-2">
                                        <a
                                            href={link.url}
                                            className="text-sm text-gray-300 hover:underline"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <hr className="border-gray-700 mb-8" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Copyright Text */}
                    <p className="text-sm text-gray-400 mb-4 md:mb-0">
                        &copy; 2024 Elevate My Skill Pvt. Ltd. All rights reserved.
                    </p>

                    {/* Social Media Icons */}
                    <div className="flex gap-4">
                        <a
                            href="https://www.linkedin.com/company/elevate-my-skill/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white text-2xl"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://www.youtube.com/@ems_grow"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white text-2xl"
                        >
                            <FaYoutube />
                        </a>
                        <a
                            href="https://x.com/ems_grow"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white text-2xl"
                        >
                            <FaXTwitter />
                        </a>
                        {/* <a
                            href="https://quora.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white text-2xl"
                        >
                            <FaQuora />
                        </a> */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
