import React from 'react';
import './Css/Ctabanner.css';
import { Link } from 'react-router-dom';


const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

const CTABanner = () => {
  
  const isLoggedIn = localStorage.getItem('access_token'); // or your auth logic

  return (
    <section className="cta-section">
      <div className="cta-glow" aria-hidden="true" />

      <div className="cta-wrapper">
        {/* Icon */}
        <div className="cta-icon-wrap">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M21.801 10A10 10 0 1 1 17 3.335" />
            <path d="m9 11 3 3L22 4" />
          </svg>
        </div>

        {/* Text */}
        <h2 className="cta-heading">
          Your documents are waiting to be <span className="cta-heading-accent">understood</span>
        </h2>
        <p className="cta-subtext">
          Built for professionals who work with documents.
          Start free — no credit card needed.
        </p>

        {/* Buttons */}
        <div className="cta-actions">
          <Link to={isLoggedIn ? '/filechat' : '/login'} className="cta-btn cta-btn--primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M16 19h6" />
              <path d="M16 2v4" />
              <path d="M19 16v6" />
              <path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5" />
              <path d="M3 10h18" />
              <path d="M8 2v4" />
            </svg>
            Start Analyzing — It's Free
          </Link>
          <a href="#features" onClick={(e) => handleNavClick(e, 'features')} className="cta-btn cta-btn--secondary">
            See How It Works
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </a>
        </div>

        {/* Trust row */}
        <div className="cta-trust">
          <span className="trust-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            No credit card
          </span>
          <span className="trust-dot" />
          <span className="trust-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
              strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            Setup in 30 seconds
          </span>
          <span className="trust-dot" />
          <span className="trust-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            Free forever plan
          </span>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;