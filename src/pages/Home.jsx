import React from 'react'
import { Link } from 'react-router-dom'

const home = () => {
  return (
    <div className='home-contents'>
        <div className='home-card'>
        <h1>Welcome to the world of healthier choices!</h1> 
            <p>
            Embracing bicycles not only benefits the environment but also your well-being. Cycling regularly boosts cardiovascular fitness, strengthens muscles, and aids weight management.</p>
            <div class="wrapper">
                <Link id='a' to={"/about"}><span>About Us!</span></Link>
            </div>
        </div>
    </div>
  )
}

export default home