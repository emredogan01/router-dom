import React from 'react'
import { Link } from 'react-router-dom'
import {PiBicycleDuotone} from "react-icons/pi"

const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid ">
    <Link id='nav-logo' to={"/"} className=" navbar-brand"><PiBicycleDuotone/><span>Tower</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to={"/"} className="nav-link active" aria-current="page">HOME</Link>
        </li>
        <li className="nav-item">
          <Link to={"/about"} className="nav-link active" aria-current="page">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link to={"/contact"} className="nav-link" >CONTACT</Link>
        </li>
        <li className="nav-item">
          <Link to={"/products"} className="nav-link">PRODUCTS</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar;