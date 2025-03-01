import React from "react";
import "./TrustMessage.css";

function TrustMessage() {
  return (
    <div className="trust-container">
      {/* Heading */}
      <div className="trust-heading">
        <h1>
          Built for creators & loved ones, <br />
          <span>not for corporations.</span>
        </h1>
      </div>

      {/* Bullet Points */}
      <div className="trust-content">
        <div className="trust-column">
          <div className="trust-bullet">
            <i className="fa-regular fa-circle-check trust-icon"></i>
            <p>
              We don't just call them customers – they're the backbone of our creative community.
            </p>
          </div>
          <div className="trust-bullet">
            <i className="fa-regular fa-circle-check trust-icon"></i>
            <p>
              You maintain full control over your supporters. We respect your privacy and never misuse your data.
            </p>
          </div>
        </div>
        <div className="trust-column">
          <div className="trust-bullet">
            <i className="fa-regular fa-circle-check trust-icon"></i>
            <p>
              Connect directly with our expert team whenever you need guidance.
            </p>
          </div>
          <div className="trust-bullet">
            <i className="fa-regular fa-circle-check trust-icon"></i>
            <p>
              Receive your earnings immediately with our streamlined, no-delay payment system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrustMessage;