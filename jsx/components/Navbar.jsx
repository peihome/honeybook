import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ background: '#333', padding: '10px', color: 'white' }}>
    <ul style={{ listStyle: 'none', display: 'flex' }}>
      <li style={{ margin: '0 10px' }}>
        <Link to="/" style={{ color: 'white' }}>Home</Link>
      </li>
      <li style={{ margin: '0 10px' }}>
        <Link to="/about" style={{ color: 'white' }}>About</Link>
      </li>
      <li style={{ margin: '0 10px' }}>
        <Link to="/contact" style={{ color: 'white' }}>Contact</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;