import React from "react";
import { FaRegHeart } from "react-icons/fa"; // Hollow heart icon from react-icons
import "./SupportersCard.css";

function SupportersCard() {
  return (
    <div className="supporters-card">
      {/* Circle container for the hollow heart */}
      <div className="supporters-heart">
        <FaRegHeart />
      </div>
      <h2 className="supporters-title">You don’t have any supporters yet</h2>
      <p className="supporters-subtext">
        Share your page with your audience to get started.
      </p>
    </div>
  );
}

export default SupportersCard;