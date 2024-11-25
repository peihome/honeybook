import React from 'react';
import { Tile } from '../components/Tile.jsx';
import { faAddressBook, faCalendarAlt, faFileInvoice, faVideo, faCloud, faEnvelope, faLink, faChrome, faGoogle, faMailBulk, faZap, faUsers } from '@fortawesome/free-solid-svg-icons';

export const Section3 = () => (
  <div>
    {/* Section 3 */}
    <div style={{
      backgroundColor: '#f4f7fc',  // Light gray background for the section
      height: '500px',  // Reduced height
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      padding: '20px',
    }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#333' }}>Integrations that make your life easier</h1>
        <p style={{ fontSize: '16px', color: '#555' }}>HoneyBook works with the tools you already use, so you can work more efficiently than ever.</p>
      </div>

      {/* Row 1: Creative Layout */}
      <div style={{
        width: '100%',
        marginTop: '30px',
        display: 'flex',
        justifyContent: 'space-between',
        position: 'relative',
        paddingBottom: '40px',
      }}>
        {/* Tile 1: Larger and off-centered */}
        <Tile icon={faCalendarAlt} title="Google contact" description="Client management" color="#4CAF50" style={{ transform: 'translateY(-30px)', width: '25%' }} />
        
        {/* Tile 2: Small, placed next to the larger one */}
        <Tile icon={faEnvelope} title="Meta leads" description="Calendar" color="#FF9800" style={{ width: '18%' }} />
        
        {/* Tile 3: A larger tile to make a nice contrast */}
        <Tile icon={faFileInvoice} title="Quickbooks" description="Reports" color="#2196F3" style={{ transform: 'translateY(30px)', width: '25%' }} />
        
        {/* Tile 4: Small but strategically placed on the opposite side */}
        <Tile icon={faMailBulk} title="Gmail" description="Email communication" color="#E91E63" style={{ width: '18%' }} />
        
        {/* Tile 5: Full-width tile in between to break up the symmetry */}
        <Tile icon={faZap} title="Zapier" description="Automation" color="#9C27B0" style={{ width: '25%' }} />
      </div>

      {/* Row 2: Alternate stacking */}
      <div style={{
        width: '100%',
        marginTop: '30px',
        display: 'flex',
        justifyContent: 'space-between',
        position: 'relative',
      }}>
        {/* Tile 1: Positioned a bit higher, creating a layered effect */}
        <Tile icon={faCloud} title="iCloud" description="Email" color="#00BCD4" style={{ transform: 'translateY(-20px)', width: '20%' }} />
        
        {/* Tile 2: Small and offset */}
        <Tile icon={faCalendarAlt} title="Outlook" description="Email & calendar" color="#FF5722" style={{ width: '18%' }} />
        
        {/* Tile 3: Stacked lower */}
        <Tile icon={faAddressBook} title="Phonebook" description="Contact management" color="#3F51B5" style={{ transform: 'translateY(20px)', width: '22%' }} />
        
        {/* Tile 4: On the other side, with emphasis */}
        <Tile icon={faUsers} title="Teams" description="Collaboration" color="#4CAF50" style={{ transform: 'translateY(10px)', width: '20%' }} />
      </div>
    </div>

    {/* CSS for animations and creative layout */}
    <style jsx>{`

      .tile {
        background-color: #fff;
        border-radius: 10px;
        padding: 20px;
        flex-shrink: 0;
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      /* Hover effects */
      .tile:hover {
        transform: scale(1.05);
        cursor: pointer;
        box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.15); /* Enhanced shadow effect */
      }

      .tile .fa {
        font-size: 50px;
        color: white;
        margin-bottom: 15px;
      }

      /* Custom background colors for each tile */
      .tile[data-color="google"] { background-color: #4CAF50; }
      .tile[data-color="meta"] { background-color: #FF9800; }
      .tile[data-color="quickbooks"] { background-color: #2196F3; }
      .tile[data-color="gmail"] { background-color: #E91E63; }
      .tile[data-color="zapier"] { background-color: #9C27B0; }
      .tile[data-color="icloud"] { background-color: #00BCD4; }
      .tile[data-color="outlook"] { background-color: #FF5722; }
      .tile[data-color="phonebook"] { background-color: #3F51B5; }
      .tile[data-color="teams"] { background-color: #4CAF50; }
      
      .tile .tile-title {
        font-size: 18px;
        font-weight: bold;
        color: #fff;
        margin-bottom: 10px;
      }

      .tile .tile-description {
        font-size: 14px;
        color: #fff;
      }
    `}</style>
  </div>
);

