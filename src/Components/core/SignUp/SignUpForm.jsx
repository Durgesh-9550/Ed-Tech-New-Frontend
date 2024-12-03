import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axiosInstance from "../../../apis/axiosInstance";
import logo from "../../../assests/navbar/logo.png";

const SignUpForm = () => {
    const [selectedRole, setSelectedRole] = useState("Student");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
    });
    const [passwordError, setPasswordError] = useState("");
    const navigate = useNavigate();

    const { name, email, password, confirmPassword, phone } = formData;

    // Handle input changes
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (e.target.name === "password") validatePassword(e.target.value);
    };

    // Password validation
    const validatePassword = (password) => {
        const minLength = 6;
        const uppercase = /[A-Z]/;
        const lowercase = /[a-z]/;
        const number = /[0-9]/;
        const specialChar = /[!@#$%^&*(),.?":{}|<>]/;

        if (password.length < minLength) {
            setPasswordError("Password must be at least 6 characters long");
        } else if (!uppercase.test(password)) {
            setPasswordError("Password must contain at least one uppercase letter");
        } else if (!lowercase.test(password)) {
            setPasswordError("Password must contain at least one lowercase letter");
        } else if (!number.test(password)) {
            setPasswordError("Password must contain at least one number");
        } else if (!specialChar.test(password)) {
            setPasswordError("Password must contain at least one special character");
        } else {
            setPasswordError("");
        }
    };

    // Handle form submission
    const onSubmit = async (e) => {
        console.log("first")
        e.preventDefault();
        console.log("first 2")
        // Client-side validation
        if (passwordError) {
            toast.error("Please fix password errors before submitting.");
            return;
        }
        if (password !== confirmPassword) {
            toast.error("Password and Confirm Password do not match.");
            return;
        }

        try {
            const newUser = {
                name,
                email,
                password,
                confirmPassword,
                phone,
                accountType: selectedRole,
            };

            const res = await axiosInstance.post("/auth/signup", newUser);

            if (res.data.success) {
                toast.success(res.data.message);
                setTimeout(() => navigate("/login"), 1000); // Navigate to login
            }
        } catch (err) {
            const errorMessage =
                err.response?.data?.message || "An error occurred. Please try again.";
            toast.error(errorMessage);
        }
    };

    // Toggle password visibility
    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const toggleConfirmPasswordVisibility = () =>
        setShowConfirmPassword(!showConfirmPassword);

    return (
        <div className="min-h-screen flex flex-col md:flex-row mt-12">
            {/* Left Section */}
            <div className="bg-gradient-to-b from-blue-500 to-blue-700 text-white flex flex-col justify-center items-center w-full md:w-1/2 p-10">
                <div className="text-center">
                    <img src={logo} alt="Logo" className="mb-4 mx-auto" />
                    <h1 className="text-4xl font-bold mb-4">Welcome to Elevate My Skill</h1>
                    <p className="text-sm leading-6">
                        Unlock your potential with Elevate My Skill—where aspiring Software
                        Engineers transform into industry leaders. Dive in, master your craft,
                        and conquer your dreams today!
                    </p>
                </div>
            </div>

            {/* Right Section */}
            <div className="flex justify-center items-center w-full md:w-[50%] p-10 bg-gray-50">
                <div className="w-full max-w-md bg-white p-5 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
                        Create Your Account
                    </h2>

                    {/* Role Selection Tabs */}
                    <div className="flex justify-between gap-4 mb-6">
                        {["Student", "Instructor", "Mentor"].map((role) => (
                            <button
                                key={role}
                                onClick={() => setSelectedRole(role)}
                                className={`w-1/2 text-center py-2 rounded-lg ${selectedRole === role
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                    }`}
                            >
                                {role}
                            </button>
                        ))}
                    </div>

                    <form onSubmit={onSubmit}>
                        {/* Form Fields */}
                        {[{ label: "Name", name: "name", type: "text", placeholder: "Enter your name" },
                        { label: "Email", name: "email", type: "email", placeholder: "Enter your email" },
                        { label: "Phone Number", name: "phone", type: "text", placeholder: "Enter your phone number" },
                        ].map(({ label, name, type, placeholder }) => (
                            <div className="mb-4" key={name}>
                                <label className="block text-gray-700 mb-2">{label}</label>
                                <input
                                    type={type}
                                    name={name}
                                    value={formData[name]}
                                    onChange={onChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                                    placeholder={placeholder}
                                />
                            </div>
                        ))}

                        {/* Password and Confirm Password */}
                        <div className="mb-4 flex space-x-4">
                            <div className="flex-1 relative">
                                <label className="block text-gray-700 mb-2">Password</label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={password}
                                    onChange={onChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                                    placeholder="Enter your password"
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute top-10 right-3 text-gray-600"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                                {passwordError && (
                                    <p className="text-red-500 text-sm mt-1">{passwordError}</p>
                                )}
                            </div>
                            <div className="flex-1 relative">
                                <label className="block text-gray-700 mb-2">
                                    Confirm Password
                                </label>
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    value={confirmPassword}
                                    onChange={onChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                                    placeholder="Confirm your password"
                                />
                                <button
                                    type="button"
                                    onClick={toggleConfirmPasswordVisibility}
                                    className="absolute top-10 right-3 text-gray-600"
                                >
                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                        >
                            Sign Up
                        </button>
                    </form>

                    <p className="text-center text-gray-600 mt-4">
                        Already have an account?{" "}
                        <a href="/login" className="text-blue-500 hover:underline">
                            Sign In
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUpForm;
