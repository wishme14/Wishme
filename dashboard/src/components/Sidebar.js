import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaEye, FaUsers, FaShoppingBag, FaPencilAlt, FaDollarSign, FaCog, FaGift, FaHeart, FaTruck } from "react-icons/fa";
import "./Sidebar.css";

function Sidebar() {
  const [selectedMenu, setSelectedMenu] = useState(0);
  //const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  }

  // const handleProfileClick = (index) => {
  //   setIsProfileDropdownOpen(!isProfileDropdownOpen);
  // }

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <aside className="sidebar">
      <div className="logo">
        <span role="img" aria-label="logo">🎁 Wish Me</span>
      </div>
      <nav>
        <ul>
          <Link 
            style={{ textDecoration: 'none' }} 
            to="/" 
            onClick={() => handleMenuClick(0)}
          >
             <li className= { selectedMenu === 0 ? activeMenuClass : menuClass}><FaHome /> Home</li>
          </Link>
          
          <Link 
            style={{ textDecoration: 'none' }} 
            to="/profile" 
            onClick={() => handleMenuClick(1)}
          >
             <li className= { selectedMenu === 1 ? activeMenuClass : menuClass}><FaEye /> View Page</li>
          </Link>
          
          <Link 
            style={{ textDecoration: 'none' }} 
            to="/explore-creator" 
            onClick={() => handleMenuClick(2)}
          >
             <li className= { selectedMenu === 2 ? activeMenuClass : menuClass}><FaUsers /> Explore Creators</li>
          </Link>
          <hr />
          
          <Link 
            style={{ textDecoration: 'none' }} 
            to="/gifts" 
            onClick={() => handleMenuClick(3)}
          >
             <li className= { selectedMenu === 3 ? activeMenuClass : menuClass}><FaGift className="gift-icon" /> Gifts</li>
          </Link>
          
          <Link 
            style={{ textDecoration: 'none' }} 
            to="/wishlist" 
            onClick={() => handleMenuClick(4)}
          >
             <li className= { selectedMenu === 4 ? activeMenuClass : menuClass}><FaHeart /> Wishlist</li>
          </Link>
          
          <Link 
            style={{ textDecoration: 'none' }} 
            to="/orders" 
            onClick={() => handleMenuClick(5)}
          >
             <li className= { selectedMenu === 5 ? activeMenuClass : menuClass}><FaTruck /> Orders</li>
          </Link>

          <Link 
            style={{ textDecoration: 'none' }} 
            to="/shop" 
            onClick={() => handleMenuClick(6)}
          >
             <li className= { selectedMenu === 6 ? activeMenuClass : menuClass}><FaShoppingBag /> Shop</li>
          </Link>
          
          <Link 
            style={{ textDecoration: 'none' }} 
            to="/publish" 
            onClick={() => handleMenuClick(7)}
          >
             <li className= { selectedMenu === 7 ? activeMenuClass : menuClass}><FaPencilAlt /> Publish</li>
          </Link>

          <hr />

          <Link 
            style={{ textDecoration: 'none' }} 
            to="/supporters" 
            onClick={() => handleMenuClick(8)}
          >
             <li className= { selectedMenu === 8 ? activeMenuClass : menuClass}><FaUsers /> Supporters</li>
          </Link>

          <Link 
            style={{ textDecoration: 'none' }} 
            to="/wallet" 
            onClick={() => handleMenuClick(9)}
          >
             <li className= { selectedMenu === 9 ? activeMenuClass : menuClass}><FaDollarSign /> Wallet</li>
          </Link>
          
          <Link 
            style={{ textDecoration: 'none' }} 
            to="/settings" 
            onClick={() => handleMenuClick(10)}
          >
             <li className= { selectedMenu === 10 ? activeMenuClass : menuClass}><FaCog /> Settings</li>
          </Link>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;