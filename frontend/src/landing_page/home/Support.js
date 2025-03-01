import React from "react";
import "./Support.css";

function Support() {
  return (
    <div className="support-container">
      <div className="support-content">
        <h5 className="support-title">SUPPORT</h5>
        <h1 className="support-heading">
          Create Your Wish List <br /> and Let Fans & Loved Ones Support You
        </h1>
        <p className="support-subheading">
          Wish-Me makes supporting your favorite creators simple and meaningful. In just a few clicks, you can view their wish list, choose the perfect gift, and show your support by making their dreams come true!
        </p>
        <div className="support-image-wrapper">
          <img 
            src="media/images/Wish.webp" 
            alt="Gift Illustration" 
            className="support-image" 
          />
        </div>
        <button className="support-button">Support Now</button>
        <p className="support-text">Join the celebration – it's free and only takes a minute!</p>
      </div>
    </div>
  );
}

export default Support;