import React from 'react';
import Slider from 'react-slick';

import left1 from "../../../assests/HomePage/Companies Slider/left/adobe.png";
import left2 from "../../../assests/HomePage/Companies Slider/left/amazon.png";
import left3 from "../../../assests/HomePage/Companies Slider/left/arcesium.png";
import left4 from "../../../assests/HomePage/Companies Slider/left/Barclays.png";
import left5 from "../../../assests/HomePage/Companies Slider/left/cred.png";
import left6 from "../../../assests/HomePage/Companies Slider/left/google.png";
import left7 from "../../../assests/HomePage/Companies Slider/left/intuite.png";
import left8 from "../../../assests/HomePage/Companies Slider/left/JP MOrgen.png";
import left9 from "../../../assests/HomePage/Companies Slider/left/juspay.png";
import left10 from "../../../assests/HomePage/Companies Slider/left/meta.png";
import left11 from "../../../assests/HomePage/Companies Slider/left/Microshoft.png";
import left12 from "../../../assests/HomePage/Companies Slider/left/Oracle.png";
import left13 from "../../../assests/HomePage/Companies Slider/left/samsung.png";
import left14 from '../../../assests/HomePage/Companies Slider/left/paypal.png'

import right1 from "../../../assests/HomePage/Companies Slider/right/blinkit.png";
import right2 from "../../../assests/HomePage/Companies Slider/right/Dream 11.png";
import right3 from "../../../assests/HomePage/Companies Slider/right/flipkart.png";
import right4 from "../../../assests/HomePage/Companies Slider/right/meesho.jpg";
import right5 from "../../../assests/HomePage/Companies Slider/right/myntra.png";
import right6 from "../../../assests/HomePage/Companies Slider/right/ola.png";
import right7 from "../../../assests/HomePage/Companies Slider/right/oyo.png";
import right8 from "../../../assests/HomePage/Companies Slider/right/phone pay.png";
import right9 from "../../../assests/HomePage/Companies Slider/right/sharechat.png";
import right10 from "../../../assests/HomePage/Companies Slider/right/spinny.png";
import right11 from "../../../assests/HomePage/Companies Slider/right/swiggy.png";
import right12 from "../../../assests/HomePage/Companies Slider/right/Tata 1 mg.png";
import right13 from "../../../assests/HomePage/Companies Slider/right/zoho.png";
import right14 from "../../../assests/HomePage/Companies Slider/right/zomato.png";

const CompaniesSlider = () => {
    const leftImages = [left1, left2, left3, left4, left5, left6, left7, left8, left9, left10, left11, left12, left13, left14];
    const rightImages = [right14, right13, right12, right11, right10, right9, right8, right7, right6, right5, right4, right3, right2, right1];

    const sliderSettings = {
        infinite: true,
        autoplay: true,
        speed: 3000, 
        autoplaySpeed: 0,
        slidesToShow: 7,  
        slidesToScroll: 1,
        cssEase: "linear",
        arrows: false,  
        pauseOnHover: false, 
        draggable: false,
    };

    return (
        <div className="flex flex-col gap-9 mt-10 mb-10">
            <h1 className="text-3xl mx-auto font-bold text-gray-800">Our Alumni Placed At</h1>
            <div className="relative w-full overflow-hidden">
                <Slider {...sliderSettings} className="left-slider" rtl={false}>
                    {[...leftImages, ...leftImages].map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`Company Left ${index}`} className="w-[40px] h-[40px] md:w-[80px] md:h-[50px] lg:w-[120px] lg:h-[60px] mx-2 object-contain" />
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="relative w-full overflow-hidden">
                <Slider {...sliderSettings} className="right-slider" rtl={true}>
                    {[...rightImages, ...rightImages].map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`Company Right ${index}`} className="w-[40px] h-[40px] md:w-[80px] md:h-[50px] lg:w-[120px] lg:h-[60px] mx-2 object-contain" />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default CompaniesSlider;
