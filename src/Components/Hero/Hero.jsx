import React from 'react'
import  './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_imae from '../Assets/hero_image.png'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW  ARRIVALS ONLY</h2>
            <div>
                <div className='hero-hand-icon'>
                    <p>new</p>
                    <img src={hand_icon} alt=''/>

                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className='hero-latest-btn'>
                <div>Latest Collection</div>
                <img src={arrow_icon} alt=''></img>
            </div>

        </div>

        <div className='hero-right'>
            <img src={hero_imae} alt=''></img>
        </div>
    </div>
  )
}
