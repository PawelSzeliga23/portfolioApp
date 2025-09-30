import React from 'react';
import projects from '../data/projects.json';
import ProjectCard from './projectCard';

const Projects: React.FC = () => {


    return (
        <div className="container mx-auto p-4 mt-20 flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:max-lg:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        id={project.id}
                        title={project.title}
                        shortDesc={project.shortDesc}
                        githubLink={project.github1}
                        image={project.images[0]}
                        technologies={project.technologies}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
