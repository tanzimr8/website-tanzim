import React from 'react'
import ExperienceCard from './ExperienceCard';
import {data} from './../data/experience'
const Experience = () => {
  return (
    <section id="work-experience" className='work-experience'>
        <h2>My Work Experince</h2>
        <div className="works">
            <ExperienceCard experiences={data}/>
        </div>
    </section>
  )
}

export default Experience