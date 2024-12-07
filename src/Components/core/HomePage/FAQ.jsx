import React, { useState } from "react";
import faqData from "../../../data/faq-data";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const FAQ = () => {
    const [activeCategory, setActiveCategory] = useState(faqData[0].category); // Default to the first category
    const [expandedQuestion, setExpandedQuestion] = useState(null); // For toggling questions

    // Filter FAQs by selected category
    const currentFAQs =
        faqData.find((category) => category.category === activeCategory)?.faqs || [];

    return (
        <div className="bg-gray-50 py-12 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-2 text-center">
                    FAQ
                </h4>
                <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
                    Have questions? <br /> We have answers
                </h2>

                {/* Categories */}
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8">
                    {faqData.map((category) => (
                        <button
                            key={category.category}
                            className={`py-2 px-4 rounded-full text-sm font-medium ${activeCategory === category.category
                                    ? "bg-blue-600 text-white"
                                    : "bg-blue-100 text-blue-600"
                                }`}
                            onClick={() => setActiveCategory(category.category)}
                        >
                            {category.category}
                        </button>
                    ))}
                </div>

                {/* FAQs */}
                <div className="space-y-4 sm:space-y-6">
                    {currentFAQs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-b border-gray-300 pb-4 cursor-pointer"
                            onClick={() =>
                                setExpandedQuestion(expandedQuestion === index ? null : index)
                            }
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                                    {faq.question}
                                </h3>
                                <span className="text-blue-600 text-xl">
                                    {expandedQuestion === index ? <FaAngleUp /> : <FaAngleDown />}
                                </span>
                            </div>
                            {expandedQuestion === index && (
                                <p className="mt-2 text-gray-600 text-sm sm:text-base">
                                    {faq.answer}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
