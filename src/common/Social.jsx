import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaGoodreadsG } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// import { HiOutlineArrowLongDown } from "react-icons/hi2";


const Social = () => {
  return (
    <div className='social-icons-container'>
      <div className="social-icons">
        <a target='_blank'  href='https://www.linkedin.com/in/tanzim-rahman08/'><FaLinkedinIn/></a>
        <a target='_blank' href='https://github.com/tanzimr8'><FaGithub/></a>
        <a target='_blank' href='https://www.goodreads.com/tanzimr8'><FaGoodreadsG/></a>
        <a target='_blank' href='https://www.instagram.com/tanzim_r_'><FaInstagram/></a>
        <a target='_blank' href='https://www.facebook.com/taanzim'><FaFacebookF/></a>
        <a target='_blank' href='https://twitter.com/tanzimr8'><FaXTwitter/></a>
        {/* <HiOutlineArrowLongDown /> */}
      </div>
    </div>
  )
}

export default Social;