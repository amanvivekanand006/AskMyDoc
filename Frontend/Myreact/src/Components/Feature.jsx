import React from 'react';
import './Css/Feature.css';

const HowItWorks = () => {
  return (
    <section id="features" className="how-it-works-section">
      {/* Header */}
      <div className="how-it-works-header">
        <h2 className="how-it-works-title">How it works.</h2>
        <span className="header-separator"></span>
        <p className="header-subtitle">Three simple steps to analyze your documents</p>
      </div>

      <div className="header-divider"></div>

      {/* Steps Grid */}
      <div className="steps-container">
        {/* STEP 1 */}
        <div className="step-card">
          <span className="step-label">STEP 1</span>

          {/* Visual Mockup */}
          <div className="step-visual">
            <div className="visual-content">
              <div className="mockup-card">
                <div className="mockup-header">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mockup-icon">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14,2 14,8 20,8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10,9 9,9 8,9"></polyline>
                  </svg>
                  <div className="mockup-text-line"></div>
                </div>
                <div className="mockup-text-line"></div>
                <div className="mockup-text-line short"></div>
                <div className="mockup-text-line shorter"></div>
                <div className="mockup-button">Upload</div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <h3 className="step-title">Upload Your Documents</h3>
          <p className="step-description">
            Simply upload your documents in seconds. Support for PDF, Word, images, and more. Our system instantly processes and prepares your content for analysis.
          </p>
        </div>

        {/* STEP 2 */}
        <div className="step-card">
          <span className="step-label">STEP 2</span>

          {/* Visual Mockup */}
          <div className="step-visual">
            <div className="visual-content variations-grid">
              <div className="variation-item">
                <div className="variation-header">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="variation-icon blue">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <div className="variation-line"></div>
                </div>
                <div className="variation-text"></div>
                <div className="variation-text short"></div>
              </div>

              <div className="variation-item">
                <div className="variation-header">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="variation-icon emerald">
                    <rect width="20" height="14" x="2" y="3" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                  <div className="variation-line"></div>
                </div>
                <div className="variation-text"></div>
                <div className="variation-text short"></div>
              </div>

              <div className="variation-item">
                <div className="variation-header">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="variation-icon purple">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                  <div className="variation-line"></div>
                </div>
                <div className="variation-text"></div>
                <div className="variation-text short"></div>
              </div>

              <div className="variation-item">
                <div className="variation-header">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="variation-icon orange">
                    <path d="M4 4l11.733 16h4.267l-11.733-16z"></path>
                    <path d="M4 20l6.768-6.768m2.46-2.46l6.772-6.772"></path>
                  </svg>
                  <div className="variation-line"></div>
                </div>
                <div className="variation-text"></div>
                <div className="variation-text short"></div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <h3 className="step-title">AI Analysis</h3>
          <p className="step-description">
            Our intelligent AI engine analyzes your documents in real-time. Extract key information, identify patterns, and understand content context automatically.
          </p>
        </div>

        {/* STEP 3 */}
        <div className="step-card">
          <span className="step-label">STEP 3</span>

          {/* Visual Mockup */}
          {/* <div className="step-visual">
            <div className="visual-content dashboard">
              <div className="dashboard-header">
                <div className="dashboard-title">
                  <div className="dashboard-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 3v5h5"></path>
                      <path d="M21 12A9 9 0 0 0 6 2.3L3 8"></path>
                      <path d="M21 21v-5h-5"></path>
                      <path d="M3 12a9 9 0 0 0 15 6.7L21 16"></path>
                    </svg>
                  </div>
                  <div className="dashboard-text"></div>
                </div>
                <div className="dashboard-status"></div>
              </div>

              <div className="dashboard-grid">
                <div className="dashboard-item blue">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <div className="item-line"></div>
                </div>
                <div className="dashboard-item emerald">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="M6 8l6 4 6-4"></path>
                  </svg>
                  <div className="item-line"></div>
                </div>
                <div className="dashboard-item purple">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="14" x="2" y="3" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                  <div className="item-line"></div>
                </div>
                <div className="dashboard-item blue">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <div className="item-line"></div>
                </div>
                <div className="dashboard-item emerald">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="M6 8l6 4 6-4"></path>
                  </svg>
                  <div className="item-line"></div>
                </div>
                <div className="dashboard-item purple">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="14" x="2" y="3" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                  <div className="item-line"></div>
                </div>
              </div>
            </div>
          </div> */}

          {/* Visual Mockup - Chat Interface */}
          <div className="step-visual">
            <div className="visual-content chat-interface">
              <div className="chat-container">
                {/* AI Message */}
                <div className="chat-message ai-message">
                  <div className="message-bubble">
                    <div className="message-line"></div>
                    <div className="message-line short"></div>
                  </div>
                </div>
 
                {/* User Message */}
                <div className="chat-message user-message">
                  <div className="message-bubble">
                    <div className="message-line"></div>
                  </div>
                </div>
 
                {/* AI Response */}
                <div className="chat-message ai-message">
                  <div className="message-bubble">
                    <div className="message-line"></div>
                    <div className="message-line"></div>
                    <div className="message-line short"></div>
                  </div>
                </div>
 
                {/* Input Area */}
                <div className="chat-input-area">
                  <div className="input-field">
                    <div className="input-line"></div>
                  </div>
                  <div className="send-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <h3 className="step-title">Get Instant Answers</h3>
          <p className="step-description">
            No more scanning through pages. Simply ask your question in plain English and get accurate answers in seconds. From specific details to comprehensive overviews—our AI has it all covered.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;