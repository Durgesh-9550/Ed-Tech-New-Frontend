import React from "react";
import { FaTimesCircle } from "react-icons/fa";

const PaymentFailure = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-red-50 text-center px-4">
            {/* Icon */}
            <FaTimesCircle className="text-red-600 text-6xl mb-4" />

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-red-700 mb-2">
                Payment Failed!
            </h1>

            {/* Message */}
            <p className="text-gray-700 text-lg sm:text-xl max-w-md mb-6">
                Unfortunately, your payment could not be processed. Please check your payment details and try again.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap justify-center gap-4">
                <a
                    href="/payment"
                    className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-all text-lg"
                >
                    Retry Payment
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

export default PaymentFailure;
