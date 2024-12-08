import React, { useState, useEffect } from "react";
import mentorsData from "../../../data/mentors-data";
import { FaArrowLeft, FaArrowRight, FaLinkedin } from "react-icons/fa6";

const Mentors = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerPage, setCardsPerPage] = useState(3); // Default to 3 for wider screens

    // Update cardsPerPage based on window size
    useEffect(() => {
        const updateCardsPerPage = () => {
            const width = window.innerWidth;
            setCardsPerPage(width >= 768 ? 3 : 1); // 3 cards for md and above, 1 card for sm
        };

        // Initial setting
        updateCardsPerPage();

        // Attach resize event listener
        window.addEventListener("resize", updateCardsPerPage);

        // Cleanup event listener
        return () => window.removeEventListener("resize", updateCardsPerPage);
    }, []);

    // Navigate to the previous set of cards
    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - cardsPerPage + mentorsData.length) % mentorsData.length
        );
    };

    // Navigate to the next set of cards
    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + cardsPerPage) % mentorsData.length
        );
    };

    // Calculate the visible mentors cyclically
    const visibleMentors = Array.from({ length: cardsPerPage }).map((_, i) =>
        mentorsData[(currentIndex + i) % mentorsData.length]
    );

    return (
        <div className="px-4 sm:px-8 lg:px-16 py-8">
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4">
                Meet Your Mentors
            </h2>
            <p className="text-center text-sm sm:text-lg mb-8 text-gray-700">
                Learn from the best minds in the industry, shaping your journey to success
            </p>

            {/* Mentors Cards */}
            <div className="flex justify-center gap-6 mt-8">
                {visibleMentors.map((mentor) => (
                    <div
                        key={mentor.id}
                        className="bg-white border border-gray-300 shadow-lg w-full max-w-[360px] sm:max-w-[400px] lg:max-w-[419px] h-auto rounded-lg p-6 flex flex-col items-center relative"
                    >
                        {/* Mentor Image */}
                        <div className="relative">
                            <img
                                src={mentor.image}
                                alt={mentor.name}
                                className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] rounded-full object-cover mb-4"
                            />
                            {/* LinkedIn Icon */}
                            <a
                                href={mentor.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute bottom-4 right-6 bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 transition-all"
                                title={`Connect with ${mentor.name} on LinkedIn`}
                            >
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                        {/* Mentor Name */}
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-blue-600 mt-4 text-center">
                            {mentor.name}
                        </h3>
                        <p className="text-sm text-center text-gray-500 mt-2 -mb-4">
                            {mentor.position}
                        </p>
                        {/* Mentor Company Logo */}
                        <div className="flex items-center mt-6">
                            <img
                                src={mentor.companyLogo}
                                alt={mentor.company}
                                className="w-24 h-12 sm:w-32 sm:h-16 object-contain"
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center gap-4 sm:gap-6 mt-6">
                <button
                    onClick={handlePrev}
                    className="p-3 sm:p-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
                >
                    <FaArrowLeft size={20} />
                </button>

                <button
                    onClick={handleNext}
                    className="p-3 sm:p-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
                >
                    <FaArrowRight size={20} />
                </button>
            </div>
        </div>
    );
};

export default Mentors;
