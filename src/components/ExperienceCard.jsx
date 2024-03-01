import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const ExperienceCard = ({experiences}) => {
  return (
    <>
    {
     experiences.map((experience)=>{
        return (
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">{experience.position} @ {experience.company}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{experience.start} - {experience.end} | {experience.location}</h6>
                <ul>
                {experience.responsibilities.map((responsibility)=>{
                    return (<li>{responsibility}</li>)
                })}
                </ul>
                <a href={experience.url} target='_blank' className="card-link">About Company <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
            </div>
        </div>
        );
     })   
    }
        
    </>
  )
}

export default ExperienceCard