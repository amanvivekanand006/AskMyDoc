import React, { useRef, useEffect } from 'react'; 
import './Css/Landing.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {

  const isLoggedIn = localStorage.getItem('access_token'); // or your auth logic


  const videoRef = useRef(); 

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 4.0;
    }
  }, []);

  return (
    <section id="home">
    <div className="landing-container">
      <div className="content-wrapper">
        <div className="grid-layout">
          {/* Text Section */}
          <div className="text-section">
            <h1 className="main-title">AskMyDoc</h1>
            <p className="tagline">Intelligent Document Insights Platform</p>
            
            <p className="description">
              AskMyDoc is a cutting-edge platform that analyzes and interprets your documents intelligently. 
              Whether it's contracts, reports, or scanned files, we extract key insights and help you 
              make informed decisions faster with AI-powered summarization, categorization, and search.
            </p>

            {/* CTA Buttons */}
            <div className="cta-buttons">
              <Link to={isLoggedIn ? '/filechat' : '/login'} className="btn btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="icon">
                  <path d="M16 19h6"></path>
                  <path d="M16 2v4"></path>
                  <path d="M19 16v6"></path>
                  <path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"></path>
                  <path d="M3 10h18"></path>
                  <path d="M8 2v4"></path>
                </svg>
                Start Analyzing
              </Link>
              {/* <a href="#" className="btn btn-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="icon">
                  <rect width="16" height="20" x="4" y="2" rx="2"></rect>
                  <line x1="8" x2="16" y1="6" y2="6"></line>
                  <line x1="16" x2="16" y1="14" y2="18"></line>
                  <path d="M16 10h.01"></path>
                  <path d="M12 10h.01"></path>
                  <path d="M8 10h.01"></path>
                  <path d="M12 14h.01"></path>
                  <path d="M8 14h.01"></path>
                  <path d="M12 18h.01"></path>
                  <path d="M8 18h.01"></path>
                </svg>
                Get Demo
              </a> */}
            </div>

            {/* Steps Section */}
            <div className="steps-grid">
              <div className="step-card">
                <div className="step-number">01</div>
                <h3 className="step-title">Upload Documents</h3>
                <p className="step-description">Simply upload your documents in seconds with our intuitive interface.</p>
              </div>
              <div className="step-card">
                <div className="step-number">02</div>
                <h3 className="step-title">AI Analysis</h3>
                <p className="step-description">Our intelligent system processes and analyzes your content instantly.</p>
              </div>
              <div className="step-card">
                <div className="step-number">03</div>
                <h3 className="step-title">Get Insights</h3>
                <p className="step-description">Receive comprehensive insights and summaries in seconds.</p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="image-section">
            <div className="image-wrapper">
              <video
                ref={videoRef} 
                src="/Videos/landing.mp4"
                autoPlay
                muted
                playsInline
                loop={true}
                className="video-element"
              />
              <div className="image-badge">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="badge-icon">
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                Powered by AI
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default LandingPage;