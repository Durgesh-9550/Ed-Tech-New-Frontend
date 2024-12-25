import React from "react";
import coursesData from "../../../data/courses-data";
import { useNavigate, useParams } from "react-router-dom";

const Course = () => {
    const navigate = useNavigate();
    const courseId = useParams();

    const handleBuyNow = () => {
        navigate('/payment');
    };

    return (
        <div className="px-4 sm:px-8 lg:px-16 py-8">
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8">
                Courses We Offer
            </h2>

            {/* Courses Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                {coursesData.map((course) => (
                    <div
                        key={course.id}
                        className="bg-white shadow-lg rounded-md w-full max-w-[400px] flex flex-col"
                    >
                        {/* Course Image with Name and Description Overlay */}
                        <div className="relative w-full h-[200px]">
                            <img
                                src={course.image}
                                alt={course.name}
                                className="w-full h-full object-cover rounded-t-md"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white rounded-t-md">
                                <h3 className="text-xl sm:text-2xl font-bold">
                                    {course.name}
                                </h3>
                                <p className="text-xs sm:text-sm mt-2 text-center px-2">
                                    {course.description}
                                </p>
                            </div>
                        </div>

                        {/* Course Highlights */}
                        <div className="p-4 flex-grow">
                            <p className="text-lg font-semibold mb-3">Course Highlights</p>
                            <ul className="list-none pl-0 mb-4 space-y-2">
                                {course.highlights.map((highlight, index) => (
                                    <li
                                        key={index}
                                        className="text-gray-700 text-sm flex items-start space-x-2"
                                    >
                                        <span className="text-lg text-gray-600">▸</span>
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Buy Now Button */}
                        <div>
                            <button
                                key={course.id}
                                onClick={() => navigate(`/course/${course.name}`)}
                                className="h-12 sm:h-[60px] bg-gradient-to-r from-[#00349C] via-[#00349C] to-[#0651E8] text-white w-full py-2 rounded-b-lg hover:opacity-90 text-sm sm:text-base"
                            >
                                Learn More...
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Course;
