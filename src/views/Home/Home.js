import React from 'react'
import "./home.css"
import FoodCard from "./../../components/FootCard/FootCard"
import {THEME,TITLE,SUBTITLE, PRODUCTS } from './../../../src/config/data'

function Home() {
  return (
    <div style={{color:THEME.main}}>
      <h1 className='brandname' style={{color:THEME.Highlight}}>
        {TITLE}
        </h1>
      <h2 className='subBrandName' >
        {SUBTITLE}
        </h2>
      <div className='FC-conitainer'>
        {
          PRODUCTS.map((foodItem) => {
            return <FoodCard
            imgUrl = { foodItem.imgUrl }
            title = { foodItem.title }
            description = { foodItem.description }
            isveg = { foodItem.isveg }
            price = { foodItem.price }
            />
})}
      </div>
    </div>
  )
}
export default Home