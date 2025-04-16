import React from "react";
import { FaEnvelope, FaCalendarAlt, FaGraduationCap, FaCertificate } from "react-icons/fa";
import './Me.css';

const Me = () => {
    return (
        <div className="about-container p-6 bg-gray-900 text-white min-h-screen flex flex-col items-center">
            <div className="max-w-4xl text-center">
                <h1 className="text-4xl font-bold mb-6">Get To Know Me More</h1>
                
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg flex items-center mx-auto">
                    <FaEnvelope className="mr-2" /> Get In Touch!
                </button>
            </div>

            {/* Timeline Section */}
            <div className="mt-12 w-full max-w-3xl">
                <h2 className="text-3xl font-bold text-center mb-8">My Journey</h2>
                <div className="relative border-l-4 border-blue-500 pl-6 space-y-8">
                    <div>
                        <div className="flex items-center mb-2">
                            <FaGraduationCap className="text-blue-400 text-xl mr-2" />
                            <h3 className="text-xl font-semibold">Sol Plaatje University - Diploma in ICT (App Development)</h3>
                        </div>
                        <p className="text-gray-400 flex items-center"><FaCalendarAlt className="mr-2" /> 2023 - Present</p>
                        <p className="text-gray-300">Currently in my second year, diving deep into software development, networking, and cybersecurity.</p>
                    </div>

                    <div>
                        <div className="flex items-center mb-2">
                            <FaCertificate className="text-yellow-400 text-xl mr-2" />
                            <h3 className="text-xl font-semibold">Certifications</h3>
                        </div>
                        <ul className="text-gray-300 list-disc pl-6">
                            <li>Software Testing Fundamentals (2024)</li>
                            <li>ISTQB Certification (In Progress)</li>
                            <li>Web Development Hackathons Participation</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Me;
