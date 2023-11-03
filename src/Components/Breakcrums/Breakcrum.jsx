import React from 'react'
import './Breakcrum.css'
import arrow_icon from "../Assets/breadcrum_arrow.png"

export const Breakcrum = (props) => {
    const {product} = props;
  return (
    <div className='breakcrum'>
        Home <img src={arrow_icon} alt=''></img>
        SHOP <img src={arrow_icon} alt=''></img> {product.category} <img src={arrow_icon} alt=''></img> {product.name}
    </div>
  )
}
