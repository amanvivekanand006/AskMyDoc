import React, { useState } from 'react';
import './Css/Login.css';
import { ToastContainer, toast } from 'react-toastify';
import axiosInstance from '../api/axiosInstance';
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const params = new URLSearchParams();
      params.append('username', formData.email);
      params.append('password', formData.password);
      const response = await axiosInstance.post('/Login', params, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      });
      localStorage.setItem('access_token', response.data.access_token);
      localStorage.setItem('user_name', response.data.name);
      localStorage.setItem('user_id', response.data.user_id);
      localStorage.setItem('role', response.data.role);
      setFormData({ email: '', password: '' });
      toast.success('Login successful!');
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.detail || 'Login failed. Please try again.');
      toast.error('Login error: ' + (err.response?.data || err.message));
    } finally {
      setLoading(false);
    }
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
            <p className="auth-left-sub">Intelligent Document Insights Platform</p>
            <ul className="auth-left-perks">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                AI-powered summarization
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Smart categorization & search
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Free to get started
              </li>
            </ul>
          </div>
        </div>

        {/* Right Panel */}
        <div className="auth-right">
          <div className="auth-form-box">
            <h3 className="auth-form-title">Welcome back</h3>
            <p className="auth-form-sub">Sign in to access your documents</p>

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="auth-field">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="auth-field">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              {error && <p className="auth-error">{error}</p>}

              <button type="submit" className="auth-submit" disabled={loading}>
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>

            <p className="auth-redirect">
              Don't have an account? <a href="/register">Create one free</a>
            </p>
          </div>
        </div>

      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default LoginComponent;