import React from "react";
import Navbar from "../Components/common/Navbar";
import { useParams } from "react-router-dom";
import HesoSectionCourseDetail from "../Components/core/CourseDetails/HesoSectionCourseDetail";
import Perks from "../Components/core/CourseDetails/Perks";
import Mentors from "../Components/core/HomePage/Mentors";
import FAQ from "../Components/core/HomePage/FAQ";
import Testimonials from "../Components/core/HomePage/Testimonials";
import Footer from "../Components/common/Footer";
import CourseContent from "../Components/core/CourseDetails/CourseContent";
import Curriculum from "../Components/core/CourseDetails/Curriculum";
import FeeSection from "../Components/core/CourseDetails/FeeSection";
const CourseDetails = () => {
  const { courseName } = useParams();
  return (
    <div className="mt-14 overflow-x-hidden">
      <Navbar />
      <HesoSectionCourseDetail courseName={courseName} />
      <Perks courseName={courseName} />
      <CourseContent />
      <Curriculum courseName={courseName} />
      <Mentors />
      <Testimonials />
      <FeeSection courseName={courseName} />
      <FAQ />
      <Footer />
    </div>
  );
};

export default CourseDetails;
