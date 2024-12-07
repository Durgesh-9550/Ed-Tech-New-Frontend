import React from 'react'
import Navbar from '../Components/common/Navbar'
import PrivacyPolicyMain from '../Components/core/PrivacyPolicyPage/PrivacyPolicyMain'
import Footer from '../Components/common/Footer'

const PrivacyPolicy = () => {
  return (
    <div className='mt-12 bg-gray-50'>
      <Navbar />
      <PrivacyPolicyMain />
      <Footer />
    </div>
  )
}

export default PrivacyPolicy