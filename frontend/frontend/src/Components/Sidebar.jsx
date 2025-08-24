// import React from "react";
import "./Sidebar.css";
import img from "../assets/card.jpeg";

import React, {useState,useEffect} from "react";
import axios from 'axios';



export default function Sidebar({ onCategorySelect, defaultCategory = "all" }) {
  const categories = [
    { name: "All Products", key: "all", image: null },
    { name: "Dry Fruits", key: "dryfruits", image: img },
    { name: "Snacks", key: "snacks", image: img },
    { name: "Desi biscuits", key: "biscuits", image: img },
    { name: "Dry Fruits Sweets", key: "drysweets", image: img },
    { name: "Sugarless Sweets", key: "sugarless", image: img },
    { name: "Festival Sweets", key: "festivalsweets", image: img },
    { name: "Gifting", key: "gifting", image: img }
  ];

  // const[categories , setCategories] = useState({});


  // Get Api for all product 

  // useEffect (()=>{
  //   const fetchallproduct = async()=>{
  //     try{
  //       const res =  await axios.get("");
  //       setCategories(res.data);


  //     }catch(err){
  //       console.log("error from sidebar allproduct ", err);
  //     }
  //   }

  //   fetchallproduct();
  // },[]);




      // State with defaultCategory
  const [activeCategory, setActiveCategory] = useState(defaultCategory);

  // Update state and call onCategorySelect when defaultCategory changes
  useEffect(() => {
    setActiveCategory(defaultCategory);
    onCategorySelect(defaultCategory);
  }, [defaultCategory, onCategorySelect]);

  const handleClick = (key) => {
    setActiveCategory(key);
    onCategorySelect(key);
  };


  return (
    <aside className="sidebar">
      {categories.map((cat) => (
        <div
          key={cat.key}
         className={`sidebar-item ${activeCategory === cat.key ? "active" : ""}`}
                   onClick={() => handleClick(cat.key)}


        //   onClick={() => onCategorySelect(cat.key)}
        >
          {cat.image && <img src={cat.image} alt={cat.name} />}
          <span>{cat.name}</span>
        </div>
      ))}
    </aside>
  );
}


