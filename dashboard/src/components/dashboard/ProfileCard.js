// src/components/ProfileCard.js
import React from "react";
import "./ProfileCard.css";

function ProfileCard() {
  console.log("Rendering ProfileCard component");
  return (
    <div className="profile-card">
      {/* Top row: avatar + name/link on the left, share button on the right */}
      <div className="profile-header">
        <div className="profile-left">
          {/* Replace this src with your actual avatar or fallback */}
          <img
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ffineartamerica.com%2Ffeatured%2F1-generic-human-man-face-front-view-futuristic-michal-bednarek.html&psig=AOvVaw2q2ceXHbYrZzIK7u3v6ij1&ust=1742149763230000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJCH4eHbjIwDFQAAAAAdAAAAABAE"
            alt="Profile Icon"
            className="profile-avatar"
          />
          <div className="profile-text">
            <h2 className="profile-name">Hi, Rihan</h2>
            <a
              href="https://buymeacoffee.com/mr_rihan"
              className="profile-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              buymeacoffee.com/mr_rihan
            </a>
          </div>
        </div>

        <button className="share-button">Share page</button>
      </div>

      {/* Earnings section */}
      <div className="earnings-header">
        <h3 className="earnings-title">Gifts Value</h3>
        <select className="earnings-filter">
          <option>Last 30 days</option>
          <option>Last 7 days</option>
          <option>Last year</option>
        </select>
      </div>
      <div className="earnings-amount">$0</div>
      <div className="earnings-breakdown">
        <span>$0 Supporters</span>
        <span>$0 Membership</span>
        <span>$0 Shop</span>
      </div>
    </div>
  );
}

export default ProfileCard;