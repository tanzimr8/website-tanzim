import React from 'react'
import { Button } from './utils/Button'
const Slider = () => {
  return (
    <>
        <section id='slider' className='slider'>
            <div className="slider-content">
                <p className='hello'>Hello! I am</p>
                <h1>Tanzim Rahman</h1>
                <h2>FRONT-END DEVELOPER</h2>
                <p>A JavaScript Enthusiast, love to solve problems and training myself with frontend technology such as JavaScript, React JS , Next JS, and UX design</p>
                <a href='#projects'><Button text='See my works'/></a>
            </div>
            {/* <div className="slider-git"></div> */}
        </section>
    </>
  )
}

export default Slider