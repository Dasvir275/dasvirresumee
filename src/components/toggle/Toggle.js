import React, { useContext } from 'react'
import Moon from "../../img/moon.png"
import Sun from "../../img/sun.png"
import './Toggle.css'
import { ThemeContext } from '../../context'
function Toggle() {
    const theme=useContext(ThemeContext);
    function handelclick(){
        theme.dispatch({type:"TOGGLE"});
    }
    
  return (
    <div className='t'>
    <img src={Sun} alt=""  className='t-icon'/>
    <img src={Moon} alt=""  className='t-icon'/>
    <div className="t-button" onClick={handelclick} style={{left:theme.state.darkMode ? 0 : 25}}></div>
    </div>
  )
}

export default Toggle
