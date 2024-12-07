
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
        console.log("Handle Submit Called")
        console.log(name, mobile, amount)

        setLoading(true);
        const data = {
            name: name,
            mobile,
            amount,
            MUID: "MUIDEMS" + Date.now(),
            trasactionId: "tranEMS" + Date.now(),
        }

        await axios.post("http://localhost:8000/order", data)
            .then((res) => {
                if (res.data && res.data.data.instrumentResponse.redirectInfo.url) {
                    window.location.href = res.data.data.instrumentResponse.redirectInfo.url;
                } else {
                    console.error("Unexpected response format:", res.data);
                }
            })
            .catch((error) => {
                console.error("Error during API call:", error.response?.data || error.message);
            });
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