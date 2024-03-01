import React, { useState } from 'react'
import Title from './utils/Title'
import { activityData } from '../data/activities';
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { FaRegCircle, FaRegCircleDot } from "react-icons/fa6";


const RecentActivity = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const handleLeftClick = () => {
        setCurrentSlide(currentSlide === 0 ? activityData.length - 1 : currentSlide - 1)
    }
    const handleRightClick = () => {
        setCurrentSlide(currentSlide === activityData.length - 1 ? 0 : currentSlide + 1)

    }
    return (
        <section id='activity' className='activity'>
            <Title title="Recent Activities" />
            <div className="activities-card-wrapper">
                <div className="activities-card">
                    <div className="arrow arrow-left" onClick={handleLeftClick}><FaChevronCircleLeft size={30} /></div>
                    {
                        activityData.map((activity, index) => {
                            return (
                                <div key={index} className={currentSlide === index ? 'activity' : 'hide'}>
                                    <div className="activity-name">
                                        <h2>{activity.title}</h2>
                                    </div>
                                    <div className="activity-date">
                                        <h6>{activity.date}</h6>
                                    </div>
                                    <div className="activity-details">
                                        <p>{activity.details}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div onClick={handleRightClick} className="arrow arrow-right"><FaChevronCircleRight size={30} /></div>
                    <span className="dot-indicators">
                    {
                        activityData.map((_, index) => {
                            return (
                                
                                    <span key={index}  className="dot-indicator">
                                        <FaRegCircleDot />
                                    </span>
                                
                            )
                        })
                    
                    }
                    </span>

                </div>
            </div>
        </section>
    )
}

export default RecentActivity