import React from 'react'
import cont from "../assets/contact.jpg"

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-info'>
        <img src={cont} />
      </div>
      <div className='contact-form'>
        <h1>  Contact us !</h1>
        <form >
          <label>Enter Full Name</label>
          <input type="text" placeholder='Name' />
          <label>Enter Last Name</label>
          <input type="text" placeholder='Last Name' />
          <label>Message</label>
          <textarea cols="30" rows="10" placeholder='Enter Message'></textarea>
          <button className='btn btn-dark'>Submit</button>
        </form>
      </div>
          
    </div>
  )
}

export default Contact