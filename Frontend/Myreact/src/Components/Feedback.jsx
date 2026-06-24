import React, { useState, useEffect } from 'react';
import './Css/Feedback.css';
import axiosInstance from '../api/axiosInstance';

const FeedbackPopup = ({ userId = 'user_' + Math.random().toString(36).substr(2, 9), onFeedbackSubmitted }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [activeTab, setActiveTab] = useState('feedback');
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Check if user has already given feedback
  const checkIfUserFeedbackExists = () => {
    const feedbackKey = `feedback_given_${userId}`;
    return localStorage.getItem(feedbackKey) === 'true';
  };

  // Mark feedback as given
  const markFeedbackAsGiven = () => {
    const feedbackKey = `feedback_given_${userId}`;
    localStorage.setItem(feedbackKey, 'true');
  };

  // Get answer count from your app/context
  const getAnswerCount = () => {
    const answerKey = `answer_count_${userId}`;
    const count = parseInt(localStorage.getItem(answerKey) || '0');
    return count;
  };

  // Increment answer count (call this after each AI answer)
  const incrementAnswerCount = () => {
    const answerKey = `answer_count_${userId}`;
    const currentCount = parseInt(localStorage.getItem(answerKey) || '0');
    const newCount = currentCount + 1;
    localStorage.setItem(answerKey, newCount.toString());
    
    // Show popup when user gets 3 answers AND hasn't given feedback yet
    if (newCount === 3 && !checkIfUserFeedbackExists()) {
      setShowPopup(true);
    }
  };

  // Expose the increment function to parent component
  useEffect(() => {
    // This allows parent component to call incrementAnswerCount
    if (window) {
      window.incrementAnswerCount = incrementAnswerCount;
    }
  }, [userId]);

  const handleClose = () => {
    setShowPopup(false);
  };

  const handleSubmitFeedback = async (e) => {
    e.preventDefault();
    
    if (rating === 0) {
      setError('Please select a rating');
      return;
    }
    
    if (!review.trim()) {
      setError('Please write your feedback');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Use axiosInstance to post feedback
      const response = await axiosInstance.post('/feedback', {
        rating: rating.toString(),
        review: review,
      }, {
        params: {
          user_id: userId
        }
      });

      setSubmitted(true);
      
      // Mark feedback as given for this user
      markFeedbackAsGiven();

      // Notify parent component
      if (onFeedbackSubmitted) {
        onFeedbackSubmitted(userId, rating, review);
      }
      
      // Close popup after 2 seconds
      setTimeout(() => {
        setRating(0);
        setReview('');
        setSubmitted(false);
        handleClose();
      }, 2000);
    } catch (err) {
      console.error('Feedback error:', err);
      setError(err.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleFollowInstagram = () => {
    window.open('https://www.instagram.com/wolvixstudio?igsh=bDd3bGVwNTc2Z3Nm', '_blank');
  };

  const handleSkipFeedback = () => {
    // Mark as given so we don't ask again
    markFeedbackAsGiven();
    handleClose();
  };

  if (!showPopup) return null;

  return (
    <div className="feedback-overlay">
      <div className="feedback-container">
        {/* Close Button */}
        <button className="feedback-close" onClick={handleSkipFeedback} aria-label="Close">
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

        {/* Tab Navigation */}
        <div className="feedback-tabs">
          <button
            className={`tab-button ${activeTab === 'feedback' ? 'active' : ''}`}
            onClick={() => setActiveTab('feedback')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            Feedback
          </button>
          <button
            className={`tab-button ${activeTab === 'instagram' ? 'active' : ''}`}
            onClick={() => setActiveTab('instagram')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <circle cx="17.5" cy="6.5" r="1.5"></circle>
            </svg>
            Follow Us
          </button>
        </div>

        {/* Content */}
        <div className="feedback-content">
          {/* FEEDBACK TAB */}
          {activeTab === 'feedback' && (
            <div className="tab-content feedback-form-container">
              <div className="feedback-header">
                <h2 className="feedback-title">How's your experience?</h2>
                <p className="feedback-subtitle">We'd love your feedback after trying AskMyDoc</p>
              </div>

              {submitted ? (
                <div className="success-message">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <h3>Thank You!</h3>
                  <p>Your feedback helps us improve. We appreciate it! 🙏</p>
                </div>
              ) : (
                <form onSubmit={handleSubmitFeedback} className="feedback-form">
                  {/* Rating */}
                  <div className="form-group">
                    <label className="form-label">Rate your experience</label>
                    <div className="rating-input">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          className={`star ${rating >= star ? 'active' : ''}`}
                          onClick={() => setRating(star)}
                          aria-label={`Rate ${star} stars`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Review */}
                  <div className="form-group">
                    <label className="form-label">What do you think?</label>
                    <textarea
                      className="form-textarea"
                      placeholder="Share your experience with AskMyDoc..."
                      value={review}
                      onChange={(e) => setReview(e.target.value)}
                      rows="4"
                    ></textarea>
                  </div>

                  {/* Error Message */}
                  {error && <div className="error-message">{error}</div>}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="feedback-submit-btn"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner"></span>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="22" y1="2" x2="11" y2="13"></line>
                          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                        Submit Feedback
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    className="feedback-skip-btn"
                    onClick={handleSkipFeedback}
                  >
                    Maybe Later
                  </button>
                </form>
              )}
            </div>
          )}

          {/* INSTAGRAM TAB */}
          {activeTab === 'instagram' && (
            <div className="tab-content instagram-container">
              <div className="instagram-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <circle cx="17.5" cy="6.5" r="1.5"></circle>
                </svg>
              </div>

              <h2 className="instagram-title">Follow Us on Instagram</h2>
              <p className="instagram-subtitle">Stay updated with latest features and tips</p>

              <div className="instagram-content">
                <p className="instagram-handle">@wolvixstudio</p>
                <p className="instagram-description">
                  Follow for product updates, feature releases, and AI document analysis tips.
                </p>
              </div>

              <button className="instagram-follow-btn" onClick={handleFollowInstagram}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="white"></path>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="white"></circle>
                </svg>
                Follow on Instagram
              </button>

              <button className="instagram-close-btn" onClick={handleSkipFeedback}>
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedbackPopup;