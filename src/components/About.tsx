/// <reference types="vite-plugin-svgr/client" />

import React, { useState } from 'react';
import PJATK from '../assets/Budenk A 6_20230710_fot.- Magdalena Pierzchała.jpg';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Reorder } from 'framer-motion';
import IntrestItem from './IntrestItem';
import Climb_Icon from '../assets/icons/man-climbing.svg?react';
import Hiking_Icon from '../assets/icons/mountain.svg?react';
import Music_Icon from '../assets/icons/guitar.svg?react';
import { useTranslation } from 'react-i18next';
import ErrorLight from '../assets/icons/404light.svg?react';
import ErrorDark from '../assets/icons/404dark.svg?react';

const initialIntrests = [
    { name: "Climbing", icon: Climb_Icon },
    { name: "Hiking", icon: Hiking_Icon },
    { name: "Music", icon: Music_Icon },
];


const About: React.FC = () => {
    const [sections] = useState(['Education', 'Experience', 'Skills', 'Interests']);
    const [activeSection, setActiveSection] = useState(sections[0]);
    const [theme, setTheme] = useState(localStorage.getItem('theme'));
    const [draggingIndex, setDraggingIndex] = useState<number | null>(null);
    const [intrests, setIntrests] = useState(initialIntrests);
    const { t } = useTranslation();

    const listVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
                ease: "easeOut",
                duration: 0.4
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
    };


    useEffect(() => {
        const handleStorageChange = () => {
            setTheme(localStorage.getItem('theme'));
        };

        window.addEventListener('themeChange', handleStorageChange);

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('themeChange', handleStorageChange);
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);
    return (
        <div className="pt-20 max-sm:pt-0">
            <div className='flex flex-col items-center justify-center bg-white z-50 md:w-180 lg:w-260 sm:w-140 mx-auto max-sm:mx-1 dark:bg-gray-800 p-5 rounded-lg shadow-lg'>
                <div className="flex w-full justify-between mx-52 border border-gray-200 rounded-lg shadow-sm bg-white space-x-0 overflow-hidden dark:bg-gray-800 dark:border-gray-700 max-lg:mx-20 max-md:mx-10 max-sm:mx-5">
                    {sections.map((section, index) => (
                        <button
                            key={section}
                            className={`flex-1 text-center p-1 transition duration-200 focus:outline-none focus:ring-lime-300 dark:focus:ring-purple-300 focus:ring-4 ${activeSection === section ? 'bg-lime-500 text-white dark:bg-purple-500' : 'hover:text-lime-600 dark:hover:text-purple-600'
                                } ${index !== sections.length - 1 ? 'border-r' : ''} hover:cursor-pointer`}
                            onClick={() => setActiveSection(section)}
                        >
                            {t(`about.sections.${section}`)}
                        </button>
                    ))}
                </div>
                <motion.div
                    key={activeSection}
                    className="w-full bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden mt-1 dark:border-gray-700 dark:bg-gray-800"
                    initial={{ maxHeight: 0, opacity: 0 }}
                    animate={{ maxHeight: 1000, opacity: 1 }}
                    exit={{ maxHeight: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <div className="flex flex-col lg:flex-row h-full">
                        <div className='flex flex-col p-4 w-full lg:w-1/2'>
                            {activeSection === 'Education' && (
                                <p>
                                    {t('about.paragraphs.Education1')}
                                    <br /><br />
                                    {t('about.paragraphs.Education2')}
                                </p>
                            )}
                            {activeSection === 'Experience' && (
                                <p>
                                    {t('about.paragraphs.Experience1')}
                                    <br /><br />
                                    {t('about.paragraphs.Experience2')}
                                </p>
                            )}
                            {activeSection === 'Skills' && (
                                <div>
                                    <p>
                                        {t('about.paragraphs.Skills1')}
                                        <br /><br />
                                        {t('about.paragraphs.Skills2')}
                                    </p>
                                    <ul className="list-disc list-inside mb-2">
                                        <li>{t('about.skillsList.OOP')}</li>
                                        <li>{t('about.skillsList.Databases')}</li>
                                        <li>{t('about.skillsList.Algorithms')}</li>
                                        <li>{t('about.skillsList.OS_Networks')}</li>
                                        <li>{t('about.skillsList.Math_Logic')}</li>
                                        <li>{t('about.skillsList.Teamwork')}</li>
                                    </ul>
                                </div>
                            )}
                            {activeSection === 'Interests' && (
                                <p>
                                    {t('about.paragraphs.Interests1')}
                                    <br /><br />
                                    {t('about.paragraphs.Interests2')}
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
                                <div className="w-full h-full flex items-center justify-center">
                                    <ErrorDark className={`w-full h-100 ${theme === 'light' ? 'hidden' : 'block'}`} />
                                    <ErrorLight className={`w-full h-100 ${theme === 'light' ? 'block' : 'hidden'}`} />
                                </div>
                            )}
                            {activeSection === 'Skills' && (
                                <motion.ul
                                    className="flex flex-wrap gap-4 mt-3 w-full px-8 justify-center items-center"
                                >
                                    {[
                                        { icon: "devicon-react-plain ", label: "React" },
                                        { icon: "devicon-typescript-plain ", label: "TypeScript" },
                                        { icon: "devicon-javascript-plain ", label: "JavaScript" },
                                        { icon: "devicon-html5-plain ", label: "HTML" },
                                        { icon: "devicon-css3-plain ", label: "CSS" },
                                        { icon: "devicon-cplusplus-plain ", label: "C++" },
                                        { icon: "devicon-csharp-plain ", label: "C#" },
                                        { icon: "devicon-dotnetcore-plain ", label: "ASP.NET" },
                                        { icon: "devicon-python-plain ", label: "Python" },
                                        { icon: "devicon-mysql-plain ", label: "SQL" },
                                        { icon: "devicon-java-plain ", label: "Java" },
                                    ].map((skill, idx) => (


                                        <motion.li
                                            key={skill.label}
                                            className="flex flex-col items-center justify-center min-w-max text-base lg:text-lg"
                                            style={{
                                                width: 100,
                                                height: 60,
                                                borderRadius: 14,
                                                backgroundColor: theme === 'light' ? '#fff' : '#4B5563',
                                                cursor: "grab",
                                                marginBottom: 8,
                                                boxShadow: "0 0px 10px rgba(0,0,0,0.07)"
                                            }}
                                            drag
                                            onDragStart={() => setDraggingIndex(idx)}
                                            onDragEnd={() => setDraggingIndex(null)}
                                            dragDirectionLock
                                            dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
                                            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                                            dragElastic={0.5}
                                            whileHover={{ scale: 1.15, transition: { duration: 0.15 } }}
                                            whileTap={{ scale: 0.9, cursor: "grabbing", transition: { duration: 0.05 } }}
                                            whileDrag={{ cursor: "grabbing", rotate: 5, transition: { duration: 0.05 } }}
                                            initial={{ x: 100, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 0.4, delay: idx * 0.07, ease: "easeInOut" }}
                                        >
                                            <i className={`${skill.icon} ${theme == 'light' ? 'colored' : ''} text-lg lg:text-xl flex justify-center transition-colors duration-300 ${draggingIndex === idx ? "text-purple-500" : ""}`}></i>
                                            <span className='text-xs lg:text-base '>{skill.label}</span>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            )}
                            {activeSection === 'Interests' && (
                                <motion.ul
                                    variants={listVariants}
                                    initial="hidden"
                                    animate="visible"
                                    className="w-full px-8 flex flex-col items-center justify-center"
                                >
                                    <Reorder.Group
                                        axis="y"
                                        values={intrests}
                                        onReorder={setIntrests}
                                        className="w-full flex flex-col items-center justify-center py-4"
                                    >
                                        {intrests.map((item) => (
                                            <motion.li key={item.name} variants={itemVariants} className="w-full">
                                                <IntrestItem intrest={item} />
                                            </motion.li>
                                        ))}
                                    </Reorder.Group>
                                </motion.ul>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;