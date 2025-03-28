import React, { useState } from "react";
import { ProductItems, newItems } from "./Fresh";

const Product = () => {
  const productItems = ProductItems();
  const products = [];
  const newItemsData = newItems();

  return (
    <>
      <section class="products" id="product">
        <h1 class="heading">
          our <span>product</span>
        </h1>
        <div class="box-container">
          {productItems.map((item) => (
            <div class="box">
              <div class="icons">
                <a href="" class="fas fa-shopping-cart"></a>
                <a href="" class="fas fa-heart"></a>
                <a href="" class="fas fa-eye"></a>
              </div>
              <div class="image">
                <img src={item} alt="" style={{ width: "80%" }} />
              </div>
              <div class="content">
                <h3>fresh cofee</h3>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt" />
                </div>
                <div class="price">
                  $15.99 <span>$20.99</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section class="products" id="product">
        <h1 class="heading">
          new <span>product</span>
        </h1>
        <div class="box-container">
          {newItemsData.map((item) => (
            <div class="box">
              <div class="icons">
                <a href="" class="fas fa-shopping-cart"></a>
                <a href="" class="fas fa-heart"></a>
                <a href="" class="fas fa-eye"></a>
              </div>
              <div class="image">
                <img src={item} alt="" style={{ width: "80%" }} />
              </div>
              <div class="content">
                <h3>new item</h3>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt" />
                </div>
                <div class="price">
                  $18 <span>$80.99</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Product;
