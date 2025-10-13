import React from 'react';
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface ProjectCardProps {
    id: number;
    title: string;
    shortDescEn: string;
    shortDescPl: string;
    githubLink: string;
    image: string;
    technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, shortDescEn, shortDescPl, githubLink, image, technologies }) => {
    const x = useMotionValue(200);
    const y = useMotionValue(200);
    const { t , i18n } = useTranslation();
    const shortDesc = i18n.language === 'pl' ? shortDescPl : shortDescEn;   


    const [theme, setTheme] = useState(localStorage.getItem('theme'));

    useEffect(() => {
        const handleStorageChange = () => {
            setTheme(localStorage.getItem('theme'));
        };

        // Dla zmian w tym samym oknie, np. przy zmianie motywu
        window.addEventListener('themeChange', handleStorageChange);

        // Dla zmian w innych tabach
        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('themeChange', handleStorageChange);
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const rotateX = useTransform(y, [0, 400], [2, -2]);
    const rotateY = useTransform(x, [0, 400], [-2, 2]);

    function handleMouse(event: React.MouseEvent) {
        const rect = event.currentTarget.getBoundingClientRect();

        x.set(event.clientX - rect.left);
        y.set(event.clientY - rect.top);
    }
    console.log(technologies);
    console.log(image);
    return (
        <motion.div
            className='w-full h-full'
            style={{
                placeItems: "center",
                placeContent: "center",
                borderRadius: 30,
                perspective: 400,
            }}
            onMouseMove={handleMouse}
        >
            <motion.div
                className='w-full h-full'
                style={{
                    borderRadius: 30,
                    rotateX,
                    rotateY,
                    transition: "0.2s",
                }}
            >
                <div className="h-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col flex-grow justify-between dark:bg-gray-800 dark:border-gray-700">
                    <a href={githubLink} target="_blank" rel="noopener noreferrer">
                        {image && (
                            <img
                                className="rounded-t-lg w-full h-48 object-cover"
                                src={image}
                                alt=""
                            />
                        )}
                    </a>
                    <div className="p-5 flex flex-col flex-grow flex-1">
                        <a href={githubLink} target="_blank" rel="noopener noreferrer">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">{title}</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 flex-grow dark:text-gray-200 flex-1">{shortDesc}</p>
                        <div className="flex items-center justify-between mt-auto">
                            <a
                                href={githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-3 py-2 pr-1 text-sm font-medium text-center text-white bg-lime-500 rounded-lg hover:bg-lime-600 focus:ring-4 focus:outline-none focus:ring-lime-300 transition duration-200 ease-in-out transform hover:scale-105 justify-center gap-1 dark:bg-purple-500 dark:hover:bg-purple-600 dark:focus:ring-purple-300"
                            >
                                {t("projects.buttons.ReadMore")}
                                <span className="material-symbols-outlined">chevron_right</span>
                            </a>
                            <div className="flex flex-wrap">
                                {technologies.map((tech, index) => (
                                    <span key={index} className="ml-2">
                                        <i className={`devicon-${tech.toLowerCase()}-plain ${theme == 'light' ? 'colored' : ''} text-4xl transition duration-200`}></i>
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ProjectCard;