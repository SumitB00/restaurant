import React from 'react'
import Our from './Our';
const Blogs = () => {

    const our = Our();

    const Ours = [];
  
  return (
    <>
    <section class="blogs" id='blogs'>
        <h1 class="heading">
            our <span>blogs</span>
        </h1>
        <div class="box-container">
        {our.map((item) => (
          <div class="box" >
            <div class="image">
                <img src={item} alt="" />
            </div>
            <div class="content">
                <a href="" class="title">
                    tasty and refreshing spices
                </a>
                <span> by admin / 23 nov, 2024</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quibusdam a provident quae .</p>
                <a href="" class="btn">read More</a>
            </div>
          </div>
          ))}
        </div>
    </section>
    </>
  )
}

export default Blogs