import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import OnHoverContactCard from './OnHoverContactCard';
const Contact = () => {
  const [hover,setHover] = useState(false);
  return (
    <section id='contact' className='contact'>
      <div className="contact-card" onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}>
        <h2>{hover ? 'Have a great day :)' : 'Get in touch'}</h2>
        {hover ? <OnHoverContactCard/> :
        (<div className="contact-info">
          <div className="contact-details">
            <FontAwesomeIcon icon={faLocationDot} />
            <a>St. John's NL A1C3A8</a>
          </div>
          <div className="contact-details">
            <FontAwesomeIcon icon={faPhone} />  
            <a href='tel:+1 7097647769'>+1 7097647769</a>
          </div>
          <div className="contact-details">
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="mailto:tanzim008@gmail.com">tanzim008@gmail.com</a>
          </div>
        </div>)}
      </div>
    </section>
  )
} 

export default Contact