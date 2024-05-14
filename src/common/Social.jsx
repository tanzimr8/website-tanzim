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
        <FaLinkedinIn />
        <FaGithub />
        <FaGoodreadsG />
        <FaInstagram />
        <FaFacebookF />
        <FaXTwitter />
        {/* <HiOutlineArrowLongDown /> */}
      </div>
    </div>
  )
}

export default Social;