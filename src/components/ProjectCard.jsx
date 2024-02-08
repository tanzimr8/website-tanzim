import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
const ProjectCard = ({projectsData}) => {
  return (
    <>
    {
        projectsData.map((project)=>{
            return (
                <div className="project-card">
                    <div className="project-name">
                        <h2>{project.title}</h2>
                    </div>
                    <div className="project-details">
                        <p>{project.details}</p>
                    </div>
                    <div className="project-tools">
                        {project.tools.map((tool)=>{
                            return <p>{tool}</p>
                        })}
                    </div>
                    <div className="project-links">
                    <a href={project.link}><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                    </div>
                </div>
            )
        })
    }
    </>
  )
}

export default ProjectCard