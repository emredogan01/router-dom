import React from 'react'
import info from "../assets/about.jpg"


const about = () => {
  return (
    <div className='about'>
      <div className='image-about'>
        <img src={info} />
      </div>
      <div className='info-about'>
        <h2>Discover
          <br /> New
          <br />
           Horizons !</h2>
        <p>In a world where journeys define our experiences, tower stands as not just a manufacturer of bicycles, but as a curator of adventures. From urban explorations to off-road escapades, tower has been a steadfast companion for enthusiasts and adventurers alike.

        My fascination with tower began with a desire to embrace a more eco-friendly and health-conscious lifestyle. As I embarked on my journey with their bicycles, I found myself captivated by the brand's commitment to quality, innovation, and design. Each pedal stroke became a testament to their dedication to crafting top-notch riding experiences.</p>
      </div>
    </div>
  )
}

export default about;