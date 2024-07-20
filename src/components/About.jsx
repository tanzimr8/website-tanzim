import React from 'react';
import Title from './utils/Title';
import { Button } from './utils/Button';
import TanzimImage from './../assets/images/tanzim.webp';
import Resume from './../assets/Resume.pdf';
const About = () => {
  return (
    <section id='about' className='about'>
      <div className="my-photo">
        <img src={TanzimImage} alt="Photo of Tanzim Rahman" />
      </div>
      <div className="about-me">
        <Title title='About me' />
        <p>I am an avid traveler, having explored the diverse landscapes of Bangladesh and the picturesque hilly towns along the Atlantic Ocean in Newfoundland, Canada. My passion for travel is matched only by my love for <strong>coding</strong>. <br/><br/>
        With 4 years of professional experience in <strong>web development</strong>, I have honed my skills in <strong>JavaScript (ES6), HTML, CSS, Bootstrap, and React. </strong> In my previous roles, I worked extensively with WordPress, PHP, and Laravel. Currently, I am training to become a Frontend Engineer, focusing on <strong> JavaScript, React.js, Bootstrap, and HTML/CSS. </strong> <br/> <br/>

          After relocating to Canada, I started working at Sobeys as a Sales Cashier and later transitioned to a Customer Service Representative role in the auto claims department at Intact Insurance. This experience was both new and exciting, enhancing my problem-solving abilities.</p>
        <a href={Resume} target='_blank' download  ><Button text='Download my CV' /></a>
      </div>
    </section>
  )
}

export default About