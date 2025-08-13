import React from 'react'
// import  account from '../assets/user.png'
import  logo from  '../assets/logo.jpeg'
// import  cart from  '../assets/cart.png'
import  map from  '../assets/india.png'
import  handmade from  '../assets/hand-made.png'
import  delivery from  '../assets/free-delivery.png'
import  preservatives from  '../assets/no-preservatives.png'
import  poster from  '../assets/poster.jpeg'
import card from '../assets/card.jpeg'
import './Landing.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {  useNavigate } from 'react-router-dom'

export const Landing = () => {

  
  const cards = [
  { id: 1, name: "Dry Fruits", quantity: "22 Product", image: card },
  { id: 2, name: "Snacks", quantity: "10 Product", image: card },
  { id: 3, name: "Desi biscuits", quantity: "15 Product", image: card },
  { id: 4, name: "Dry Fruits Sweets", quantity: "25Product", image: card },
  { id: 5, name: "Sugarless Sweets", quantity: "30Product", image: card },
  { id: 6, name: "Festival Sweets", quantity: "10Product", image: card },
];


  const settings = {
    // dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3, // show 3 cards at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

    const navigate = useNavigate(); 

  // const handleFirstClick =() =>{
  //   navigate('/allproduct');
  // }
  
  const handleFirstClick = (categoryKey) => {
  navigate('/allproduct', { state: { selectedCategory: categoryKey } });
};


  const handleSecondClick =() =>{
    navigate('/special');
  }
      
  

  return (
    <div>
      
          
          {/* IMAGE SECTION */}
        <div className="home-container">

          <img src={poster} alt="" srcset="" />

          <div className="content-container">
            <h1>Excellent in Every Biteof our Sweets,snacks And Treats</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ullam quas tenetur culpa sed minima dicta delectus nihil, hic magnam velit dignissimos ducimus. Inventore provident unde quia veniam labore dolor!</p>

          </div>

        </div>

        {/* END */}


        {/* Categorey Section */}

        <div className="categorey">

           <h1>Shop our Range</h1>

           <div className="slider-wrapper">


             <Slider {...settings}>
                {cards.map((item) => (
               <div key={item.id} className="card-slide" onClick={() => handleFirstClick(item.name.toLowerCase().replace(" ", ""))}>
                   <img src={item.image} alt={`card-${item.id}`} />
                <div className="card-info">
                  <h3>{item.name}</h3>
                 <p>{item.quantity}</p>
              </div>
               </div>
              ))}
             </Slider>
              </div>

            <div className="btn">
              <button onClick={() => handleFirstClick("all")} className='view-btn'>View All</button>
            </div>

        </div>

        {/* END */}

        {/* REVIEW-SECTION */}

        <div className="reivew-container">

          <div className="rvew1">
            <img src={map} alt="" />
            <h3>love by india</h3>
            <h3>love by 5lakh customer</h3>
          </div>
          <div className="rvew1">
            <img src={handmade} alt="" />
            <h3>love by india</h3>
            <h3>love by 5lakh customer</h3>
          </div>
          <div className="rvew1">
            <img src={delivery}alt="" />
            <h3>love by india</h3>
            <h3>love by 5lakh customer</h3>
          </div>
          <div className="rvew1">
            <img src={preservatives} alt="" />
            <h3>love by india</h3>
            <h3>love by 5lakh customer</h3>
          </div>
         


        </div>

        {/* End */}


        {/* GIFTING SECTION */}

        <div className="gift-container">
          <h1>Explore Our Premium Collection</h1>

         <div className="giftcard-container">

           <div className="giftcard"   onClick={() => handleFirstClick("gifting")}>
            <img src={card} alt="" />
            <h3>Sweet Gifting</h3>
          </div>
          <div className="giftcard"   onClick={() => handleFirstClick("gifting")}>
            <img src={card} alt="" />
            <h3>Dry Fruit Gifting</h3>
          </div>
          <div className="giftcard"   onClick={() => handleFirstClick("gifting")}>
            <img src={card} alt="" />
            <h3>Classical Gifting</h3>
          </div>
          <div className="giftcard"  onClick={() => handleFirstClick("gifting")}>
            <img src={card} alt="" />
            <h3>Guilt Free Gifting</h3>
          </div>

         </div>

        </div>

        {/* END */}

        {/* Speciality Section */}


        <div className="speciality-container">

          <div className="special-content">
            <h1>Our Speciality</h1>
            <h3>handmade sweet confesion that always get littile more.
            </h3>

            <button onClick={handleSecondClick}>See All</button>
          </div>

          <div className="special-img"  onClick={handleSecondClick}>
            <img src={card} alt="" />
            <img src={card} alt="" />
          </div>

        </div>

        {/* END */}

        {/* STORY SECTION */}

        <div className="story-container">

          <div className="story-img">

            <div className="img-up">
              <img src={poster} alt="" />
            </div>

            <div className="img-down">
              <img src={card} alt="" />
              <img src={card} alt="" />
            </div>

          </div>

          
            <div className="story-content">
               <h1>Our Story</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sequiiendis nihil animi voluptate? Laborum expedita ratione explicabo.</p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ducimus qne quia nostrum quas et natus excepturi iusto saepe exercitationem nemo molestias? Cumque?</p>

            </div>
        </div>

        


    </div>
  )
}
