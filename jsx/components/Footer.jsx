// Created by: Surya Prakash N - 8924019

import React from 'react';

// Inline CSS styles
const styles = {
  footer: {
    backgroundColor: '#2c3e50',
    color: 'white',
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif',
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '30px',
  },
  footerColumnLeft: {
    flex: 1,
  },
  footerColumnLeftH1: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#ff9800',
    marginBottom: '20px',
  },
  footerColumnRight: {
    display: 'flex',
    gap: '30px',
    flex: 3,
    flexWrap: 'wrap',
  },
  footerColumn: {
    flex: 1,
    minWidth: '200px',
  },
  footerColumnH4: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: '#ff9800',
  },
  footerColumnUl: {
    listStyleType: 'none',
    padding: 0,
  },
  footerColumnLi: {
    margin: '10px 0',
    fontSize: '14px',
    transition: 'color 0.3s',
  },
  footerColumnLiHover: {
    color: '#ff9800',
    cursor: 'pointer',
  },
  footerBottom: {
    marginTop: '40px',
    textAlign: 'center',
  },
  footerBottomP: {
    margin: 0,
    fontSize: '14px',
    color: '#bdc3c7',
  },
  footerSocials: {
    margin: '10px 0',
  },
  footerSocialsIcon: {
    fontSize: '20px',
    color: '#fff',
    margin: '0 10px',
    transition: 'color 0.3s',
  },
  footerSocialsIconHover: {
    color: '#ff9800',
  },
  footerApps: {
    marginTop: '15px',
  },
  footerAppsImg: {
    width: '120px',
    margin: '0 10px',
    transition: 'transform 0.3s',
  },
  footerAppsImgHover: {
    transform: 'scale(1.1)',
  },
};

// React Footer Component
const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent} class="footerContent">
        <div style={styles.footerColumnLeft}>
          <h1 style={styles.footerColumnLeftH1}>HONEYBOOK</h1>
        </div>
        <div style={styles.footerColumnRight}>
          <div style={styles.footerColumn}>
            <h4 style={styles.footerColumnH4}>Product</h4>
            <ul style={styles.footerColumnUl}>
              <li style={styles.footerColumnLi}>Features overview</li>
              <li style={styles.footerColumnLi}>Online contracts</li>
              <li style={styles.footerColumnLi}>Online signature generator</li>
              <li style={styles.footerColumnLi}>Online document signing</li>
              <li style={styles.footerColumnLi}>Online invoices</li>
              <li style={styles.footerColumnLi}>Online payments</li>
              <li style={styles.footerColumnLi}>Payment reminders</li>
              <li style={styles.footerColumnLi}>Online proposals</li>
              <li style={styles.footerColumnLi}>Online scheduling</li>
              <li style={styles.footerColumnLi}>Automations</li>
              <li style={styles.footerColumnLi}>HoneyBook Finance</li>
            </ul>
          </div>
          <div style={styles.footerColumn}>
            <h4 style={styles.footerColumnH4}>HoneyBook</h4>
            <ul style={styles.footerColumnUl}>
              <li style={styles.footerColumnLi}>Pricing</li>
              <li style={styles.footerColumnLi}>Reviews</li>
              <li style={styles.footerColumnLi}>About</li>
              <li style={styles.footerColumnLi}>Careers</li>
              <li style={styles.footerColumnLi}>Press</li>
              <li style={styles.footerColumnLi}>Company news</li>
              <li style={styles.footerColumnLi}>Educator program</li>
              <li style={styles.footerColumnLi}>Referral program</li>
              <li style={styles.footerColumnLi}>Terms & privacy</li>
              <li style={styles.footerColumnLi}>Subpoena policy</li>
              <li style={styles.footerColumnLi}>Contact us</li>
              <li style={styles.footerColumnLi}>Your privacy choices</li>
            </ul>
          </div>
          <div style={styles.footerColumn}>
            <h4 style={styles.footerColumnH4}>Free tools</h4>
            <ul style={styles.footerColumnUl}>
              <li style={styles.footerColumnLi}>Contract templates</li>
              <li style={styles.footerColumnLi}>Invoice templates</li>
              <li style={styles.footerColumnLi}>Invoice generator</li>
              <li style={styles.footerColumnLi}>Self-employment tax calculator</li>
              <li style={styles.footerColumnLi}>Email signature generator</li>
              <li style={styles.footerColumnLi}>Mission statement generator</li>
              <li style={styles.footerColumnLi}>Business personality test</li>
            </ul>
          </div>
          <div style={styles.footerColumn}>
            <h4 style={styles.footerColumnH4}>Resources</h4>
            <ul style={styles.footerColumnUl}>
              <li style={styles.footerColumnLi}>Live chat</li>
              <li style={styles.footerColumnLi}>Help Center</li>
              <li style={styles.footerColumnLi}>HoneyBook Blog</li>
              <li style={styles.footerColumnLi}>Live virtual classes</li>
              <li style={styles.footerColumnLi}>HoneyBook business academy</li>
              <li style={styles.footerColumnLi}>Independent Business podcast</li>
              <li style={styles.footerColumnLi}>Pros Marketplace</li>
              <li style={styles.footerColumnLi}>Free file setup</li>
              <li style={styles.footerColumnLi}>Sitemap</li>
            </ul>
          </div>
        </div>
      </div>
      <div style={styles.footerBottom}>
        <p style={styles.footerBottomP}>© 2024 HoneyBook Inc.</p>
        <div style={styles.footerSocials}>
          <i
            className="fab fa-facebook"
            style={styles.footerSocialsIcon}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ff9800')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
          ></i>
          <i
            className="fab fa-instagram"
            style={styles.footerSocialsIcon}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ff9800')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
          ></i>
          <i
            className="fab fa-x-twitter"
            style={styles.footerSocialsIcon}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ff9800')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
          ></i>
          <i
            className="fab fa-pinterest"
            style={styles.footerSocialsIcon}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ff9800')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
          ></i>
          <i
            className="fab fa-linkedin"
            style={styles.footerSocialsIcon}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ff9800')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
          ></i>
        </div>
        <div style={styles.footerApps}>
          <img
            src="/img/apple.svg"
            alt="App Store"
            style={styles.footerAppsImg}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          />
          <img
            src="/img/gplay.svg"
            alt="Google Play"
            style={styles.footerAppsImg}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
