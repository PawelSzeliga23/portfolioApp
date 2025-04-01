import React, { useState } from 'react';
import PJATK from '../assets/Budenk A 6_20230710_fot.- Magdalena Pierzchała.jpg';
import INTREST from '../assets/Intrest.jpg';
import { motion } from 'framer-motion';
const About: React.FC = () => {
    const [sections] = useState(['Education', 'Experience', 'Skills', 'Interests']);
    const [activeSection, setActiveSection] = useState(sections[0]);
    return (
        <div className='mt-20 flex flex-col items-center justify-center bg-white z-50 md:w-180 lg:w-260 sm:w-140 mx-auto max-sm:mx-1'>
            <div className="flex w-full justify-between mx-52 border border-gray-200 rounded-lg shadow-sm bg-white space-x-0 overflow-hidden">
                {sections.map((section, index) => (
                    <button
                        key={section}
                        className={`flex-1 text-center p-1 transition duration-200 ${activeSection === section ? 'bg-lime-500 text-white' : 'hover:text-lime-600'
                            } ${index !== sections.length - 1 ? 'border-r' : ''} hover:cursor-pointer`}
                        onClick={() => setActiveSection(section)}
                    >
                        {section}
                    </button>
                ))}
            </div>
            <motion.div
                key={activeSection}
                className="w-full bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden mt-1"
                initial={{ maxHeight: 0, opacity: 0 }}
                animate={{ maxHeight: 1000, opacity: 1 }}
                exit={{ maxHeight: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                <div className="flex flex-col lg:flex-row h-full">
                    <div className='flex flex-col p-4 w-full lg:w-1/2'>
                        {activeSection === 'Education' && (
                            <p>
                                This is the Education section. Here you can add details about your educational background.
                            </p>
                        )}
                        {activeSection === 'Experience' && (
                            <p>
                                This is the Experience section. Here you can add details about your professional experience.
                            </p>
                        )}
                        {activeSection === 'Skills' && (
                            <p>
                                This is the Skills section. Here you can add details about your skills and expertise.
                            </p>
                        )}
                        {activeSection === 'Interests' && (
                            <p>
                                This is the Interests section. Here you can add details about your hobbies and interests.
                            </p>
                        )}
                    </div>
                    <div className="w-full lg:w-1/2 h-full flex items-center">
                        {activeSection === 'Education' && (
                            <img
                                src={PJATK}
                                alt="Education"
                                className="w-full h-full object-cover object-[left_top]"
                            />
                        )}
                        {activeSection === 'Experience' && (
                            <img
                                src="path/to/experience-image.jpg"
                                alt="Experience"
                                className="w-full h-full object-cover object-[left_top]"
                            />
                        )}
                        {activeSection === 'Skills' && (
                            <img
                                src="path/to/skills-image.jpg"
                                alt="Skills"
                                className="w-full h-full object-cover object-[left_top]"
                            />
                        )}
                        {activeSection === 'Interests' && (
                            <img
                                src={INTREST}
                                alt="Interests"
                                className="w-full h-full object-cover"
                            />
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default About;