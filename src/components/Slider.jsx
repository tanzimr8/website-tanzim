import React from 'react'
import { Button } from './utils/Button'
const Slider = () => {
  return (
    <>
        <section id='slider' className='slider'>
            <div className="slider-content">
                <p className='hello'>Hello! I am</p>
                <h1>Tanzim Rahman</h1>
                <h2>WEB DEV | TRAVELER</h2>
                <p>Serving as Customer service Representative at Intact. Also training myself with frontend technology such as JavaScript, React JS and UX design</p>
                <a href='#about'><Button text='See my works'/></a>
            </div>
        </section>
    </>
  )
}

export default Slider