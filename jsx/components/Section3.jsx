// Created by: Surya Prakash N - 8924019

import React from 'react';
import { Tile } from '../components/Tile.jsx';
import { faAddressBook, faCalendarAlt, faFileInvoice, faVideo, faCloud, faEnvelope, faLink, faChrome, faGoogle, faMailBulk, faZap, faUsers } from '@fortawesome/free-solid-svg-icons';
import '../../public/css/section3.css';

export const Section3 = () => (
  <div>
    {/* Section 3 */}
    <div style={{
      backgroundColor: '#f4f7fc',  // Light gray background for the section
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      padding: '20px',
      width: '100%',
      boxSizing: 'border-box',
      marginBottom: '40px',  // Added margin at the bottom for space between sections
    }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#333' }}>Integrations that make your life easier</h1>
        <p style={{ fontSize: '16px', color: '#555' }}>HoneyBook works with the tools you already use, so you can work more efficiently than ever.</p>
      </div>

      {/* Row 1: Creative Layout */}
      <div className="section3Class"
        style={{
        width: '100%',
        marginTop: '30px',
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        flexWrap: 'wrap',  // Wrap tiles on smaller screens
        gap: '20px',
      }}>
        <Tile icon={faCalendarAlt} title="G - Contacts" description="Client management" color="google" style={{ transform: 'translateY(-30px)', width: '25%', minWidth: '200px' }} />
        <Tile icon={faEnvelope} title="Meta leads" description="Calendar" color="meta" style={{ width: '18%', minWidth: '200px' }} />
        <Tile icon={faFileInvoice} title="Quickbooks" description="Reports" color="quickbooks" style={{ transform: 'translateY(30px)', width: '25%', minWidth: '200px' }} />
        <Tile icon={faMailBulk} title="Gmail" description="Email communication" color="gmail" style={{ width: '18%', minWidth: '200px' }} />
        <Tile icon={faZap} title="Zapier" description="Automation" color="zapier" style={{ width: '25%', minWidth: '200px' }} />
        <Tile icon={faCloud} title="iCloud" description="Email" color="icloud" style={{ transform: 'translateY(-20px)', width: '20%', minWidth: '200px' }} />
        <Tile icon={faCalendarAlt} title="Outlook" description="Email & calendar" color="outlook" style={{ width: '18%', minWidth: '200px' }} />
        <Tile icon={faAddressBook} title="Phonebook" description="Contact management" color="phonebook" style={{ transform: 'translateY(20px)', width: '22%', minWidth: '200px' }} />
        <Tile icon={faUsers} title="Teams" description="Collaboration" color="teams" style={{ transform: 'translateY(10px)', width: '20%', minWidth: '200px' }} />
      </div>
    </div>
  </div>
);
