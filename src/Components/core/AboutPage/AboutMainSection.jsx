import React from "react";
import img from '../../../assests/About/water-fireworks.png'
const AboutMainSection = () => {
    return (
        <div className="w-screen bg-gray-50 text-gray-800 py-12 px-6 flex flex-col justify-center items-center overflow-x-hidden">
            <div className="max-w-[90%] lg:max-w-[50%] flex flex-col justify-center items-center text-center">
                <h1 className="text-4xl font-bold mb-4 text-gray-900 w-full">
                    My Story
                </h1>
                <div className="w-full flex justify-center items-center">
                    <img className="rounded-lg mt-6 sm:mt-10 w-full max-w-[400px] md:max-w-full" src={img} alt="About Main Img" />
                </div>
            </div>

            <div className="max-w-7xl mx-auto lg:max-w-[60%] flex flex-col justify-center items-center text-center">
                <div className="text-center mb-12 mt-10">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900">Meet Elevate My Skill</h3>
                    <p className="text-md text-gray-700 leading-relaxed">
                        Welcome to Elevate My Skill—a dynamic platform where tech enthusiasts and professionals come to level up,
                        push boundaries, and unlock new heights in their careers.
                        We’re more than just an online learning hub; we’re a Tech Versity where practical skills meet visionary ambition,
                        crafted for those ready to make their mark in the IT world.
                    </p>
                    <p className="text-md text-gray-700 leading-relaxed mt-4">
                        Our mission is to help you rise above the ordinary. At EMS, every course, project,
                        and community interaction is a step toward mastering the skills that matter in the fast-paced digital landscape.
                        Dive into expert-led, hands-on courses covering software development,
                        data science, cybersecurity, and more—each tailored to keep you ahead of the curve and prepared for what’s next.
                    </p>
                    <p className="text-md text-gray-700 leading-relaxed mt-4">
                        Join EMS and elevate your skillset in a place where learning is limitless,
                        connections are invaluable, and your career potential knows no bounds. The journey to a brighter tech future starts here.
                    </p>
                </div>

                <div className="">
                    <div>
                        <h3 className="text-2xl font-semibold mb-4 text-gray-900">Our Mission</h3>
                        <p className="text-md text-gray-700 leading-relaxed mt-4">
                            At Elevate My Skill, our mission is simple yet powerful:
                            to ignite curiosity, empower mastery, and elevate the careers of IT professionals.
                            We exist to bridge the gap between ambition and achievement,
                            offering practical, hands-on learning that transforms knowledge into expertise and potential into progress.
                        </p>
                        <p className="text-md text-gray-700 leading-relaxed mt-4">
                            We’re here for the dreamers and the doers, the builders and the innovators.
                            Our goal is to equip you with the skills and confidence to not only keep pace with the tech world but to shape its future.
                            Through industry-driven courses,
                            expert mentorship, and a vibrant learning community, we aim to be the launchpad for your next big leap in tech.
                        </p>
                        <p className="text-md text-gray-700 leading-relaxed mt-4">
                            Join EMS, and let’s elevate skills, inspire change, and create a brighter tomorrow—together.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-4 text-gray-900 mt-10">Our Vision</h3>
                        <p className="text-md text-gray-700 leading-relaxed mt-4">
                            Our vision at Elevate My Skill is to create a world where every IT professional has the power,
                            confidence, and tools to thrive in the ever-evolving tech landscape.
                            We envision a future where skills are limitless, learning is a lifelong adventure,
                            and each individual has the opportunity to shape, innovate, and lead in their field.
                        </p>
                        <p className="text-md text-gray-700 leading-relaxed mt-4">
                            We aspire to be more than a learning platform—to become a global community of empowered tech professionals who
                            elevate each other, share knowledge, and drive the industry forward. By fostering an environment of curiosity,
                            creativity, and collaboration, EMS seeks to inspire the next generation of tech leaders who will redefine what’s possible.
                        </p>
                    </div>
                </div>
                <div className="mt-8">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900 mt-5">Our Goal</h3>
                    <p className="text-gray-700 leading-relaxed">
                        Our goal at Elevate My Skill is to empower as many as possible IT
                        professionals to unlock new levels of expertise and confidence,
                        turning technical knowledge into tangible career advancement.
                        We aim to provide accessible, industry-aligned learning that transforms complex concepts into practical skills,
                        equipping each learner to make an impact in the tech world.
                    </p>
                </div>
                <div className="mt-12 text-center">
                    <p className="text-gray-700">
                        Let’s elevate skills, inspire change, and create a brighter tomorrow—together.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default AboutMainSection;
