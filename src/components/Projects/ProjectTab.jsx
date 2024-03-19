import React, { useState } from 'react'

const ProjectTab = ({ projectData,selectedCategory, setSelectedCategory,filteredCategory,setFilteredProjectData, handleCategoryChange }) => {
    return (
        <>
            <div className="project-tab">
                {/* Render project tools */}
                <p className={selectedCategory === 'All' ? 'active' : null} onClick={() => {
                    setSelectedCategory('All');
                    setFilteredProjectData(projectData)
                }}>All</p>
                {filteredCategory.map((category) => {
                    return (
                        <p className={selectedCategory === category ? 'active' : null} key={category} onClick={() => { handleCategoryChange(category) }}>{category}</p>
                    )

                })}
            </div>
        </>
    )
}

export default ProjectTab