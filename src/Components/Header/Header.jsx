import React from 'react'
import '../Header/css/Headermin.css'
import '../Header/css/Header.css'
import businessman from '../assets/business-3d-young-man-in-formalwear-sitting-on-the-floor-with-phone.png'

const Header = () => {
  return (
   <header className='sutl'>
    <div className='info'>
        <h1>Digitalize your Identity</h1>
        <p>Carry your identity without carrying a card</p>
        
    </div>
    <figure className='anit'>
        <img className='numb' src={businessman} alt="businessman" />
            {/* <figcaption>Man in business</figcaption> */}
        </figure>
   </header>
  )
}

export default Header