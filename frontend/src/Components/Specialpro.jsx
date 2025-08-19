


import React, { useState } from "react";
import card from "../assets/card.jpeg";
import { useNavigate } from "react-router-dom"; // ✅ for navigation

import "./Specialpro.css";

export const Specialpro = () => {
  const products = [
    { name: "Sweet Gifting", img: card, price: { "200g": 200, "500g": 450 } },
    { name: "Dry Fruit Gifting", img: card, price: { "200g": 300, "500g": 650 } },
    { name: "Classical Gifting", img: card, price: { "200g": 250, "500g": 500 } },
    { name: "Guilt Free Gifting", img: card, price: { "200g": 220, "500g": 480 } },
    { name: "Premium Gifting", img: card, price: { "200g": 350, "500g": 700 } },
    { name: "Luxury Gifting", img: card, price: { "200g": 400, "500g": 850 } },
  ];
    const navigate = useNavigate();


  const [cartData, setCartData] = useState(
    products.map(() => ({ weight: "200g", qty: 1 }))
  );

  const handleWeightChange = (index, value) => {
    const updated = [...cartData];
    updated[index].weight = value;
    setCartData(updated);
  };

  const handleQtyChange = (index, delta) => {
    const updated = [...cartData];
    updated[index].qty = Math.max(1, updated[index].qty + delta);
    setCartData(updated);
  };

  const handleAddToCart = (index) => {
    const product = products[index];
    const { weight, qty } = cartData[index];
    const totalPrice = product.price[weight] * qty;
    // console.log(`Added to cart: ${product.name} - ${weight} x ${qty} = ₹${totalPrice}`);

     const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Create new item
    const newItem = {
      name: product.name,
      image: product.img,
      weight,
      quantity: qty,
      price: totalPrice,
    };

    // Add to cart and save
    cart.push(newItem);
    localStorage.setItem("cart", JSON.stringify(cart));

    // Navigate to cart page
    navigate("/cart");
    
  };

  return (
    <div className="special-container">
      <h1>Explore Our Premium Collection</h1>

      <div className="specialcard-container">
        {products.map((item, index) => {
          const { weight, qty } = cartData[index];
          const itemPrice = item.price[weight];
          const totalPrice = itemPrice * qty;

          return (
            <div className="specialcard" key={index}>
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>

              {/* Price Display */}
              <p className="price">₹{itemPrice}</p>

              {/* Weight Selector */}
              <select
                value={weight}
                onChange={(e) => handleWeightChange(index, e.target.value)}
              >
                <option value="200g">200g</option>
                <option value="500g">500g</option>
              </select>

              <div className="btn-container">
                   {/* Quantity Counter */}
              <div className="qty-counter">
                <button onClick={() => handleQtyChange(index, -1)}>-</button>
                <span>{qty}</span>
                <button onClick={() => handleQtyChange(index, 1)}>+</button>
              </div>

            
              <button
                className="add-cart-btn"
                onClick={() => handleAddToCart(index)}
              >
                Add to Cart
              </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
