import React from 'react'
import Sum from '../asset/img/about-img.b50db0fa2bfd668b3a06'
const About = () => {
  return (
 <>

 <section class="about" id='about'>
    <h1 class="heading"  >
        <span>About </span> us
    </h1>
    <div class="container">
    <div class="row" >
        <div class=" image">
    <img src={Sum} alt="" />
        </div>
        <div class="content">
            <h3>what makes our food special?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus qui ea ullam, enim tempora ipsum fuga alias quae ratione a officiis id temporibus autem? Quod nemo facilis cupiditate. Ex, vel?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit amet enim quod veritatis, nihil voluptas culpa! Neque consectetur obcaecati sapiente?</p>
            <a href="#" class="btn"> learn more</a>
        </div>
        </div>
    </div>
 </section>
 </>
  )
}

export default About