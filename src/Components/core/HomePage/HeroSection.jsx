import React from 'react';
import HeroSectionVideo from '../../../assests/HomePage/HeroSection.mp4';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full h-[50%] md:h-full relative">
            {/* Video Background */}
            <video
                className="w-full h-full object-cover"
                muted
                loop
                autoPlay
            >
                <source src={HeroSectionVideo} type="video/mp4" />
            </video>

            {/* Hero Content */}
            <div className="absolute top-10 left-5 sm:top-20 sm:left-20 w-full max-w-[535px] h-auto text-white p-4">
                <p className="text-3xl sm:text-5xl lg:text-[72px] font-open-sauce leading-tight">
                    Empower Your Future with Coding Skills
                </p>

                <p className="font-open-sauce text-sm sm:text-base lg:text-lg mt-4">
                    Unlock your potential with industry-relevant coding knowledge and hands-on experience.
                </p>

                <button
                    onClick={() => navigate("/login")}
                    className="w-[179px] h-[55px] bg-[#0651E8] p-2 rounded-md text-lg mt-4">
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default HeroSection;
