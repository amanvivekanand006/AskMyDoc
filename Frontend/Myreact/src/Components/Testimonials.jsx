import React from 'react';
import './Css/Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "AskMyDoc has completely transformed how we handle document analysis. The AI is incredibly accurate and the interface is so intuitive. Highly recommended!",
      author: "Priya Sharma",
      role: "Founder, TechHub India",
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces"
    },
    {
      id: 2,
      quote: "The ability to chat with our documents has saved us hours every week. It's like having a personal research assistant. Outstanding product!",
      author: "Rajesh Patel",
      role: "Director, DataSync Solutions",
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces"
    },
    {
      id: 3,
      quote: "We've integrated AskMyDoc into our workflow and the ROI has been incredible. Smart, fast, and reliable. A game-changer for our team!",
      author: "Ananya Desai",
      role: "VP Operations, CloudNova",
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=faces"
    }
  ];

  return (
    <section className="testimonials-section">
      {/* Header */}
      <div className="testimonials-header">
        <p className="testimonials-label">Featured Reviews</p>
        <h2 className="testimonials-title">Client Highlights</h2>
      </div>

      {/* Testimonials Cards Container */}
      <div className="testimonials-container">
        <div className="cards-wrapper">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="glass-card"
            >
              <div className="card-inner">
                {/* Quotation Icon */}
                <div className="quote-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
                    <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
                  </svg>
                </div>

                {/* Review Text */}
                <p className="review-text">{testimonial.quote}</p>

                {/* Divider */}
                <div className="card-divider"></div>

                {/* Footer - Author Info */}
                <div className="card-footer">
                  <div className="author-info">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="author-image"
                    />
                    <div className="author-details">
                      <div className="author-name">{testimonial.author}</div>
                      <div className="author-role">{testimonial.role}</div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="rating">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="star-icon"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                    <span className="rating-value">{testimonial.rating.toFixed(1)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;