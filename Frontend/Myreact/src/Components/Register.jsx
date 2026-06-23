import React, { useState } from 'react';
import './Css/Login.css';
import { ToastContainer, toast } from 'react-toastify';
import axiosInstance from '../api/axiosInstance';

const RegisterComponent = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone_number: '', password: '', confirm_password: '', terms: false,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirm_password) { alert("Passwords do not match!"); return; }
    if (!formData.terms) { alert("You must agree to the terms!"); return; }
    setLoading(true);
    try {
      const payload = {
        name: formData.name, email: formData.email,
        phone_number: parseInt(formData.phone_number, 10),
        password: formData.password, confirm_password: formData.confirm_password,
      };
      const response = await axiosInstance.post('/Create_user', payload);
      toast.success("Registration successful!");
      console.log("Response:", response.data);
      setFormData({ name: '', email: '', phone_number: '', password: '', confirm_password: '', terms: false });
    } catch (error) {
      toast.error("Registration failed: " + (error.response?.data?.detail || error.message));
    }
    setLoading(false);
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-container">

        {/* Left Panel */}
        <div className="auth-left">
          <div className="auth-left-glow" aria-hidden="true" />
          <div className="auth-left-content">
            <div className="auth-logo-mark">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5" />
                <path d="M3 10h18" /><path d="M8 2v4" /><path d="M16 2v4" />
                <path d="M16 19h6" /><path d="M19 16v6" />
              </svg>
            </div>
            <h1 className="auth-left-title">AskMy<span>Doc</span></h1>
            <p className="auth-left-sub">Join thousands already using AI to understand their documents</p>
            <ul className="auth-left-perks">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Free forever plan — no credit card
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Up & running in 30 seconds
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                PDF, DOCX & more supported
              </li>
            </ul>
          </div>
        </div>

        {/* Right Panel */}
        <div className="auth-right">
          <div className="auth-form-box">
            <h3 className="auth-form-title">Create your account</h3>
            <p className="auth-form-sub">Start analyzing documents for free</p>

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="auth-field">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" placeholder="John Doe"
                  value={formData.name} onChange={handleChange} required />
              </div>
              <div className="auth-field">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="you@example.com"
                  value={formData.email} onChange={handleChange} required />
              </div>
              <div className="auth-field">
                <label htmlFor="phone_number">Phone Number</label>
                <input type="text" id="phone_number" name="phone_number" placeholder="+91 00000 00000"
                  value={formData.phone_number || ''} onChange={handleChange} required />
              </div>
              <div className="auth-fields-row">
                <div className="auth-field">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" name="password" placeholder="Create password"
                    value={formData.password} onChange={handleChange} required />
                </div>
                <div className="auth-field">
                  <label htmlFor="confirm_password">Confirm Password</label>
                  <input type="password" id="confirm_password" name="confirm_password" placeholder="Repeat password"
                    value={formData.confirm_password} onChange={handleChange} required />
                </div>
              </div>

              <div className="auth-checkbox">
                <input type="checkbox" id="terms" name="terms"
                  checked={formData.terms} onChange={handleChange} required />
                <label htmlFor="terms">
                  I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
                </label>
              </div>

              <button type="submit" className="auth-submit" disabled={loading}>
                {loading ? 'Creating account...' : 'Create Account'}
              </button>
            </form>

            <p className="auth-redirect">
              Already have an account? <a href="/login">Sign in</a>
            </p>
          </div>
        </div>

      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default RegisterComponent;