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
                                I'm currently a seventh-semester student at the Polish-Japanese Academy of Information Technology, majoring in computer science.
                                <br /><br />
                                I began my studies in 2022. I've learned a lot over the past few years; the university has given me a solid foundation in software development. I have many skill areas open to me, waiting to be developed through experience. During my studies, I completed many interesting subjects and completed many cool projects. I learned how to work in a team in software design and development.
                            </p>
                        )}
                        {activeSection === 'Experience' && (
                            <p>
                                Although I don't have experience strictly in commercial software development, over the past few years I've taken on various non-software jobs, such as working as a technician for audio-video conferences, working in fast food restaurants, and tutoring in math and programming.
                                <br /><br />
                                Most of my software experience comes from school and working on project assignments.
                            </p>
                        )}
                        {activeSection === 'Skills' && (
                            <div>
                                <p>
                                I've listed most of my programming skills on the home page and here too.
                                <br /><br />
                                Also:
                                </p>
                                <ul className="list-disc list-inside mb-2">
                                    <li>OOP principles, design patterns, testing, Git</li>
                                    <li>Designing and maintaining relational databases</li>
                                    <li>Algorithms and data structures, complexity analysis</li>
                                    <li>Fundamentals of operating systems and computer networks</li>
                                    <li>Mathematics and logic for computer scientists</li>
                                    <li>Teamwork, project documentation, and presentation</li>
                                </ul>
                            </div>
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
                            <motion.ul
                                className="flex flex-wrap gap-4 mt-3 w-full px-8 justify-center items-center"
                            >
                                {[
                                    { icon: "devicon-react-plain colored", label: "React" },
                                    { icon: "devicon-typescript-plain colored", label: "TypeScript" },
                                    { icon: "devicon-javascript-plain colored", label: "JavaScript" },
                                    { icon: "devicon-html5-plain colored", label: "HTML" },
                                    { icon: "devicon-css3-plain colored", label: "CSS" },
                                    { icon: "devicon-cplusplus-plain colored", label: "C++" },
                                    { icon: "devicon-csharp-plain colored", label: "C#" },
                                    { icon: "devicon-dotnetcore-plain colored", label: "ASP.NET" },
                                    { icon: "devicon-python-plain colored", label: "Python" },
                                    { icon: "devicon-mysql-plain colored", label: "SQL" },
                                    { icon: "devicon-java-plain colored", label: "Java" },
                                ].map((skill, idx) => (
                                    <motion.li
                                        key={skill.label}
                                        className="flex flex-col items-center justify-center min-w-max text-base lg:text-lg"
                                        style={{
                                            width: 100,
                                            height: 60,
                                            borderRadius: 14,
                                            backgroundColor: "#fff",
                                            cursor: "grab",
                                            marginBottom: 8,
                                            boxShadow: "0 2px 8px rgba(0,0,0,0.07)"
                                        }}
                                        drag
                                        dragDirectionLock
                                        dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
                                        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                                        dragElastic={0.5}
                                        whileHover={{ scale: 1.15, transition: { duration: 0.15 } }}
                                        whileTap={{ scale: 0.9 ,cursor: "grabbing" , transition: { duration: 0.05 }}}
                                        whileDrag={{ cursor: "grabbing" , rotate: 5 , transition: { duration: 0.05 }}}
                                        initial={{ x: 100, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.4, delay: idx * 0.07, ease: "easeInOut" }}
                                    >
                                        <i className={`${skill.icon} text-lg lg:text-xl flex justify-center`}></i>
                                        <span className="text-xs lg:text-base text-center">{skill.label}</span>
                                    </motion.li>
                                ))}
                            </motion.ul>
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