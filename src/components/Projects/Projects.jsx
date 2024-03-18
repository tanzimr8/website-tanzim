import React, { useState, useEffect } from 'react';
import Title from '../utils/Title';
import ProjectCard from './ProjectCard';
import { data } from './../../data/projects.js'
import ProjectTab from './ProjectTab.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  const [projectData, setProjectData] = useState(data);
  const [currentTab, setCurrentTab] = useState('');
  const [projectTool, setProjectTool] = useState([]);

  useEffect(() => {
    // Use useEffect to update projectTool when projectData changes
    const tools = projectData.reduce((acc, project) => {
      return [...acc, ...project.tools];
    }, []);
    setProjectTool(tools);
  }, [projectData]); // Dependency array ensures useEffect runs when projectData changes

  return (
    <section id='projects' className='projects'>
      <Title title="Web Projects" />
      <div className="project-tabs">
        <div className="project-tab">
          {/* Render project tools */}
          {projectTool.map((tool, index) => (
            <p key={index}>{tool}</p>
          ))}
        </div>
      </div>
      <div className="projects-card">
        {/* Render project cards */}
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-name">
              <h2>{project.title}</h2>
            </div>
            <div className="project-details">
              <p>{project.details}</p>
            </div>
            <div className="project-tools">
              {project.tools.map((tool, index) => (
                <p key={index}>{tool}</p>
              ))}
            </div>
            <div className="project-links">
              <a href={project.link} target='_blank' rel="noreferrer">
                VIEW PROJECT <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
