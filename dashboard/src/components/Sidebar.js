import React from "react";
import { FaHome, FaEye, FaUsers, FaLock, FaShoppingBag, FaPencilAlt, FaImage, FaBolt, FaDollarSign, FaCog, FaGift } from "react-icons/fa";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <span role="img" aria-label="logo">🎁 Wish Me</span>
      </div>
      <nav>
        <ul>
          <li><FaHome /> Home</li>
          <li><FaEye /> View Page</li>
          <li><FaUsers /> Explore Creators</li>
          <hr />
          <li><FaGift className="gift-icon" /> Gifts</li>
          <li><FaUsers /> Supporters</li>
          <li><FaLock /> Memberships</li>
          <li><FaShoppingBag /> Shop</li>
          <li><FaPencilAlt /> Publish</li>
          <hr />
          <li><FaImage /> Buttons & Graphics</li>
          <li><FaBolt /> Integrations</li>
          <li><FaDollarSign /> Payouts</li>
          <li><FaCog /> Settings</li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;