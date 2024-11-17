import React from 'react';
import { Tile } from '../components/Tile.jsx';
import { faAddressBook, faCalendarAlt, faFileInvoice, faVideo, faCloud, faEnvelope, faLink, faChrome, faGoogle } from '@fortawesome/free-solid-svg-icons';

export const Section3 = () => (
  <div>
    {/* Section 3 */}
    <div style={{
      backgroundColor: '#ffffff',
      height: '600px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column', // Center content vertically
      padding: '20px',
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1>Integrations that make your life easier</h1>
        <p>HoneyBook works with the tools you already use, so you can work more efficiently than ever.</p>
      </div>

      {/* Row 1: Tiles sliding from left to right */}
      <div style={{
        width: '100%',
        overflow: 'hidden',
        marginTop: '30px',
        position: 'relative',
      }}>
        <div style={{
          display: 'flex'
        }}>
          <Tile icon={faCalendarAlt} title="Google contact" description="Client management" />
          <Tile icon={faEnvelope} title="Meta leads" description="Calendar" />
          <Tile icon={faFileInvoice} title="Quickbooks" description="Reports" />
          <Tile icon={faVideo} title="Reports" description="Communication" />
        </div>
      </div>

      {/* Row 2: Tiles sliding from right to left */}
      <div style={{
        width: '100%',
        overflow: 'hidden',
        marginTop: '30px',
        position: 'relative',
      }}>
        <div style={{
          display: 'flex'
        }}>
          <Tile icon={faCloud} title="iCloud" description="Email" />
          <Tile icon={faCalendarAlt} title="Outlook" description="Email & calendar" />
          <Tile icon={faAddressBook} title="Phonebook" description="Contact management" />
          <Tile icon={faCalendarAlt} title="Meta leads" description="Calendar" />
        </div>
      </div>
    </div>

    {/* CSS for animations */}
    <style jsx>{`

      .tile:hover {
        transform: scale(0.95);  /* Zoom effect on hover */
        cursor: pointer;
      }

      .tile {
        transition: transform 0.3s ease;  /* Smooth transition for scale on hover */
      }
    `}</style>
  </div>
);