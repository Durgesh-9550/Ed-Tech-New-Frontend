import React, { useState } from "react";
import coursesData from "../../../data/courses-data";
import { CiCircleList } from "react-icons/ci";

const Curriculum = ({ courseName }) => {
  const selectedCourse = coursesData.find(
    (course) => course.name === courseName
  );

  const initialModule = selectedCourse
    ? Object.keys(selectedCourse.curriculum)[0]
    : null;
  const [selectedModule, setSelectedModule] = useState(initialModule);

  if (!selectedCourse) {
    return <p className="text-center text-gray-500">Course not found.</p>;
  }

  const { curriculum } = selectedCourse;
  return (
    <div className="w-screen">
      {/* Upper Part -> name and tag done */}
      <div>
        <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm text-center">
          Structured Curriculum
        </p>
        <p className="text-gray-800 text-4xl font-bold text-center mt-2 leading-relaxed">
          <span className="text-blue-600 text-4xl font-bold text-center">
            Helping you build a
          </span>{" "}
          strong foundation
          <br /> in Problem Solving and System Design
        </p>
      </div>

      {/* Lower part main curriculum section */}
      <div className="flex gap-4 w-[87%] mx-auto p-4 border-2 border-gray-300 rounded-md">
        {/* left part -> module number */}
        <div className="w-[30%]">
          {/* <h3 className="text-lg font-semibold text-gray-800 mb-4">Modules</h3> */}
          <ul className="space-y-3">
            {Object.entries(curriculum).map(([moduleKey, module]) => (
              <li
                key={moduleKey}
                onClick={() => setSelectedModule(moduleKey)}
                className={`cursor-pointer rounded-lg text-sm font-medium flex flex-col transition duration-300 py-7 px-6 ${
                  selectedModule === moduleKey
                    ? "bg-[#E6EEFD] text-blue-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <p
                  className={`text-xl font-semibold ${
                    selectedModule === moduleKey
                      ? "text-blue-600"
                      : "text-gray-500"
                  }`}
                >
                  {module.name}
                </p>
                <p className="text-[17px] text-[#828282]">{module.title}</p>
              </li>
            ))}
          </ul>
        </div>
        {/* right part -> module description */}
        <div className="w-[69%] bg-[#E6EEFD] rounded-md p-4">
          {curriculum[selectedModule] ? (
            <div>
              <div>
                <p className="text-[18px] font-bold text-[#202658] mb-4">
                  {curriculum[selectedModule].name} -{" "}
                  {curriculum[selectedModule].title}
                </p>
                <p className="w-full h-[1px] bg-[#D1D5DB] my-[1px]"></p>
              </div>

              <div>
                {curriculum[selectedModule].phases.map((phase, index) => (
                  <div className="w-[60%] py-4 my-3 bg-[#F1F9FF] shadow-md rounded-lg p-6 border border-gray-200">
                    <p className="text-[#0651E8] font-normal text-[16px]">
                      {phase.name} : {phase.phase}
                    </p>
                    <ul className="list-none ">
                      {phase.topics.map((topic, idx) => (
                        <li key={idx} className="text-gray-700 flex items-center gap-3 text-[16px]">
                        <CiCircleList className="w-4 h-4 text-[16px]" />
                        <span>{topic}</span>
                      </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-gray-600">
              Details for this module are coming soon.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
