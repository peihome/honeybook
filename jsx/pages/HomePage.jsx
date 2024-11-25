// Created by: Surya Prakash N - 8924019

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Section3 } from '../components/Section3.jsx';
import {
  faFileInvoice,
  faFileSignature,
  faCalendarAlt,
  faCogs,
  faQuestionCircle,
  faProjectDiagram,
  faFileAlt,
  faCreditCard,
} from '@fortawesome/free-solid-svg-icons';

const tiles = [
  { title: "Send invoices", icon: faFileInvoice, color: '#F9A825' },
  { title: "Send contracts", icon: faFileSignature, color: '#0288D1' },
  { title: "Book & schedule", icon: faCalendarAlt, color: '#7B1FA2' },
  { title: "Automate workflows", icon: faCogs, color: '#388E3C' },
  { title: "Track inquiries", icon: faQuestionCircle, color: '#F44336' },
  { title: "Manage projects", icon: faProjectDiagram, color: '#FF9800' },
  { title: "Send forms", icon: faFileAlt, color: '#9C27B0' },
  { title: "Online payments", icon: faCreditCard, color: '#4CAF50' },
  { title: "Not sure", icon: faQuestionCircle, color: '#607D8B' },
];

const testimonials = [
  {
    name: "Alice Johnson",
    quote: "HoneyBook transformed how I manage my clients and projects!",
    photo: "https://res.cloudinary.com/honeybook/image/upload/c_thumb,dpr_2.0,f_auto,fl_lossy,g_faces,h_80,q_auto,r_max,w_80/v1/marketing_site/testimonials/member-3.png",
  },
  {
    name: "Michael Smith",
    quote: "Incredibly user-friendly and efficient. Highly recommended!",
    photo: "https://res.cloudinary.com/honeybook/image/upload/c_thumb,dpr_2.0,f_auto,fl_lossy,g_faces,h_80,q_auto,r_max,w_80/v1/marketing_site/testimonials/member-2.png",
  },
  {
    name: "Sarah Lee",
    quote: "The automation features saved me countless hours.",
    photo: "https://res.cloudinary.com/honeybook/image/upload/c_thumb,dpr_2.0,f_auto,fl_lossy,g_faces,h_80,q_auto,r_max,w_80/v1/marketing_site/testimonials/member-1.png",
  },
];

