import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Stories</h3>
          <div className="footer-links">
            <a href="#design">Design</a>
            <a href="#process">Process</a>
            <a href="#noted">Noted</a>
            <a href="#listen">Listen</a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Company</h3>
          <div className="footer-links">
            <a href="#about">About Spotify</a>
            <a href="#careers">Careers</a>
            <a href="#newsroom">Newsroom</a>
            <a href="#investors">Investors</a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Resources</h3>
          <div className="footer-links">
            <a href="#tools">Tools</a>
            <a href="#guidelines">Guidelines</a>
            <a href="#brand">Brand Assets</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Connect</h3>
          <div className="footer-links">
            <a href="#twitter">Twitter</a>
            <a href="#instagram">Instagram</a>
            <a href="#linkedin">LinkedIn</a>
            <a href="#dribbble">Dribbble</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-legal">
          <a href="#legal">Legal</a>
          <a href="#privacy">Privacy Center</a>
          <a href="#cookies">Cookies</a>
          <a href="#accessibility">Accessibility</a>
        </div>
        <div className="time-zones">
          <div className="time-zone">
            <div className="time-zone-dot"></div>
            <span>Stockholm 15:42</span>
          </div>
          <div className="time-zone">
            <div className="time-zone-dot"></div>
            <span>New York 09:42</span>
          </div>
          <div className="time-zone">
            <div className="time-zone-dot"></div>
            <span>London 14:42</span>
          </div>
        </div>
        <button className="back-to-top" onClick={scrollToTop}>
          Back to top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
