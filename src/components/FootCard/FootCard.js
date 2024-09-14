import React from 'react'
import "./FootCard.css"
import VegIcon from "./icons8-man-firefighter-48.png"
import nonvegIcon from "../FootCard/icons8-artificial-64.png"
import { THEME } from './../../config/data'


function FootCard({imgUrl,title,description,isveg,price}) {
  
  return (
    <div className='foot-card'>
      <img src={imgUrl} className='FC-img'alt="food"/>
      <h1 className='FC-title' style={{color: THEME.highlight}}>
        {title}
        </h1>
      <p>{description}</p>
      <img src={isveg ? VegIcon : nonvegIcon} className='FC-icon'/>
      {
      price ?
      <p className='FC-price'>
        Rs {price}
      </p>
      : " Not Available"
}
<button className='FC-btn'>Add to card</button>
    </div>
  )
}

export default FootCard