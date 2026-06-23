import React from 'react';
import './Css/Footer.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      {/* Soft background glow */}
      <div className="contact-glow" aria-hidden="true" />

      <div className="contact-wrapper">

        {/* Eyebrow */}
        <div className="contact-eyebrow">
          <span className="eyebrow-line" />
          <span className="eyebrow-text">Reach out anytime</span>
          <span className="eyebrow-line" />
        </div>

        {/* Heading */}
        <h2 className="contact-heading">
          Let's Stay <span className="contact-heading-accent">Connected</span>
        </h2>

        {/* Subtext */}
        <p className="contact-subtext">
          Got questions or want to collaborate? Feel free to reach out — we're open to
          new projects or just a casual chat!
        </p>

        {/* CTA Button */}
        <div className="contact-cta">
          <a href="#contact" className="contact-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
            Contact Me
          </a>
        </div>

        {/* Social Icons */}
        <div className="contact-socials">
          <a href="#" aria-label="X (Twitter)" className="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </a>
          <span className="social-divider" />
          <a href="#" aria-label="Instagram" className="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
          <span className="social-divider" />
          <a href="#" aria-label="Facebook" className="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
        </div>

        {/* Email */}
        <p className="contact-email-wrap">
          <a href="mailto:hello@askmydoc.com" className="contact-email">
            hello@askmydoc.com
          </a>
        </p>

        {/* Bottom bar */}
        <div className="contact-divider" />
        <div className="contact-footer">
          <p className="contact-copyright">© {new Date().getFullYear()} AskMyDoc</p>
          <p className="contact-footer-note">Made with AI</p>
        </div>

      </div>
    </section>
  );
};

export default Contact;