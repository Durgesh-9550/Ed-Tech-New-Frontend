import React, { useState } from "react";
import img from "../../../assests/courses/Blaze/Rectangle 9.png";

const CourseContent = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const sections = [
    {
      id: 1,
      title: "Structured curriculum",
      subtitle: "designed by industry experts",
      description:
        "Our curriculum covers everything you need to become a skilled software engineer and secure a position at top tech companies. It includes problem-solving in Data Structures and Algorithms, foundational Computer Science concepts, System Design principles, and Full Stack Development. All content is carefully designed by experts to ensure you achieve industry standards.",
    },
    {
      id: 2,
      title: "Live classes by instructors",
      subtitle: "working in top tech companies",
      description:
        "Learn directly from industry professionals through live interactive sessions. Gain real-world insights, hands-on experience, and practical knowledge shared by instructors who currently work in leading tech companies. These classes are designed to ensure clarity and a strong grasp of concepts.",
    },
    {
      id: 3,
      title: "Daily hand-picked problems &",
      subtitle: "weekly contests",
      description:
        "Practice makes perfect! Solve carefully curated daily problems to strengthen your problem-solving skills. Participate in weekly contests to test your progress, improve speed and accuracy, and prepare for competitive coding interviews in an engaging environment.",
    },
    {
      id: 4,
      title: "1 to 1 mentorship sessions",
      subtitle: "Mock interviews",
      description:
        "Receive personalized guidance through one-on-one mentorship sessions. Work with experienced mentors to address your unique challenges, refine your skills, and gain confidence. Participate in mock interviews to prepare for real-life interview scenarios and improve your chances of success.",
    },
  ];

  return (
    <section className="px-4 sm:px-12 md:px-24 py-12 bg-white">
      <h2
        className="w-[60%] mx-auto text-3xl md:text-5xl font-bold mb-8 text-center"
        style={{ lineHeight: "58px" }}
      >
        Helps you to move to your <span className="italic">Dream Career</span>
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="space-y-4">
            {sections.map((section) => (
              <div
                key={section.id}
                className={`p-6 border rounded-lg shadow-md transition-all duration-300 ${
                  expandedSection === section.id ? "bg-blue-50" : "bg-gray-50"
                }`}
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleSection(section.id)}
                >
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {section.title}
                    </h3>
                    <p className="text-sm text-gray-600">{section.subtitle}</p>
                  </div>
                  <span
                    className={`text-xl font-bold transform transition-transform duration-300 ${
                      expandedSection === section.id ? "rotate-45 text-red-600" : ""
                    }`}
                  >
                    {expandedSection === section.id ? "x" : "+"}
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedSection === section.id ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="mt-4 text-gray-700">{section.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center">
          <img
            src={img}
            alt="Course Preview"
            className="w-[80%] h-[60%] max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default CourseContent;
