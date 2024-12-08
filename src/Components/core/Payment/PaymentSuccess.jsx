import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const PaymentSuccess = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-green-50 text-center px-4">
            {/* Icon */}
            <FaCheckCircle className="text-green-600 text-6xl mb-4" />

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-green-700 mb-2">
                Payment Successful!
            </h1>

            {/* Message */}
            <p className="text-gray-700 text-lg sm:text-xl max-w-md mb-6">
                Thank you for your payment! Your transaction was completed successfully, and a receipt has been sent to your email.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap justify-center gap-4">
                <a
                    href="/dashboard"
                    className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-all text-lg"
                >
                    Go to Dashboard
                </a>
                <a
                    href="/"
                    className="px-6 py-3 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-all text-lg"
                >
                    Back to Home
                </a>
            </div>
        </div>
    );
};

export default PaymentSuccess;
