import React from 'react'
import "./FootCard.css"
import VegIcon from "./icons8-veg-48.png"
import nonvegIcon from "./icons8-non-veg-48.png"


function FootCard({imgUrl,title,description,isveg}) {
  
  return (
    <div className='foot-card'>
      <img src={imgUrl} className='FC-img'alt="food"/>
      <h1 className='FC-title'>
        {title}
        </h1>
      <p>{description}</p>
      <img src={isveg ? VegIcon : nonvegIcon} className='FC-icon'/>
    </div>
  )
}

export default FootCard