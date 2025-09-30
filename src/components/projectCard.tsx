import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
    id: number;
    title: string;
    shortDesc: string;
    githubLink: string;
    image: string;
    technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, shortDesc, githubLink, image, technologies}) => {
    console.log(technologies);
    console.log(image);
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
            <Link to={`/project/${id}`}>
                <img className="rounded-t-lg" src={image} alt="" />
            </Link>
            <div className="p-5">
                <Link to={`/project/${id}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 ">{shortDesc}</p>
                <div className="flex items-center justify-between align-center">
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-2 pr-1 text-sm font-medium text-center text-white bg-lime-500 rounded-lg hover:bg-lime-600 focus:ring-4 focus:outline-none focus:ring-lime-300 transition duration-200 ease-in-out transform hover:scale-105 justify-center align-center gap-1"
                    >
                        Read more
                        <span className="material-symbols-outlined">
                            chevron_right
                        </span>
                    </a>
                    <div className="flex flex-wrap">
                        {technologies.map((tech, index) => (
                            <span key={index} className="ml-2">
                                <i className={`devicon-${tech.toLowerCase()}-plain colored text-4xl`}></i>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProjectCard;