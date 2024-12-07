import React, { useState, useEffect } from "react";
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import testimonialsData from "../../../data/testimonials-data";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track starting index of testimonials
  const [cardsPerPage, setCardsPerPage] = useState(3); // Default number of testimonials to show

  // Update cardsPerPage based on window size
  useEffect(() => {
    const updateCardsPerPage = () => {
      const width = window.innerWidth;
      setCardsPerPage(width >= 768 ? 3 : 1); // Show 3 cards for md and above, 1 card for sm
    };

    updateCardsPerPage(); // Initial update
    window.addEventListener("resize", updateCardsPerPage); // Attach resize listener

    return () => window.removeEventListener("resize", updateCardsPerPage); // Cleanup
  }, []);

  const totalTestimonials = testimonialsData.length; // Total testimonials
  const totalPages = Math.ceil(totalTestimonials / cardsPerPage); // Total pages

  // Navigate to the previous set of testimonials
  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex((totalPages - 1) * cardsPerPage); // Loop to the last page
    } else {
      setCurrentIndex(currentIndex - cardsPerPage);
    }
  };

  // Navigate to the next set of testimonials
  const handleNext = () => {
    if (currentIndex + cardsPerPage >= totalTestimonials) {
      setCurrentIndex(0); // Loop back to the first page
    } else {
      setCurrentIndex(currentIndex + cardsPerPage);
    }
  };

  // Slice the testimonials based on current index and cardsPerPage
  const visibleTestimonials = testimonialsData.slice(
    currentIndex,
    currentIndex + cardsPerPage
  );

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-2">
          Reviews
        </h4>
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">
          What our students say
        </h2>

        {/* Testimonials */}
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {visibleTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-blue-50 rounded-lg p-4 shadow-md w-full max-w-[340px] flex flex-col"
            >
              <FaQuoteLeft className="text-blue-600 text-4xl mb-4" />
              <p className="text-gray-800 text-base sm:text-lg mb-4">
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
            className="p-3 sm:p-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            <FaArrowLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="p-3 sm:p-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
