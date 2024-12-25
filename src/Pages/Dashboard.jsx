import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Navbar from "../Components/common/Navbar";

const Dashboard = () => {
  const { user } = useContext(AuthContext); // Fetch user data from context
  const userName = user?.name || "User"; // Fallback to "User" if name is not available

  return (
    <div>
      <Navbar />
      <div
        className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-100 to-gray-200"
        style={{
          backgroundImage: 'url("https://via.placeholder.com/1500x1000")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-white bg-opacity-80 p-10 rounded-lg shadow-lg text-center max-w-md">
          <h1 className="text-3xl font-bold text-blue-600">
            Welcome {userName}!
          </h1>
          <p className="text-gray-700 mt-4">
            Welcome to the Elevate My Skill Dashboard. We are excited to have
            you here to embark on your journey toward success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
