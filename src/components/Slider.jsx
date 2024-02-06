import React from 'react'
import { Button } from './utils/Button'
const Slider = () => {
  return (
    <>
        <section id='slider' className='slider'>
            <div className="slider-content">
                <p className='hello'>Hello! I am Tanzim</p>
                <h1 className='text-uppercase'>Tanzim Rahman</h1>
                <h2>TRAVELER | WEB DEV | CUSTOMER SERVICE</h2>
                <p>Serving as Customer service Representative at Intact. Also training myself with frontend technology such as JavaScript, React JS and UX design</p>
                <Button text='See my works'/>
            </div>
        </section>
    </>
  )
}

export default Slider