const HomePage = () => {
  const [selectedTiles, setSelectedTiles] = useState([]);
  const [hoveredTile, setHoveredTile] = useState(null);

  const handleCheckboxChange = (title) => {
    setSelectedTiles((prevSelectedTiles) =>
      prevSelectedTiles.includes(title)
        ? prevSelectedTiles.filter((tile) => tile !== title)
        : [...prevSelectedTiles, title]
    );
  };

  return (
    <div class="paddingTop5">
      {/* Section 1 */}
      <div
        style={{
          backgroundColor: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '20px',
        }}
      >
        <div>
          <h1>Client relationships start and grow on HoneyBook</h1>
          <h2>What do you want to do with HoneyBook?</h2>
        </div>

        {/* Tile Row Section */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'nowrap',
            overflowX: 'auto',
            padding: '20px 0',
            marginTop: '40px',
            gap: '20px',
            width: '100%',
          }}
        >
          {tiles.map((tile, index) => (
            <div
              key={index}
              style={{
                backgroundColor: tile.color,
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: '10px',
                cursor: 'pointer',
                boxSizing: 'border-box',
                minWidth: '150px',
                flexShrink: 0,
                transition: 'border 0.3s ease',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                border: selectedTiles.includes(tile.title)
                  ? '2px solid black'
                  : hoveredTile === tile.title
                  ? '2px solid white'
                  : 'none',
              }}
              onMouseEnter={() => setHoveredTile(tile.title)}
              onMouseLeave={() => setHoveredTile(null)}
            >
              <FontAwesomeIcon icon={tile.icon} style={{ fontSize: '40px', color: '#fff' }} />
              <p
                style={{
                  marginTop: '10px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  color: '#fff',
                }}
              >
                {tile.title}
              </p>
              <input
                type="checkbox"
                checked={selectedTiles.includes(tile.title)}
                onChange={() => handleCheckboxChange(tile.title)}
                style={{
                  marginTop: '10px',
                  cursor: 'pointer',
                  accentColor: selectedTiles.includes(tile.title) ? tile.color : '#fff',
                  transform: 'scale(1.8)',
                }}
              />
            </div>
          ))}
        </div>

        <button
          style={{
            background: '#5f30e3',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            padding: '10px 15px',
            cursor: 'pointer',
            marginTop: '30px',
            transition: 'background 0.3s ease',
          }}
          onMouseEnter={(e) => (e.target.style.background = '#4b27c0')}
          onMouseLeave={(e) => (e.target.style.background = '#5f30e3')}
        >
          Start Free Trial
        </button>
        <p className="pt-2">No credit card required</p>

        {/* New Row with 3 Columns */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '40px',
            width: '100%',
            padding: '0 10%',
            gap: '20px',
          }}
        >
          <div style={{ textAlign: 'center', flex: 1 }}>
            <h2>$8B+</h2>
            <p>earned by HoneyBook members</p>
          </div>
          <div style={{ textAlign: 'center', flex: 1 }}>
            <h2>90% of invoices</h2>
            <p>are paid on time or early</p>
          </div>
          <div style={{ textAlign: 'center', flex: 1 }}>
            <h2>95% of members</h2>
            <p>feel more organized with HoneyBook</p>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div
        className="section2Class"
        style={{
          backgroundColor: '#121417',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: 'white',
          padding: '0 10%',
        }}
      >
        <div style={{ flex: 0.4, textAlign: 'left' }}>
          <h1>It’s free to try.</h1>
          <h1>We hope you do.</h1>
          <button
            style={{
              background: '#ffd853',
              color: '#121417',
              border: 'none',
              borderRadius: '5px',
              padding: '10px 15px',
              cursor: 'pointer',
              transition: 'background 0.3s ease',
            }}
            onMouseEnter={(e) => (e.target.style.background = '#ffdf5c')}
            onMouseLeave={(e) => (e.target.style.background = '#ffd853')}
          >
            Start Free Trial
          </button>
          <p className="pt-2">No credit card required</p>
        </div>

        <div
          style={{
            flex: 1,
            backgroundImage: 'url("/img/honey.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '500px',
          }}
        ></div>
      </div>

      {/* Section 3 */}
      <div style={{
            backgroundColor: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '20px',
          }}>
        <Section3 />
      </div>

      {/* Section 4: Testimonials */}
<div
  style={{
    background: 'linear-gradient(to right, #121417, #2e2e2e)', // Dark gradient background for depth
    padding: '60px 20px',
    textAlign: 'center',
    color: 'white', // White text for readability
  }}
>
  <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#F9A825' }}>
    What our users say
  </h1>
  <div style={{ marginTop: '10px', marginBottom: '40px' }}>
    <p style={{ fontSize: '18px', color: '#ddd', marginBottom: '10px' }}>
      <span style={{ color: '#FF9800', fontWeight: 'bold' }}>
        Trusted by over 100,000 independent businesses.
      </span>
    </p>
    <p style={{ fontSize: '18px', color: '#bbb', marginTop: '0px', fontWeight: '600' }}>
      <span style={{ color: '#4CAF50', fontWeight: 'bold' }}>93% of members</span> would recommend HoneyBook to a friend.
    </p>
  </div>
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '30px',
    }}
  >
    {testimonials.map((testimonial, index) => (
      <div
        key={index}
        style={{
          backgroundColor: '#1e1e1e', // Darker background for testimonial cards
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)', // Darker shadow for depth
          padding: '20px',
          textAlign: 'center',
          maxWidth: '300px',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition for hover effect
          border: '2px solid #FF9800', // Golden border for a striking look
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.05)';
          e.target.style.boxShadow = '0 6px 18px rgba(0, 0, 0, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.4)';
        }}
      >
        <img
          src={testimonial.photo}
          alt={testimonial.name}
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            objectFit: 'cover',
            marginBottom: '10px',
            border: '3px solid #F9A825', // Golden border around the image for better visibility
          }}
        />
        <p style={{ fontStyle: 'italic', color: '#ccc' }}>
          "{testimonial.quote}"
        </p>
        <p style={{ fontWeight: 'bold', marginTop: '10px', color: '#FFF' }}>
          - {testimonial.name}
        </p>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default HomePage;
