import React from 'react'
import "./FootCard.css"
import VegIcon from "./icons8-veg-48.png"
import nonvegIcon from "./icons8-non-veg-48.png"


function FootCard({imgUrl,title,description,isveg,price}) {
  
  return (
    <div className='foot-card'>
      <img src={imgUrl} className='FC-img'alt="food"/>
      <h1 className='FC-title'>
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