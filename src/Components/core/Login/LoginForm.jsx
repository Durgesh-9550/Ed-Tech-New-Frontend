import React, { useContext, useState } from "react";
import logo from "../../../assests/navbar/logo.png";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";
import axiosInstance from "../../../apis/axiosInstance";
import toast, { Toaster } from "react-hot-toast";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error("Please fill up all the required fields");
            return;
        }

        try {
            const res = await axiosInstance.post("/auth/login", {
                email,
                password,
            });

            const { token, user } = res.data;

            // Call login function to update context state
            login(token, user);
        } catch (err) {
            console.error("Error response:", err.response);
            toast.error(err.response?.data?.message || "Invalid Credentials");
        }
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row mt-12">
            {/* Left Section */}
            <div className="bg-gradient-to-b from-blue-500 to-blue-700 text-white flex flex-col justify-center items-center w-full md:w-1/2 p-10">
                <div className="text-center">
                    <img src={logo} alt="Logo" className="mb-4 mx-auto" />
                    <h1 className="text-4xl font-bold mb-4">Welcome to Elevate My Skill</h1>
                    <p className="text-sm leading-6">
                        Unlock your potential with Elevate My Skill—where aspiring Software Engineers transform into industry leaders. Dive in, master your craft, and conquer your dreams today!
                    </p>
                </div>
            </div>

            {/* Right Section */}
            <div className="flex justify-center items-center w-full md:w-1/2 p-10 bg-gray-50">
                <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
                        Sign In to Your Account
                    </h2>
                    <form onSubmit={handleSubmit}>
                        {/* Email Field */}
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Email Address</label>
                            <input
                                type="email"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} // Update email state
                            />
                        </div>

                        {/* Password Field */}
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Password</label>
                            <input
                                type="password"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} // Update password state
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                        >
                            Sign In
                        </button>
                    </form>
                    <p className="text-center text-gray-600 mt-4">
                        Don't have an account?{" "}
                        <a href="/sign-up" className="text-blue-500 hover:underline">
                            Sign Up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
