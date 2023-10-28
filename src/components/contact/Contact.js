import React, { useContext, useRef, useState } from 'react'
import './Contact.css'
import Phone from "../../img/phone.png"
import Address from "../../img/address.png"
import Email from "../../img/email.png"
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context'

function Contact() {

    const formref=useRef();
    const [done,setdone]=useState(false);
    const theme=useContext(ThemeContext);
  const darkmode=theme.state.darkMode;
    const handelsubmit=(e)=>{
        e.preventDefault();
        emailjs.sendForm("service_gtvkv36",'template_76hp3ia', formref.current, 'PUSI5Fu-3I_6Mxqej')
        .then((result) => {
            console.log(result.text);
            setdone(true);
        }, (error) => {
            console.log(error.text);
        });
    }
  return (
    <div className='c'>
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
            <h1 className='c-title'>Lets discuss your project</h1>
            <div className="c-info">
                <div className="c-info-item">
                    <img src={Phone} alt="" className='c-icon' />
                    +91 7009073061
                </div>
                <div className="c-info-item">
                    <img src={Email} alt="" className='c-icon' />
                    dasvirsingh07@gmail.com
                </div>
                <div className="c-info-item">
                    <img src={Address} alt="" className='c-icon' />
                    Village Hiyatpur P/O Kotli khass Tehsil Mukerian District Hoshiarpur,Punjab-144306
                </div>
            </div>
        </div>
        <div className="c-right">
        <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formref} onSubmit={handelsubmit}>
            <input style={{backgroundColor:darkmode  && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkmode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkmode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkmode && "#333"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>

        </div>
      </div>
    </div>
  )
}

export default Contact
