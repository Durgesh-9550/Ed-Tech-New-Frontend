import React from 'react'
import ContactUsForm from '../Components/core/ContactPage/ContactUsForm'
import FAQ from '../Components/core/HomePage/FAQ'
import Navbar from '../Components/common/Navbar'
import Footer from '../Components/common/Footer'

const Contact = () => {
    return (
        <div className='mt-12'>
            <Navbar />
            <ContactUsForm />
            <FAQ />
            <Footer />
        </div>
    )
}

export default Contact