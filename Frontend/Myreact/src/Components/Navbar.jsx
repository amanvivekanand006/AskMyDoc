import React, { useEffect, useState } from 'react';
import './Css/Navbar.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import bot from '../assets/Bot.ai2.png';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = localStorage.getItem('access_token');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    navigate('/login');
  };

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

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>

      {/* Clickable animated logo */}
      <Link href="#home" onClick={(e) => handleNavClick(e, 'home')} className="navbar-logo">
        {/* <span className="logo-icon"> */}
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5" />
            <path d="M3 10h18" />
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <path d="M16 19h6" />
            <path d="M19 16v6" />
          </svg> */}
{/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
  fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
  <polyline points="14,2 14,8 20,8"/>
  <path d="M8 13h8M8 17h5"/>
</svg> */}
       <img src={bot} alt="Logo" className="logo-image" style={{ width: "30px", height: "30px" }}/>
        {/* </span> */}
        <span className="logo-text">
          AskMy<span>Doc</span>
        </span>
      </Link>

      {/* Nav links with smooth scroll */}
      <ul className="navbar-links">
        <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
        <li><a href="#features" onClick={(e) => handleNavClick(e, 'features')}>Features</a></li>
        <li><a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')}>Pricing</a></li>
        <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
      </ul>

      {/* Auth actions */}
      <div className="navbar-actions">
        {isLoggedIn ? (
          <>
            <Link to="/filechat" className="btn-login">Upload File</Link>
            <button onClick={handleLogout} className="btn-signup logout-btn">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn-login">Login</Link>
            <Link to="/register" className="btn-signup">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;