import React from "react";
import coursesData from "../../../data/courses-data";

const FeeSection = ({ courseName }) => {
  const selectedCourse = coursesData.find(
    (course) => course.name === courseName
  );
  return (
    <section className="bg-gray-50 flex flex-col items-center text-center py-8 px-4">
      <h2 className="text-blue-600 text-2xl md:text-3xl font-bold mb-4">
        Fee Structure
      </h2>
      <div className="flex flex-col items-center text-lg md:text-xl font-medium text-gray-800">
        <p className="flex items-center mb-4">
          Total Fee:{" "}
          <span className="line-through text-red-600 mx-2">
            {selectedCourse.price}
          </span>
          <span className="text-blue-600 font-bold">
            {selectedCourse.discountedPrice}
          </span>
        </p>
        <p className="text-gray-700 text-base md:text-lg mt-4">
          With our affordable EMI option, your fee can be as low as{" "}
          <span className="text-gray-900 font-bold">₹ 5,777/- month</span> -
          that's even less than your monthly grocery bills.
        </p>
      </div>
      <div className="mt-10 flex justify-center gap-8">
        <button className="bg-blue-600 text-white font-medium px-10 py-4 rounded-md hover:bg-blue-700 transition">
          Buy Now
        </button>
        <button className="bg-transparent border-2 border-blue-600 text-blue-600 font-medium px-10 py-4 rounded-md hover:bg-blue-600 hover:text-white transition">
          Book a Call
        </button>
      </div>
    </section>
  );
};

export default FeeSection;
