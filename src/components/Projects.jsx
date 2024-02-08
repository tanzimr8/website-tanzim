import React from 'react';
import Title from './utils/Title';
import ProjectCard from './ProjectCard';
import {projectData} from './../data/projects';
const Projects = () => {
  return (
    <section id='projects' className='projects'>
        <Title title="Web Projects"/>
        <div className="projects-card">
            <ProjectCard projectsData = {projectData}/>
        </div>
    </section>  
  )
}

export default Projects