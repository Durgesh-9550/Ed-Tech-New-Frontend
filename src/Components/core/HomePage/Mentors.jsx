import React, { useState } from "react";
import mentorsData from "../../../data/mentors-data";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Mentors = () => {
    // State to track the current starting index of visible mentors
    const [currentIndex, setCurrentIndex] = useState(0);

    // Number of cards to show per page
    const cardsPerPage = 3;

    // Function to navigate to the previous set of cards
    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + mentorsData.length) % mentorsData.length
        );
    };

    // Function to navigate to the next set of cards
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % mentorsData.length);
    };

    // Calculate the visible mentors cyclically
    const visibleMentors = Array.from({ length: cardsPerPage }).map((_, i) =>
        mentorsData[(currentIndex + i) % mentorsData.length]
    );

    return (
        <div className="px-16 py-8">
            {/* Heading */}
            <h2 className="text-4xl font-bold text-center mb-4">Meet Your Mentors</h2>
            <p className="text-center text-lg mb-8 text-gray-700">
                Learn from the best minds in the industry, shaping your journey to success
            </p>

            {/* Mentors Cards */}
            <div className="flex justify-center gap-8 mt-8">
                {visibleMentors.map((mentor) => (
                    <div
                        key={mentor.id}
                        className="bg-white border border-gray-300 shadow-lg w-[419px] h-[419px] rounded-lg p-8 flex flex-col items-center"
                    >
                        {/* Mentor Image */}
                        <img
                            src={mentor.image}
                            alt={mentor.name}
                            className="w-[180px] h-[180px] rounded-full object-cover mb-4"
                        />
                        {/* Mentor Name */}
                        <h3 className="text-2xl font-semibold text-blue-600 mt-4">
                            {mentor.name}
                        </h3>
                        {/* Mentor Company Logo */}
                        <div className="flex items-center mt-6">
                            <img
                                src={mentor.companyLogo}
                                alt={mentor.company}
                                className="w-32 h-16"
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-center items-center gap-6 mt-6">
                <button
                    onClick={handlePrev}
                    className="p-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                    <FaArrowLeft />
                </button>
                
                <button
                    onClick={handleNext}
                    className="p-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default Mentors;
