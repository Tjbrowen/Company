import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
   <section className="f-wrapper">
    <div className="paddings innerWidth flexCenter f-container">
        {/* left side*/}
        <div className="flexColStart f-left">
            <img src="./logo.png" alt=""width={120} />
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

<span>Our Services</span><span>Our Values</span><span>Contact Us</span><span>Get Started</span>
          </div>
        </div>
    </div>
   </section>
  )
}

export default Footer