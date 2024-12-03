import React, { useState } from "react";
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import testimonialsData from "../../../data/testimonials-data";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track starting index of testimonials
  const cardsPerPage = 3; // Number of testimonials to display per view

  const totalTestimonials = testimonialsData.length; // Total testimonials
  const totalPages = Math.ceil(totalTestimonials / cardsPerPage); // Total pages
  const currentPage = Math.floor(currentIndex / cardsPerPage) + 1; // Current page

  // Move to the previous set of testimonials
  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex((totalPages - 1) * cardsPerPage); // Loop to the last page
    } else {
      setCurrentIndex(currentIndex - cardsPerPage);
    }
  };

  // Move to the next set of testimonials
  const handleNext = () => {
    if (currentIndex + cardsPerPage >= totalTestimonials) {
      setCurrentIndex(0); // Loop back to the first page
    } else {
      setCurrentIndex(currentIndex + cardsPerPage);
    }
  };

  return (
    <div className="bg-gray-50 py-16 px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-2">
          Reviews
        </h4>
        <h2 className="text-4xl font-bold text-gray-900">
          What our students say
        </h2>

        {/* Testimonials */}
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {testimonialsData
            .slice(currentIndex, currentIndex + cardsPerPage)
            .map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-blue-50 rounded-lg p-4 shadow-md w-[340px]"
              >
                <FaQuoteLeft className="text-blue-600 text-4xl mb-4" />
                <p className="text-gray-800 text-lg mb-4">
                  {testimonial.text}
                </p>
                <p className="text-gray-500 text-sm font-medium">
                  {testimonial.author}
                </p>
                <p className="text-blue-600 text-sm font-semibold mt-2">
                  {testimonial.company}
                </p>
              </div>
            ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-6 mt-6">
          <button
            onClick={handlePrev}
            className={`p-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <FaArrowLeft />
          </button>
          {/* <span className="text-lg font-semibold">
            Page {currentPage} of {totalPages}
          </span> */}
          <button
            onClick={handleNext}
            className={`p-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 ${
              currentIndex + cardsPerPage >= totalTestimonials
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
