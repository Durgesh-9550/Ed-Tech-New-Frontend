
import React, { useState } from 'react'
import axios from 'axios'

const Payment = () => {
    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [amount, setAmount] = useState('')
    const [loading, setLoading] = useState(false)

    // Default Form Behavior: 
    // In HTML, submitting a form refreshes the page by default. 
    // This behavior needs to be prevented using e.preventDefault().
    // Error Resolution: 
    // Adding e.preventDefault() ensures the form submission is handled entirely within React without a page reload.

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Handle Submit Called");
        console.log(name, mobile, amount);

        setLoading(true);

        const data = {
            name: name,
            mobile,
            amount,
            MUID: "MUIDEMS" + Date.now(),
            trasactionId: "tranEMS" + Date.now(),
        };
        console.log("Just Before Try in Handle Submit Function")
        try {
            console.log("First Inside Try in Handle Submit Function")
            const res = await axios.post("https://elevatemyskill.onrender.com/api/v1/payment/order", data);

            // Check if the response structure is as expected
            if (res?.data?.data?.instrumentResponse?.redirectInfo?.url) {
                window.location.href = res.data.data.instrumentResponse.redirectInfo.url;
                console.log("Second Inside Try in Handle Submit Function")
            } else {
                console.error("Unexpected response format:", res);
                console.log("Third Inside Try in Handle Submit Function")
            }
        } catch (error) {
            // Enhanced error logging
            if (error.response) {
                // Server responded with a status code outside the 2xx range
                console.error("Error response data:", error.response.data);
                console.log("4th Inside Try in Handle Submit Function")
            } else if (error.request) {
                // Request was made but no response was received
                console.error("No response received:", error.request);
                console.log("5th Inside Try in Handle Submit Function")
            } else {
                // Something went wrong in setting up the request
                console.error("Error during setup:", error.message);
                console.log("6th Inside Try in Handle Submit Function")
            }
        } finally {
            setLoading(false); // Ensure loading is stopped after the operation completes
            console.log("7th Inside Try in Handle Submit Function")
        }

    }

    return (
        <div className='flex w-screen h-screen justify-center items-center'>
            <form
                onSubmit={handleSubmit}
                className='flex flex-col gap-6 w-[30%] h-[60%] justify-center 
                items-center border-2 rounded-md bg-slate-500 shadow-md'>
                <div>
                    <p className='font-bold text-lg'>Make a Payment</p>
                </div>
                <input
                    id="Name"
                    name="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder='Enter Your Name'
                    className='border-2 p-2 border-black rounded-xl w-[80%]'
                />
                <input
                    id="Mobile"
                    name="Mobile"
                    type="text"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    required
                    placeholder='Enter Your Mobile'
                    className='border-2 p-2 border-black rounded-xl w-[80%]'
                />
                <input
                    id="Amount"
                    name="Amount"
                    type="text"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                    placeholder='0.00'
                    className='border-2 p-2 border-black rounded-xl w-[80%]'
                />
                <button
                    type='submit'
                    disabled={loading}
                    className='border-black py-2 px-5 bg-blue-600 rounded-md w-[30%] font-bold cursor-pointer'
                >
                    Pay Now
                </button>
            </form>
        </div>
    )
}

export default Payment