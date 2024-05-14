import React from 'react'
import ExperienceCard from './ExperienceCard';
import {data} from './../data/experience';
import Title from './utils/Title'
const Experience = () => {
  return (
    <section id="work-experience" className='work-experience'>
        <Title title='My Work Experince'/>
        <div className="works">
            <ExperienceCard experiences={data}/>
        </div>
    </section>
  )
}

export default Experience