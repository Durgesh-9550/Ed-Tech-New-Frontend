import React from 'react';
import HeroSectionVideo from '../../../assests/HomePage/HeroSection.mp4';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full h-full relative">
            <video
                className="w-full h-full object-cover "
                muted
                loop
                autoPlay
            >
                <source src={HeroSectionVideo} type="video/mp4" />
            </video>

            <div className="absolute top-20 left-20 w-[535px] h-[228px] text-white">
                <p className="text-[72px] font-open-sauce leading-tight">
                    Empower Your Future with Coding Skills
                </p>

                <p className="font-open-sauce text-lg">
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
