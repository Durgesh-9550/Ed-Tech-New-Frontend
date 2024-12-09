import React, { useState } from 'react';
import axios from 'axios';

const Payment = () => {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [amount, setAmount] = useState('');
    const [state, setState] = useState('');
    const [loading, setLoading] = useState(false);

    const indianStates = [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
        "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
        "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
        "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
        "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
        "Uttar Pradesh", "Uttarakhand", "West Bengal",
        "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
        "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(name, mobile, amount, state);

        setLoading(true);

        const data = {
            name,
            mobile,
            amount,
            state,
            MUID: "MUIDEMS" + Date.now(),
            transactionId: "tranEMS" + Date.now(),
        };
        try {
            const res = await axios.post("https://elevatemyskill.onrender.com/api/v1/payment/order", data);
            // For Testing
            // const res = await axios.post("http://localhost:8000/api/v1/payment/order", data);

            if (res?.data?.data?.instrumentResponse?.redirectInfo?.url) {
                window.location.href = res.data.data.instrumentResponse.redirectInfo.url;
            } else {
                console.error("Unexpected response format:", res);
            }
        } catch (error) {
            if (error.response) {
                console.error("Error response data:", error.response.data);
            } else if (error.request) {
                console.error("No response received:", error.request);
            } else {
                console.error("Error during setup:", error.message);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex w-screen h-screen justify-center items-center bg-gray-100 p-4">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 w-full max-w-md md:max-w-lg lg:max-w-xl h-auto p-6 border-2 rounded-md bg-white shadow-md"
            >
                <div>
                    <p className="font-bold text-lg text-center">Make a Payment</p>
                </div>
                <input
                    id="Name"
                    name="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Enter Your Name"
                    className="border-2 p-2 border-gray-300 rounded-md w-full"
                />
                <input
                    id="Mobile"
                    name="mobile"
                    type="text"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    required
                    placeholder="Enter Your Mobile"
                    className="border-2 p-2 border-gray-300 rounded-md w-full"
                />
                <input
                    id="Amount"
                    name="amount"
                    type="text"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                    placeholder="0.00"
                    className="border-2 p-2 border-gray-300 rounded-md w-full"
                />
                <select
                    id="State"
                    name="state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    required
                    className="border-2 p-2 border-gray-300 rounded-md w-full"
                >
                    <option value="" disabled>
                        Select Your State
                    </option>
                    {indianStates.map((stateName, index) => (
                        <option key={index} value={stateName}>
                            {stateName}
                        </option>
                    ))}
                </select>
                <button
                    type="submit"
                    disabled={loading}
                    className={`py-2 px-5 bg-blue-600 text-white rounded-md w-full font-bold cursor-pointer 
                    ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"}`}
                >
                    {loading ? "Processing..." : "Pay Now"}
                </button>
            </form>
        </div>
    );
};

export default Payment;