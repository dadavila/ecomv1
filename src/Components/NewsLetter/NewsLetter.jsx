import React from 'react'
import './NewsLetter.css'
export const NewsLetter = () => {
  return (
    <div className='newsletter'> 
      <h1>Obten Ofertas Exclusivas en tu Email</h1>
      <p>Subscribete y ponte al día!</p>
      <div>
        <input type="email" placeholder='Your Email id' />
        <button>Subscribete</button>
      </div>
    </div>
  )
}
