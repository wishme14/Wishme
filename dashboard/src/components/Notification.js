import React from "react";
import "./Notification.css";

function Notification() {
  return (
    <div className="top-banner">
      <p>Please link your payout method, it only takes a few minutes.</p>
      <button className="setup-btn">Complete Setup</button>
    </div>
  );
}

export default Notification;