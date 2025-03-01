import React from "react";
import "./Wish.css";

function Wish() {
  return (
    <div className="wish-container">
      <div className="wish-content">
        <h5 className="wish-title">WISH</h5>
        <h1 className="wish-heading">
          Create Your Wish List <br /> and Let Loved Ones Surprise You
        </h1>
        <p className="wish-subheading">
          Wish-Me makes gifting fun and easy. In just a few clicks, your loved ones can view your wish list, pick the perfect surprise, and make your wishes come true!
        </p>
        <div className="wish-image-wrapper">
          <img 
            src="media/images/Wish.webp" 
            alt="Gift Illustration" 
            className="wish-image" 
          />
        </div>
        <button className="wish-button">Wish Now</button>
        <p className="wish-text">Join the celebration – it's free and only takes a minute!</p>
      </div>
    </div>
  );
}

export default Wish;