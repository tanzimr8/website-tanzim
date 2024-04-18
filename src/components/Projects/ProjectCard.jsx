import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
const ProjectCard = ({ filteredProjectData, visibleProjectCount }) => {
    return (
        <>
            {
                filteredProjectData.map((project, index, card) => (
                    <div className="project-card" key={index}>
                        <div className="project-item">
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
                    </div>
                ))}
        </>
    )
}

export default ProjectCard