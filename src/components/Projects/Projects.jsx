import React, { useState, useEffect } from 'react';
import Title from '../utils/Title';
import ProjectCard from './ProjectCard';
import { data } from './../../data/projects.js'
import ProjectTab from './ProjectTab.jsx';
const Projects = () => {
  const [projectData, setProjectData] = useState(data);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProjectData, setFilteredProjectData] = useState([...projectData]);

  const filteredCategory = [...new Set(projectData.map((project) => {
    return project.category;
  }))];

  const handleCategoryChange = (getCurrentCategory) => {
    setFilteredProjectData(projectData.filter((project) => {
      return project.category === getCurrentCategory;
    }))
    setSelectedCategory(getCurrentCategory);
  }
  return (
    <section id='projects' className='projects'>
      <Title title="Web Projects" />
      <div className="project-tabs">
        <ProjectTab 
        projectData= {projectData}
        selectedCategory = {selectedCategory} 
        setSelectedCategory={setSelectedCategory} 
        filteredCategory={filteredCategory} 
        setFilteredProjectData={setFilteredProjectData}
        handleCategoryChange={handleCategoryChange} />
      </div>
      <div className="projects-card">
        <ProjectCard filteredProjectData={filteredProjectData}/>
      </div>
    </section>
  );
};

export default Projects;
