import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';

const OnHoverContactCard = () => {
  return (
    <>
        <div className="contact-icons">
            <a href='' target='_blank'><FontAwesomeIcon icon={faLocationDot} /></a>
            <a href='tel:+17097647769' target='_blank'><FontAwesomeIcon icon={faPhone} /></a>
            <a href='mailto:tanzim008@gmail.com' target='_blank'><FontAwesomeIcon icon={faEnvelope} /></a>
        </div>
    </>
  )
}

export default OnHoverContactCard