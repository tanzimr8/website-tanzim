import React, { useState } from 'react'

const ProjectTab = ({projectsData,setProjectData}) => {
    const [projectCategory,setProjectCategory] = useState([]);
    return (
        <>
            <p className='active'>All</p>
            {projectsData.map((project)=>{
                project.tools.map((tool)=>{
                    const newArr = [...projectCategory,tool];
                    setProjectCategory(...newArr)
                })
            })}
        </>
    )
}

export default ProjectTab