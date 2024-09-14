import React from 'react'
import "./home.css"
import FoodCard from "./../../components/FootCard/FootCard"

const foods = [
  {
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlaPPdhB8wUOwMI-xppN6eKa577Mxdr2Mdkw&s",
    title: "kaju kari",
    description: "yummy to test",
    isveg: true,
    price: 100
  },
  {
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNOfQJaU1va6j2Q4j1jtGPl5-QGNNF_TnYGg&s",
    title: "Chikan Biryani",
    description: "Delicious 'alu paratha'made with fresh vegies",
    isveg: false,
    price: 150
  },
  {
    imgUrl: "https://madhurasrecipe.com/wp-content/uploads/2020/10/Paneer-Masala-post.jpg",
    title: "Panner Bhaji",
    description: "yummy to test delicious",
    isveg: true,
    price: 160
  },
  {
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy3dg3mcTFTp7EOCU7o7qlLAHOxg0fXTbOug&s",
    title: "shevbhaji ",
    description: "Delicious 'alu paratha'made with fresh vegies",
    isveg: true,
    price: 110
  }
]

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div className='FC-conitainer'>
        {
          foods.map((foodItem) => {
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