import React from 'react';
import Navbar from '../Components/common/Navbar';
import HeroSection from '../Components/core/HomePage/HeroSection';
import Courses from '../Components/core/HomePage/Courses';
import Mentors from '../Components/core/HomePage/Mentors';
import Testimonials from '../Components/core/HomePage/Testimonials';
import FAQ from '../Components/core/HomePage/FAQ';
import Footer from '../Components/common/Footer';
import CompaniesSlider from '../Components/core/HomePage/CompaniesSlider';

const Home = () => {
    return (
        <div className="w-screen h-screen overflow-x-hidden">
            <Navbar />
            <HeroSection />
            <Courses />
            <CompaniesSlider />
            <Mentors />
            <Testimonials />
            <FAQ />
            <Footer />
        </div>
    );
};

export default Home;
