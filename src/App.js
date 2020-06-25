import React from 'react';
import propTypes from 'prop-types';


const foodList = [
  {
    id:1,
    name:"kimchi",
    image:"https://www.bgw.kr/wp-content/uploads/2019/12/%EC%88%98%EC%9E%85%EA%B9%80%EC%B9%98.png",
    rating:2
  },
  {
    id:2,
    name:"kimbap",
    image:"https://recipe1.ezmember.co.kr/cache/recipe/2016/06/29/e7401296033ab8e4297cd53d71e1bba91.jpg",
    rating:2.3
  },
  {
    id:3,
    name:"foodSomthing1",
    image:"https://recipe1.ezmember.co.kr/cache/data/goods/20/06/23/1000008170/1000008170_detail_063.jpg",
    rating:5.4
  },
  {
    id:4,
    name:"foodSomthing1",
    image:"https://recipe1.ezmember.co.kr/cache/data/goods/20/05/22/1000008002/1000008002_detail_077.jpg",
    rating:6.1
  },{
    id:5,
    name:"foodSomthing1",
    image:"https://recipe1.ezmember.co.kr/cache/data/goods/19/04/16/1000000908/1000000908_detail_036.jpg",
    rating:1
  }

]

function Food({name, picture,rating}){
  return( <div>
  <h1>I like {name}</h1>
  <h4>{rating}/5.0</h4>
  <img src={picture} alt={name}/>
  </div>)
}

Food.prototype={
  name:propTypes.string.isRequired,
  picture:propTypes.string.isRequired,
  rating:propTypes.number.isRequired
}


function App() {
  return <div className="App">
    <h1>Hello</h1>
    
    {
      foodList.map( food=> 
        <Food  key={food.id} name={food.name} picture={food.image} rating={food.rating}/>
      )
    }
  </div>;
}
 
export default App;
