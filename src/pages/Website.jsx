import React from 'react'
import { Hero } from "../components/Hero/Hero";
import Companies from "../components/Companies/Companies";
import Services from "../components/Services/Services";
import Value from "../components/Value/Value";
import { Contact } from "../components/Contact/Contact";
import GetStarted from "../components/GetStarted/GetStarted";


const Website = () => {
  return (
    <div className="App">
    <div>
      <div className="white-gradient"/>
    
    <Hero/>
    </div>
   <Companies/>
   
   <Contact/>
   <GetStarted/>
     
    </div>
  )
}

export default Website