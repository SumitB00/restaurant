import React ,{useRef} from 'react'
import logo from '../asset/img/logo.bbdaaa34654aff804cc3.png'



const Navbar = () => {
    const searchrRef = useRef();
    const searchHandler =()=>{
        searchrRef.current.classList.toggle("active")
    };

    
  return (
    <>
    <header class="header">
    <a href="" class="logo">
        <img src={logo} alt="" />
    </a>
    <nav class="navbar ">
        <a href="#Home"> Home</a>
        <a href="#about"> About</a>
        <a href="#menu"> Menu</a>
        <a href="#product"> Product</a>
        <a href="#review"> Review</a>
        <a href="#contact"> Contact</a>
        <a href="#blogs"> Blogs</a>
        
    </nav>
    <div class="icons">
            <div class="fas fa-search" onClick={searchHandler}></div>
            <div class="fas fa-shopping-cart"></div>
            <div class="fas ba-bars" id="menu-btn"></div>

    </div>
    <div class="search-form active" ref={searchrRef}>
        <input type="search" placeholder='search here.....' id='search-box' />
        <label htmlFor="search-box"  class="fas fa-search"></label>
    </div>
    
       
    </header>
    </>
  )
}

export default Navbar