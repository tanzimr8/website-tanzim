import React from 'react'
import { Button } from './utils/Button';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaGoodreadsG } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Slider = () => {
  return (
    <>
      <section id='slider' className='slider'>
        <div className="slider-content">
          <p className='hello'>Hello! I am</p>
          <h1>Tanzim Rahman</h1>
          <h2>FRONT-END DEVELOPER</h2>
          <p>A JavaScript Enthusiast, love to solve problems and training myself with frontend technology such as JavaScript, React JS , Next JS, and UX design</p>
          <a href='#projects'><Button text='See my works' /></a>
          <div className='slider-social-icons-container'>
            <div className="slider-social-icons">
              <a href='https://www.linkedin.com/in/tanzim-rahman08/'><FaLinkedinIn /></a>
              <a href='https://github.com/tanzimr8'><FaGithub /></a>
              <a href='https://www.goodreads.com/tanzimr8'><FaGoodreadsG /></a>
              <a href='https://www.instagram.com/tanzim_r_'><FaInstagram /></a>
              <a href='https://www.facebook.com/taanzim'><FaFacebookF /></a>
              <a href='https://twitter.com/tanzimr8'><FaXTwitter /></a>
            </div>
          </div>
        </div>
        {/* <div className="slider-git"></div> */}
      </section>
    </>
  )
}

export default Slider