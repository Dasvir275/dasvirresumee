import React from 'react'
import './About.css'
import Award from '../../img/award.png'
import Me from "../../img/me2.png"
function About() {
  return (
    <div className='a'>
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
            <img src={Me} alt="" />
        </div>
      </div>
      <div className="a-right">
        <h1 className='a-title'>About Me</h1>
        <p className='a-sub'>
        “The 50-50-90 rule: Anytime you have a 50-50 chance of getting something right, there's a 90% probability you'll get it wrong.” - Anonymous
        </p>
        <p className='a-desc'>
        “Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.”Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, sunt itaque! Animi vitae placeat assumenda nesciunt tenetur totam minima laudantium nisi architecto voluptates quidem unde, exercitationem, minus suscipit, ratione excepturi.
        </p>
        <div className="a-award">
            <img src={Award} alt="" className='a-award-img' />
            <div className="a-award-texts">
            <h4 className='a-award-title'>International Design</h4>
            <p className='a-award-desc'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis iusto, eum animi laborum debitis, sapiente obcaecati fugiat, ipsa quidem provident ipsam quaerat iste quod quibusdam labore ipsum repudiandae et saepe?
            </p>

            </div>
        </div>
      </div>
    </div>
  )
}

export default About
