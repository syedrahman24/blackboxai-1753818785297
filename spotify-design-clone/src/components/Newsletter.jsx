import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setStatus('error');
      return;
    }
    
    // Simulate newsletter signup
    setStatus('success');
    setEmail('');
    
    // Reset status after 3 seconds
    setTimeout(() => {
      setStatus('');
    }, 3000);
  };

  return (
    <section className="newsletter">
      <h2>
        Stay in the <span className="newsletter-highlight">loop</span>
      </h2>
      <p>Get the latest stories, tools, and insights delivered to your inbox.</p>
      
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
      
      {status === 'error' && (
        <p className="error-message">Please enter a valid email address.</p>
      )}
      {status === 'success' && (
        <p className="success-message">Thanks for subscribing! Check your inbox for confirmation.</p>
      )}
      
      <p className="newsletter-disclaimer">
        By subscribing, you agree to receive marketing emails from Spotify Design. 
        You can unsubscribe at any time. For more information, see our Privacy Policy.
      </p>
    </section>
  );
};

export default Newsletter;
