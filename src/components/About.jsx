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
            <Title title='About me'/>
            <p><strong>I would love to introduce </strong> me as a traveler. I have been Traveling from the ins and outs of Bangladesh to the beautiful hilly towns besides the Atlantic ocean in Newfoundland, Canada. After travelling my passion comes for coding.<br/>
            <strong>I have been working </strong> with the web technologies such as JavaScript(ES6), HTML, CSS, Bootstrap, React etc. I have a 4 years of professional experience in Web Development. In my workplace I used to work with WorpdPress, PHP and Laravel. But, at this moment I am training myself as Frontend Engineer. My expertise is in Javascript, React JS, Bootstrap and HTML/CSS<br/>
            <strong>After moving to Canada</strong> I started working in Sobeys as a Sales Cashier. Then , I worked as a Customer Service Representative in the auto claims department in Intact insurance company. It had been a very new experience for me and It was exciting and helped me to improve my problem solvi ng ability.</p>
            <a href={Resume} target='_blank' download  ><Button text='Download my CV'/></a>
        </div>
    </section>
  )
}

export default About