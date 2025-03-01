import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-heading">
          Delight Your Loved Ones <br /> with the Gifts They Truly Desire <i class="fa-solid fa-gifts"></i>
        </h1>
        <p className="hero-subheading">
          Set up your account, create a personalized wish list, and let your loved ones choose the perfect gift. It's effortless and free!
        </p>
        <div className="hero-image-wrapper">
          <img 
            src="media/images/Hero.webp" 
            alt="Gift Illustration" 
            className="hero-image" 
          />
        </div>
        <button className="hero-button">Get Started Now</button>
        <p className="hero-text">Join the celebration – it's free and only takes a minute!</p>
      </div>
    </div>
  );
}

export default Hero;