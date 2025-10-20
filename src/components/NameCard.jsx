// src/components/NameCard.jsx

import React, { useState } from 'react';
import './NameCard.css';

function NameCard({ nameData }) {
  // State to manage the copy confirmation message
  const [isCopied, setIsCopied] = useState(false);

  // Function to copy the name to the clipboard
  const handleCopy = () => {
    // navigator.clipboard is the modern, non-deprecated way to copy text
    navigator.clipboard.writeText(nameData.name)
      .then(() => {
        // Show the 'Copied!' message
        setIsCopied(true);
        // Hide the message after 1.5 seconds
        setTimeout(() => setIsCopied(false), 1500);
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
        alert(`Could not copy ${nameData.name}`);
      });
  };

  return (
    <div className="name-card">
      <h3 className="name-card__name">{nameData.name}</h3>

      {/* NEW: Copy Button and Confirmation */}
      <div className="name-card__actions">
        <button onClick={handleCopy} disabled={isCopied}>
          {isCopied ? 'Copied!' : 'Copy Name'}
        </button>
      </div>
      {/* END NEW */}

      <div className="name-card__details">
        <p><strong>Culture:</strong> {nameData.culture}</p>
        <p><strong>Period:</strong> {nameData.sub_period}</p>
        <p><strong>Gender:</strong> {nameData.gender}</p>
      </div>
      <p className="name-card__meaning">Meaning: *{nameData.meaning}*</p>
    </div>
  );
}

export default NameCard;