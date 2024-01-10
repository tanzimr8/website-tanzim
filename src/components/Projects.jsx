import React from 'react'
import Title from './utils/Title'
const Projects = () => {
  return (
    <section id='projects' className='projects'>
        <Title title="Web Projects"/>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="project-card">
                        <div className="project-image">Image</div>
                            <div className="project-info">
                                <div className="project-header">
                                    <div className="project-title">Develop a website using React</div>
                                    <a href="http://"></a>
                                </div>
                                <div className="project-details">
                                    <p>In the digital age, establishing an online presence is crucial for showcasing your skills and accomplishments. One effective way to achieve this is by creating a personal portfolio website. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="col-md-4"></div>
                <div className="col-md-4"></div>
            </div>
        </div>
    </section>  
  )
}

export default Projects