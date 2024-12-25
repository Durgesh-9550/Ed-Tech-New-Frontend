import React from "react";
import HeroSectionImg from "../../../assests/courses/Blaze/courseDetails_Hero_section.png";
import coursesData from "../../../data/courses-data";

const HesoSectionCourseDetail = ({ courseName }) => {
  const course = coursesData.find((c) => c.name === courseName);
  return (
    <div>
      <section
        className="relative bg-cover bg-no-repeat text-white pb-32 pt-20 px-24 flex w-screen gap-2"
        style={{ backgroundImage: `url(${HeroSectionImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#00349C] via-[#00349C] to-[#0651E8] opacity-40"></div>
        <div className="relative md:max-w-[535px] mx-auto z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold italic mb-6 text-white leading-tight">
              {course.name}
            </h1>
            <p className="text-lg font-semibold mb-4 leading-relaxed text-gray-200">
              {course.description}
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300">
              {course.courseDetail}
            </p>
          </div>

          <div className="mt-10 flex justify-left gap-10">
            <button className="bg-white text-blue-900 font-medium px-10 py-4 rounded-md hover:bg-gray-200 transition">
              Buy now
            </button>
            <button className="bg-transparent border border-white text-white font-medium px-10 py-4 rounded-md hover:bg-white hover:text-blue-900 transition">
              Book a call
            </button>
          </div>
        </div>
        <div className="ml-12 hidden md:block z-10">
          <img
            src={HeroSectionImg}
            alt={`${course.name} thumbnail`}
            className="rounded-lg shadow-lg w-[707.1px] h-[480px]"
          />
        </div>
      </section>
    </div>
  );
};

export default HesoSectionCourseDetail;
