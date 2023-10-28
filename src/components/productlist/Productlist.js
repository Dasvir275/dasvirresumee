import React from 'react'
import './Productlist.css'
import Product from '../product/Product'
import { products } from '../../data'
function Productlist() {
  return (
    <div className='pl'>
      <div className="pl-texts">
        <h1 className='pl-title'>Create & inspire.It's Mern Apps</h1>
        <p className='pl-desc'>
        A MERN application is a full-stack web application that uses JavaScript as the main programming language1234. The MERN stack consists of four components: React for the front-end, Express and Node for the back-end, and MongoDB for the database1234. The MERN stack is an open-source and user-friendly solution for developing and deploying dynamic web applications24.
        </p>
      </div>
      <div className="pl-list">
      {
        products.map((item)=>{
            return(
            <Product key={item.id} img={item.img} link={item.link}/>
            )
        })
      }
      
        
      </div>
    </div>
  )
}

export default Productlist
