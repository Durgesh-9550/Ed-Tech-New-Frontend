import React from 'react'
import Navbar from '../Components/common/Navbar'
import Footer from '../Components/common/Footer'
import TermsAndConditonsMain from '../Components/core/TermsAndConditionPage/TermsAndConditonsMain'
const TermsAndConditions = () => {
    return (
        <div className='mt-12 bg-gray-50'>
            <Navbar />
            <TermsAndConditonsMain />
            <Footer />
        </div>
    )
}

export default TermsAndConditions