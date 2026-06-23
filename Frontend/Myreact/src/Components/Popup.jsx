import React, { useState } from 'react';
import './Css/Popup.css';
import bot from '../assets/BOT.ai2.png';

const FreeVersionPopup = ({ isOpen = true, onClose }) => {
  const [showPopup, setShowPopup] = useState(isOpen);
  const isLoggedIn = localStorage.getItem('access_token'); // or your auth logic

  const handleClose = () => {
    setShowPopup(false);
    if (onClose) onClose();
  };

  const handleExplore = () => {
    window.location.href = isLoggedIn ? '/filechat' : '/login';
    handleClose();
  };

  const handleLater = () => {
    window.location.href = '/';
    handleClose();
  };

  if (!showPopup) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        {/* Close Button */}
        <button className="popup-close" onClick={handleClose} aria-label="Close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Content */}
        <div className="popup-content">
          {/* Icon */}
          <div >
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
              <line x1="9" y1="9" x2="9.01" y2="9"></line>
              <line x1="15" y1="9" x2="15.01" y2="9"></line>
            </svg> */}
            <img src={bot} alt="Logo" className="popup-logo" style={{ width: "48px", height: "48px" }}/>
          </div>

          {/* Header */}
          <h2 className="popup-title">Completely Free for Everyone! 🎉</h2>

          {/* Description */}
          <p className="popup-description">
            AskMyDoc is currently available as a <span className="highlight">free version</span> for all users. 
            No hidden charges, no limitations. We invite you to explore the full power of our AI-powered document analysis platform.
          </p>

          {/* Features List */}
          <div className="popup-features">
            <div className="feature-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Unlimited document uploads</span>
            </div>
            <div className="feature-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>AI-powered analysis & chat</span>
            </div>
            <div className="feature-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Instant answers & insights</span>
            </div>
            <div className="feature-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Forever free during beta</span>
            </div>
          </div>

          {/* CTA Section */}
          <div className="popup-cta">
            <p className="popup-subtitle">Pricing & plans coming soon!</p>
            <div className="popup-buttons">
              <button className="btn btn-primary" onClick={handleExplore}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                  <polyline points="13 2 13 9 20 9"></polyline>
                </svg>
                Explore Now
              </button>
              <button className="btn btn-secondary" onClick={handleLater}>
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeVersionPopup;