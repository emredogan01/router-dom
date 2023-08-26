import React from 'react'
import {AiFillInstagram, AiFillLinkedin, AiFillFacebook} from "react-icons/ai"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-tags'>
        <p> &copy; 2022 bicycle.com</p>
        <div className='footer-icons'>
            <AiFillInstagram />
            <AiFillLinkedin />
            <AiFillFacebook />
        </div>
        </div>
    </div>
  )
}

export default Footer