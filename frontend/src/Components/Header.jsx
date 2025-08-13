

import React, { useState, useEffect,useRef } from 'react';
import account from '../assets/user.png';
import logo from '../assets/logoWhite.png';
import cart from '../assets/cart.png';
import './Header.css';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();



  // const toggleSearchBar = () => {
  //   setShowSearchBar((prev) => !prev);
  // };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down → hide
        setShowHeader(false);
      } else {
        // scrolling up → show
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

    // Close when clicking outside
  // useEffect(() => {
  //   function handleClickOutside(event) {
  //     if (searchRef.current && !searchRef.current.contains(event.target)) {
  //       setShowSearchBar(false);
  //     }
  //   }
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, []);



   const handleClick = () => {
      navigate("/login")
   }

  return (
  
    <div>
        {/* Main header */}
       <header className={`main-header ${showHeader ? 'show' : 'hide'}`}>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="menu">
          <a href="Home">Home</a>
          <a href="Review">Review</a>
          <a href="Contact Us">Contact Us</a>
        </div>

        <div className="search-icon">
          <input type="search" placeholder="Search..." />

          <img src={account} alt="Search" />
        </div>

        <div className="account" onClick={handleClick}>
          <img src={account} alt="Account"  />
        </div>

        <div className="cart">
          <img src={cart} alt="Cart" />
        </div>
      </header>
    </div>

    
  );
};
