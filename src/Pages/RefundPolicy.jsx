import React from 'react'
import { RefundPolicyMain } from '../Components/core/RefundPolicyPage/RefundPolicyMain'
import Navbar from '../Components/common/Navbar'
import Course from '../Components/core/HomePage/Courses'
import Footer from '../Components/common/Footer'

const RefundPolicy = () => {
    return (
        <div className='mt-12 bg-gray-50'>
            <Navbar />
            <RefundPolicyMain />
            <Course />
            <Footer />
        </div>

    )
}

export default RefundPolicy