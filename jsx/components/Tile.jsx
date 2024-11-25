// Created by: Surya Prakash N - 8924019

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Tile = ({ icon, title, description }) => {
  return (
    <div
      className="tile"
      style={{
        margin: '0 20px',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        textAlign: 'center',
        transition: 'transform 0.3s',
        minWidth: '200px',
      }}
    >
      <FontAwesomeIcon icon={icon} size="3x" style={{ marginBottom: '10px' }} />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};