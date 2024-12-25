import React from "react";
import coursesData from "../../../data/courses-data";

const Perks = ({ courseName }) => {
  const course = coursesData.find((c) => c.name === courseName);
  const perks = course?.perks || [];

  return (
    <section className="px-4 sm:px-12 md:px-24 py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl md:text-4xl text-center font-bold mb-8">
          This Program Offers You These{" "}
          <span className="text-blue-600 italic">Key Benefits</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {perks.map((perk) => (
            <div
              key={perk.id}
              className="relative bg-blue-50 p-6 pt-12 rounded-lg shadow-md"
            >
              
              <img
                src={perk.img}
                alt={perk.title}
                className="absolute top-[0] left-4 w-16 h-16 object-cover rounded-md"
              />
              <div className="mt-12 text-center">
                <p className="text-gray-600 text-lg font-medium">{perk.title}</p>
                <p className="text-gray-900 text-xl font-semibold">{perk.highlight}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Perks;
