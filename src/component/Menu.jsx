import React from "react";
import MenuItems from "./Data.jsx";


const Menu = () => {
  const menuItems = MenuItems();

  const menus = [];

  return (
    <>
      <section class="menu" id="menu">
        <h1 class="heading">
          our <span>menu</span>
        </h1>
        <div class="box-container">
          {menuItems.map((item) => (
            <div class="box">
              <img src={item} alt="" />
              <h3>tasty and healthy</h3>
              <div class="price">
            $15.99 <span>20.99</span>
              </div>
              <a href="" class="btn"> add to cart</a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Menu;
