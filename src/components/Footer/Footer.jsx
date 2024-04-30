import React, { useState } from 'react'
import './Footer.css'

import { Link, NavLink } from 'react-router-dom';

const Footer = () => {

  const [menuOpened, setMenuOpened] = useState(false)
  const getMenuStyles =(menuOpened) =>{
   if (document.documentElement.clientWidth <= 800)
   {
   return{right: !menuOpened && "-100% "}
 }
 }
  return (
   <section className="f-wrapper">
    <div className="paddings innerWidth flexCenter f-container">
        {/* left side*/}
        <div className="flexColStart f-left">
        <Link to={"/"}>
            <img src="./logo.png" alt=""width={120} />
            </Link>
            <p className='secondaryText'>
              &#169;
              Boulotoes, All Right Reserved.
            </p>
        </div>
        <div className="flexColStart f-right">
          <span className='secondaryText'>
          Made By Boulotoes
          </span>
          <div className="flexCenter f-menu">

          <div className="flexCenter h-menu"
            style={getMenuStyles(menuOpened)}
            >

              <NavLink to="/services">Services</NavLink>
              <NavLink to="/values">Our Value</NavLink>
              <NavLink to="/projects">Projects</NavLink>
              <button className='button'>
              <a href="mailto:boulotoes@gmai.com">Contact</a>
              </button>
             
            </div>
          </div>
        </div>
    </div>
   </section>
  )
}

export default Footer