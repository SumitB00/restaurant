import React from 'react'
import John from './John.jsx';
import quote from '../asset/img/download.png'
const Review = () => {
    const john = John();

    const johns = [];
  return (
 <section class="review" id='review'>
    <h1 class="heading">
        customer's <span>review</span>
    </h1>
    <div class="box-container">
    {john.map((item) => (
            <div class="box">
              <img src={quote} alt="" class="qoute" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.</p>
              <img src={item} alt="" class="user " />
              <h3>john deo</h3>
              <div class="stars">
              <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half-alt"/>
              </div>
            </div>
          ))}
          
    </div>
 </section>
  )
}

export default Review