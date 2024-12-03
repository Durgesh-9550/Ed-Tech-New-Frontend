import React from "react";
import coursesData from "../../../data/courses-data";
import { useNavigate } from "react-router-dom";

const Course = () => {
    const navigate = useNavigate();

    const handleBuyNow = () => {
        navigate('/payment')
    }

    return (
        <div className="px-16 py-8">
            {/* Heading */}
            <h2 className="text-4xl font-bold text-center mb-8">Courses We Offer</h2>

            {/* Courses Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center ">
                {coursesData.map((course) => (
                    <div
                        key={course.id}
                        className="bg-white shadow-lg rounded-md w-[419px] h-[515px] flex flex-col"
                    >
                        {/* Course Image with Name and Description Overlay */}
                        <div className="relative w-full h-[205px] ">
                            <img
                                src={course.image}
                                alt={course.name}
                                className="w-full h-full object-cover rounded-t-md" // Added rounded-t-md for top corners
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white rounded-t-md">
                                <h3 className="text-2xl font-bold">{course.name}</h3>
                                <p className="text-sm mt-2">{course.description}</p>
                            </div>
                        </div>

                        {/* Course Highlights */}
                        <div className="p-4 flex-grow">
                            <p className="text-lg font-semibold mb-2">Course Highlights</p>
                            <ul className="list-none pl-0 mb-4">
                                {course.highlights.map((highlight, index) => (
                                    <li
                                        key={index}
                                        className="text-gray-700 text-sm flex items-center space-x-2"
                                    >
                                        <span className="text-xl text-gray-600">▸</span>
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Learn More Button */}
                        <div className="mt-auto">
                            <button
                                onClick={handleBuyNow}
                                className="h-[68px] bg-gradient-to-r from-[#00349C] via-[#00349C] to-[#0651E8] text-white w-full py-2 rounded-b-lg hover:opacity-90"
                            >
                                Buy Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Course;
