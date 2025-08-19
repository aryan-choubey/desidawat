

 import React, { useState, useEffect } from "react";
 import { useLocation } from "react-router-dom"; // ⬅ import here

import Sidebar from "./Sidebar";
import img from "../assets/card.jpeg";
import "./Allproduct.css";
import { useNavigate } from "react-router-dom"; // ⬅ for navigation


export default function Allproduct() {

      const navigate = useNavigate();



        const [quantities, setQuantities] = useState({});
        const [weights, setWeights] = useState({});



   const location = useLocation();

    const [selectedCategory, setSelectedCategory] = useState(() => {
    if (location.state?.selectedCategory) {
      return location.state.selectedCategory;
    }
    return localStorage.getItem("selectedCategory") || "all";
  });   

  

  
       const categories = {
    dryfruits: [
      { name: "Rasgulla", key: "rasgulla", image: img, price: 120 },
      { name: "Ladoo", key: "ladoo", image: img, price: 150 },
      { name: "Barfi", key: "barfi", image: img, price: 200 },
      { name: "Jalebi", key: "jalebi", image: img, price: 100 }
    ],
    snacks: [
      { name: "Cashew", key: "cashew", image: img, price: 400 },
      { name: "Almond", key: "almond", image: img, price: 500 },
      { name: "Pistachio", key: "pistachio", image: img, price: 450 }
    ],
    gifting: [
      { name: "Gift Cashew", key: "gift-cashew", image: img, price: 600 },
      { name: "Gift Almond", key: "gift-almond", image: img, price: 650 },
      { name: "Gift Pistachio", key: "gift-pistachio", image: img, price: 700 }
    ]
  };

      // ✅ Save selected category to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("selectedCategory", selectedCategory);
  }, [selectedCategory]);


   const handleAddToCart = (product) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const quantity = quantities[product.key] || 1;
  const weight = weights[product.key] || "500g";

  const newItem = {
    ...product,
    quantity,
    weight,
    price: product.price * quantity
  };

  const existingIndex = cart.findIndex(
    (item) => item.key === product.key && item.weight === weight
  );

  if (existingIndex >= 0) {
    cart[existingIndex].quantity += quantity;
    cart[existingIndex].price = cart[existingIndex].quantity * product.price;
  } else {
    cart.push(newItem);
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  navigate("/cart");
};


  



       // Increase quantity for specific product
  const increaseQty = (key) => {
    setQuantities((prev) => ({
      ...prev,
      [key]: (prev[key] || 1) + 1
    }));
  };

  // Decrease quantity for specific product
  const decreaseQty = (key) => {
    setQuantities((prev) => ({
      ...prev,
      [key]: prev[key] > 1 ? prev[key] - 1 : 1
    }));
  };



  const handleWeightChange = (key, value) => {
  setWeights((prev) => ({
    ...prev,
    [key]: value
  }));
};





    //This updates the category when clicked in Sidebar
  const handleCategorySelect = (categoryKey) => {
    setSelectedCategory(categoryKey);
  };

  const renderProducts = () => {
    if (selectedCategory === "all") {
      return (
        <>
          <h2>All Products</h2>
          {/* Show everything */}
          {Object.values(categories) // get all category arrays
          .flat() 
          .map((p) => (
            <div key={p.key} className="product-card">
              <img src={p.image} alt={p.name} />
              <span>{p.name}</span>
              {/* <span>₹{p.price}</span> */}
              
              {/* ✅ Price updates with quantity */}
              <span>₹{(p.price * (quantities[p.key] || 1)).toFixed(2)}</span>

    <div className="weight-selector">
    <select
      value={weights[p.key] || ""}
      onChange={(e) => handleWeightChange(p.key, e.target.value)}
    >
      {/* <option value="">Select</option> */}
      {/* <option value="200g">200g</option> */}
      <option value="500g">500g</option>
    </select>
  
</div>

                {/* Quantity Counter */}
        <div className="quantity-controls" >

         <div className="counter-btn">
           <button onClick={() => decreaseQty(p.key)}>-</button>
          <span>{quantities[p.key] || 1}</span>
          <button onClick={() => increaseQty(p.key)}>+</button>
         </div>


           <div className="addcart-btn">
                 <button
          onClick={() => handleAddToCart(p)}
        >
          Add to Cart
        </button>
           </div>
        </div>

        {/* Add to Cart Button */}
        {/* <button
          onClick={() => handleAddToCart(p)}
        >
          Add to Cart
        </button> */}

                  
              

              </div>

             
          ))}
        </>
      );
    }

    if (categories[selectedCategory]) {
      return (
        <>
          <h2>{selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}</h2>
          {categories[selectedCategory].map((p) => (
            <div key={p.key} className="product-card">
              <img src={p.image} alt={p.name} />
              
              <span>{p.name}</span>
              {/* <span>₹{p.price}</span> */}
                        <span>₹{(p.price * (quantities[p.key] || 1)).toFixed(2)}</span>


         <div className="weight-selector">
  
    
    <select
      value={weights[p.key] || ""}
      onChange={(e) => handleWeightChange(p.key, e.target.value)}
    >
      {/* <option value="">Select</option> */}
      <option value="200g">200g</option>
      <option value="500g">500g</option>
    </select>
  
</div>

               {/* Quantity Counter */}
          <div className="quantity-controls">
            <div className="counter-btn">
               <button   onClick={() => decreaseQty(p.key)}>-</button>
            <span>{quantities[p.key] || 1}</span>
            <button   onClick={() => increaseQty(p.key)}>+</button>

            </div>

            <div className="addcart-btn">
            <button onClick={() => handleAddToCart(p)}>Add to Cart</button>


            </div>
           

          </div>

        
            </div>
          ))}
        </>
      );
    }

    return <h2>No products found</h2>;
  };

  return (
    <div className="allproduct-page">
      <Sidebar  defaultCategory={selectedCategory} // Pass correct category from Landing
        onCategorySelect={handleCategorySelect} />
      <div className="product-list">{renderProducts()}</div>
    </div>
  );
}

