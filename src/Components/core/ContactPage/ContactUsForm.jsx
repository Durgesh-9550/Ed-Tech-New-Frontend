import React, { useState } from "react";
import { HiPhone, HiMail, HiUser, HiPencil } from "react-icons/hi";
import axiosInstance from "../../../apis/axiosInstance";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneno: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log("Form Data: ", formData)
      const response_receive = await axiosInstance.post(
        "/receive-contact",
        formData
      );
      const response_send = await axiosInstance.post(
        "/send-response",
        formData
      );
      setStatusMessage(
        (response_receive.data.message && response_send.data.message) ||
          "Message sent successfully"
      );

      setFormData({
        name: "",
        email: "",
        phoneno: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setStatusMessage("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-700 to-blue-800 min-h-screen flex items-center justify-center p-6">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-transparent">
        {/* Left Section */}
        <div className="text-white">
          {/* <h4 className="text-sm font-medium tracking-widest uppercase mb-4">About Us</h4> */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Empowering Minds, Shaping Futures
          </h2>
          <p className="text-white/80 leading-relaxed mb-6">
            We are passionate educators committed to unlocking potential through
            innovative learning. Our mission is to bridge the gap between
            ambition and achievement by providing high-quality education,
            personalized mentorship, and industry-aligned resources. Together,
            we shape learners into future-ready professionals, one step at a
            time.
          </p>
          <div className="flex gap-4">
            {/* Call Us */}
            <div className="flex items-center space-x-4">
              <div className="bg-white/10 p-3 rounded-full">
                <HiPhone className="w-6 h-6 text-white" />
              </div>
              <span className="text-white font-semibold">+49 8802626464</span>
            </div>
            {/* Email */}
            <div className="flex items-center space-x-4">
              <div className="bg-white/10 p-3 rounded-full">
                <HiMail className="w-6 h-6 text-white" />
              </div>
              <span className="text-white font-semibold">info@sorted.io</span>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
          <form
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            {/* Full Name */}
            <div className="relative">
              <HiUser className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                className="w-full pl-10 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                onChange={handleChange}
              />
            </div>

            {/* Email ID */}
            <div className="relative">
              <HiMail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                required
                type="email"
                name="email"
                id="email"
                placeholder="Email ID"
                className="w-full pl-10 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                onChange={handleChange}
              />
            </div>

            {/* Phone Number */}
            <div className="relative">
              <HiPhone className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                required
                type="text"
                name="phoneno"
                id="phoneno"
                placeholder="Phone Number"
                className="w-full pl-10 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                onChange={handleChange}
              />
            </div>

            {/* Message */}
            <div className="relative">
              <HiPencil className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <textarea
                required
                placeholder="Write your message"
                name="message"
                rows="4"
                className="w-full pl-10 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                onChange={handleChange}
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold rounded-md py-3 hover:bg-blue-700 transition duration-200"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
