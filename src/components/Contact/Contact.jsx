import React from 'react'
import "./Contact.css"
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

export const Contact = () => {
  return (
   <section className="c-wrapper">
    <div className="paddings innerWidth flexCenter c-container">
        {/* left side*/}
        <div className=' flexColStart c-left'>
            <span className='primaryText'>
           Contact us
            </span>
            <span className='secondaryText'>
            We always ready to serve by providing the best<br></br>
            service the best we can.
            </span>
            <div className="flexColStart contactModes">
                {/*first row*/}
                <div className="flexStart row">
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                            <MdCall size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>
                                Call
                                </span>
                                <span className='secondaryText'>
                                076 256 7775
                                </span>
                            </div>
                        </div>
                        <div className="flexCenter button">
                        <a href='tel:+27-762-567-775'>  Call Now </a>
                        </div>
                    </div>
                    {/*second mode*/}
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                            <BsFillChatDotsFill size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>
                                    Chat
                                </span>
                                <span className='secondaryText'>
                                072 592 4557
                                </span>
                            </div>
                        </div>
                        <div className="flexCenter button">
                        <a href='tel:+27-725-924-557'>   Chat Now  </a>
                        </div>
                    </div>
                    
                </div>
                {/*second row*/}
                <div className="flexStart row">
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                            <BsFillChatDotsFill size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>
                                    Video Call
                                </span>
                                <span className='secondaryText'>
                                
                                </span>
                            </div>
                        </div>
                        <div className="flexCenter button">
                        <a href='tel:+27-762-567-775'>  VideoCall Now  </a>
                        </div>
                    </div>
                    {/*fourth mode*/}
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                            <HiChatBubbleBottomCenter size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>
                                    Message
                                </span>
                                <span className='secondaryText'>
                               
                                </span>
                            </div>
                        </div>
                        <div className="flexCenter button">
                        <a href="mailto:boulotoes@gmai.com">E-mail now</a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        {/*right side*/}
        <div className="c-right">
            <div className="image-container">
        <img src="./contact.png" alt="" />
        </div>
        </div>
    </div>
   </section>
  )
}
