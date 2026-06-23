import React, { useState } from 'react';
import './Css/Pricing.css';

const plans = [
  {
    name: 'Free',
    price: '0',
    badge: 'Always Free',
    description: 'Perfect for individuals getting started with AI document analysis.',
    features: [
      'Up to 10 documents/month',
      'AI-powered summarization',
      'Basic keyword search',
      'PDF & DOCX support',
      'Email support',
    ],
    cta: 'Get Started Free',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '12',
    badge: 'Most Popular',
    description: 'For professionals who need deeper insights and higher volume.',
    features: [
      'Unlimited documents',
      'Advanced AI analysis',
      'Smart categorization',
      'Priority processing',
      'Integrations (Drive, Dropbox)',
      'Priority support',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    badge: 'For Teams',
    description: 'Tailored solutions for large teams with compliance needs.',
    features: [
      'Everything in Pro',
      'Custom AI models',
      'Team collaboration',
      'SSO & SAML login',
      'GDPR & SOC 2 compliance',
      'Dedicated account manager',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

const Pricing = () => {
  const [billing, setBilling] = useState('monthly');

  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-glow" aria-hidden="true" />

      <div className="pricing-wrapper">

        {/* Eyebrow */}
        <div className="pricing-eyebrow">
          <span className="eyebrow-line" />
          <span className="eyebrow-text">Simple pricing</span>
          <span className="eyebrow-line" />
        </div>

        {/* Heading */}
        <h2 className="pricing-heading">
          Start for <span className="pricing-heading-accent">Free</span>, Scale as You Grow
        </h2>
        <p className="pricing-subtext">
          No credit card required. No hidden fees. AskMyDoc is completely free to get started —
          upgrade only when you need more.
        </p>

        {/* Billing Toggle */}
        <div className="billing-toggle">
          <button
            className={`toggle-btn ${billing === 'monthly' ? 'active' : ''}`}
            onClick={() => setBilling('monthly')}
          >
            Monthly
          </button>
          <button
            className={`toggle-btn ${billing === 'yearly' ? 'active' : ''}`}
            onClick={() => setBilling('yearly')}
          >
            Yearly
            <span className="save-badge">Save 20%</span>
          </button>
        </div>

        {/* Cards */}
        <div className="pricing-cards">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card ${plan.highlighted ? 'pricing-card--highlighted' : ''}`}
            >
              {/* Badge */}
              <span className={`plan-badge ${plan.highlighted ? 'plan-badge--highlighted' : ''}`}>
                {plan.badge}
              </span>

              {/* Plan name */}
              <h3 className="plan-name">{plan.name}</h3>

              {/* Price */}
              <div className="plan-price">
                {plan.price === 'Custom' ? (
                  <span className="price-amount">Custom</span>
                ) : (
                  <>
                    <span className="price-currency">$</span>
                    <span className="price-amount">
                      {billing === 'yearly'
                        ? plan.price === '0'
                          ? '0'
                          : Math.round(parseInt(plan.price) * 0.8)
                        : plan.price}
                    </span>
                    <span className="price-period">/mo</span>
                  </>
                )}
              </div>

              <p className="plan-description">{plan.description}</p>

              {/* Divider */}
              <div className="plan-divider" />

              {/* Features */}
              <ul className="plan-features">
                {plan.features.map((feature) => (
                  <li key={feature} className="plan-feature-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                      strokeLinejoin="round" className="feature-check">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="/popup"
                className={`plan-cta ${plan.highlighted ? 'plan-cta--highlighted' : ''}`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Free note */}
        <p className="pricing-footnote">
          🎉 The <strong>Free plan never expires</strong> — no credit card, no commitment.
        </p>

      </div>
    </section>
  );
};

export default Pricing;