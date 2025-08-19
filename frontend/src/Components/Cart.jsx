import React, { useEffect, useState } from "react";
import "./Cart.css"; // Import the CSS

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  const handleRemoveItem = (indexToRemove) => {
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  if (cartItems.length === 0) {
    return <h2 className="empty-cart">Your cart is empty.</h2>;
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>
      {cartItems.map((item, index) => (
        <div key={index} className="cart-item">
          <div className="cart-item-info">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>Weight: {item.weight}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ₹{item.price}</p>
            </div>
          </div>

          <button
            className="remove-btn"
            onClick={() => handleRemoveItem(index)}
          >
            Remove
          </button>
        </div>
      ))}

      <h3 className="cart-total">
        Total: ₹{cartItems.reduce((total, item) => total + item.price, 0)}
      </h3>
    </div>
  );
}
