import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column-left">
          <h1>HONEYBOOK</h1>
        </div>
        <div className="footer-column-right">
          <div className="footer-column">
            <h4>Product</h4>
            <ul>
              <li>Features overview</li>
              <li>Online contracts</li>
              <li>Online signature generator</li>
              <li>Online document signing</li>
              <li>Online invoices</li>
              <li>Online payments</li>
              <li>Payment reminders</li>
              <li>Online proposals</li>
              <li>Online scheduling</li>
              <li>Automations</li>
              <li>HoneyBook Finance</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>HoneyBook</h4>
            <ul>
              <li>Pricing</li>
              <li>Reviews</li>
              <li>About</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Company news</li>
              <li>Educator program</li>
              <li>Referral program</li>
              <li>Terms & privacy</li>
              <li>Subpoena policy</li>
              <li>Contact us</li>
              <li>Your privacy choices</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Free tools</h4>
            <ul>
              <li>Contract templates</li>
              <li>Invoice templates</li>
              <li>Invoice generator</li>
              <li>Self-employment tax calculator</li>
              <li>Email signature generator</li>
              <li>Mission statement generator</li>
              <li>Business personality test</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Resources</h4>
            <ul>
              <li>Live chat</li>
              <li>Help Center</li>
              <li>HoneyBook Blog</li>
              <li>Live virtual classes</li>
              <li>HoneyBook business academy</li>
              <li>Independent Business podcast</li>
              <li>Pros Marketplace</li>
              <li>Free file setup</li>
              <li>Sitemap</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 HoneyBook Inc.</p>
        <div className="footer-socials">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-x-twitter"></i>
          <i className="fab fa-pinterest"></i>
          <i className="fab fa-linkedin"></i>
        </div>
        <div className="mt-2 footer-apps">
          <img src="/img/apple.svg" alt="App Store" />
          <img src="/img/gplay.svg" alt="Google Play" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;