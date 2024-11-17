import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileInvoice, faFileSignature, faCalendarAlt, faCogs, faQuestionCircle, faProjectDiagram, faFileAlt, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { Section3 } from '../components/Section3.jsx';

const tiles = [
  { title: "Send invoices", icon: faFileInvoice },
  { title: "Send contracts", icon: faFileSignature },
  { title: "Book & schedule", icon: faCalendarAlt },
  { title: "Automate workflows", icon: faCogs },
  { title: "Track inquiries", icon: faQuestionCircle },
  { title: "Manage projects", icon: faProjectDiagram },
  { title: "Send forms & questionnaires", icon: faFileAlt },
  { title: "Accept online payments", icon: faCreditCard },
  { title: "Not sure", icon: faQuestionCircle }
];

const HomePage = () => (
  <div>
    {/* Section 1 */}
    <div style={{
      backgroundColor: '#ffffff',  // Example background color
      height: '600px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '20px',
    }}>
      <div>
        <h1>Client relationships start and grow on HoneyBook</h1>
        <h2>What do you want to do with HoneyBook?</h2>
      </div>

      {/* Tile Row Section */}
      <div style={{ display: 'flex', overflowX: 'auto', padding: '20px 0', marginTop: '40px' }}>
        {tiles.map((tile, index) => (
          <div
            key={index}
            style={{
              width: '120px',
              height: '150px',
              backgroundColor: '#f4f4f4',
              margin: '0 5px',
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              boxSizing: 'border-box',
              cursor: 'pointer',
              transition: 'border 0.3s ease',
            }}
            onMouseEnter={(e) => e.target.style.border = '2px solid #333'}
            onMouseLeave={(e) => e.target.style.border = 'none'}
          >
            <FontAwesomeIcon icon={tile.icon} style={{ fontSize: '40px', color: '#333' }} />
            <p style={{ marginTop: '10px', fontSize: '14px', color: '#333' }}>{tile.title}</p>
          </div>
        ))}
      </div>
      <button style={{
          background: '#5f30e3',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          padding: '10px 15px',
          cursor: 'pointer',
        }}>
          Start Free Trial
        </button>
        <p class="pt-2">No credit card required</p>
        {/* New Row with 3 Columns */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '40px',
        width: '100%',
        padding: '0 10%',
      }}>
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
    <div style={{
      backgroundColor: '#121417',
      height: '500px',
      display: 'flex',
      justifyContent: 'space-between',  // Distribute left and right columns
      alignItems: 'center',
      color: 'white',
      padding: '0 10%',  // Add padding for spacing
    }}>
      {/* Left Column */}
      <div style={{ flex: 0.4, textAlign: 'left' }}>
        <h1>It’s free to try.</h1>
        <h1>We hope you do.</h1>
        <button style={{
          background: '#ffd853',
          color: '#121417',
          border: 'none',
          borderRadius: '5px',
          padding: '10px 15px',
          cursor: 'pointer',
        }}>
          Start Free Trial
        </button>
        <p class="pt-2">No credit card required</p>
      </div>

      {/* Right Column (Empty) */}
      <div style={{ 
        flex: 1,
        backgroundImage: 'url("/img/honey.png")',  // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '500px',
      }}></div>
    </div>

    {/* Section 3 */}
    <div style={{
      backgroundColor: '#ffffff',  // Example background color
      height: '600px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '20px',
    }}>
      <Section3 />
    </div>
  </div>
);

export default HomePage;