import React from 'react'
import "./home.css"
import FoodCard from "./../../components/FootCard/FootCard"

function Home() {
  return (
    <div>
    <h1>Home</h1>
 
<FoodCard 
title="kaju kari"
description="yummy to test"
isveg={true}/>


<FoodCard 
title="Chikan Biryani"
description="Delicious 'alu paratha'made with fresh vegies" 
isveg={false}/>
 
<FoodCard 
title="Panner"
description="yummy to test delicious"
isveg={true}/>


<FoodCard 
title="shevbhaji "
description="Delicious 'alu paratha'made with fresh vegies" 
isveg={false}/>
</div>


 )
}
export default Home