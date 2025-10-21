import allNames from './data/index.js';
import './App.css';
import NameCard from './components/NameCard.jsx';
import React, { useState, useEffect } from 'react';

function App() {
  // 1. STATE DEFINITIONS
  
  // Existing Theme State
  const [theme, setTheme] = useState('light'); 
  
  // 💡 NEW FILTER STATES
  const [selectedCulture, setSelectedCulture] = useState('All');
  const [selectedGender, setSelectedGender] = useState('All');

  // 💡 NEW RANDOM NAME STATE
  const [randomName, setRandomName] = useState(null);

  // -------------------------------------------------------------
  // 2. DATA PROCESSING & LOGIC

  // Flatten the data into a single array for filtering and counting
  const ALL_NAMES_FLAT = Object.values(allNames).flat();
  const totalEntries = ALL_NAMES_FLAT.length; // Now correctly defined once

  // Generate Unique Filter Options 
  const uniqueCultures = [
    'All',
    // Get keys (cultures), then capitalize the first letter for display
    ...Object.keys(allNames).map(key => key.charAt(0).toUpperCase() + key.slice(1))
  ];
  const uniqueGenders = [
    'All',
    // Get unique genders from the flattened list
    ...new Set(ALL_NAMES_FLAT.map(name => name.gender))
  ];

  // FILTERING LOGIC
  const filteredNames = ALL_NAMES_FLAT.filter(name => {
    // 1. Culture Check (Convert selectedCulture to lowercase for matching data keys)
    const cultureKey = selectedCulture.toLowerCase();
    const cultureMatch = selectedCulture === 'All' || name.culture.toLowerCase() === cultureKey;
    
    // 2. Gender Check
    const genderMatch = selectedGender === 'All' || name.gender === selectedGender;
    
    return cultureMatch && genderMatch;
  });

  // 💡 RANDOM GENERATOR FUNCTION
  const generateRandomName = () => {
    if (filteredNames.length === 0) {
      setRandomName({ name: "No Names Found", culture: "Check Filters", gender: "" });
      return;
    }
    
    const randomIndex = Math.floor(Math.random() * filteredNames.length);
    setRandomName(filteredNames[randomIndex]);
  };

  // -------------------------------------------------------------
  // 3. EFFECTS & HANDLERS
  
  // Existing useEffect for theme
  useEffect(() => {
    document.body.classList.remove('dark-mode', 'light-mode'); 
    document.body.classList.add(`${theme}-mode`);
  }, [theme]); 

  // Existing function to switch the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  
  // -------------------------------------------------------------
  // 4. RENDER FUNCTION

  const buttonText = theme === 'light' ? 'Activate Dark Mode 🌙' : 'Activate Light Mode ☀️';

  return (
    <div className="App">
      
      {/* ------------------ NEW HEADER, TOGGLE, FILTERS, AND BUTTON ------------------ */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h1>Ancient Names Portfolio</h1>
          <button onClick={toggleTheme} className="theme-toggle-button">
            {buttonText}
          </button>
      </div>

      <div className="filter-controls" style={{ display: 'flex', gap: '20px', marginBottom: '30px', alignItems: 'center' }}>
        
        {/* Culture Filter */}
        <label htmlFor="culture-select">Filter by Culture:</label>
        <select 
          id="culture-select" 
          value={selectedCulture} 
          onChange={(e) => setSelectedCulture(e.target.value)}
        >
          {uniqueCultures.map(culture => (
            <option key={culture} value={culture}>
              {culture}
            </option>
          ))}
        </select>

        {/* Gender Filter */}
        <label htmlFor="gender-select">Filter by Gender:</label>
        <select 
          id="gender-select" 
          value={selectedGender} 
          onChange={(e) => setSelectedGender(e.target.value)}
        >
          {uniqueGenders.map(gender => (
            <option key={gender} value={gender}>
              {gender}
            </option>
          ))}
        </select>
        
        {/* Random Button */}
        <button onClick={generateRandomName} className="generate-button">
          Generate Random Name ✨
        </button>
      </div>

      {/* ------------------ RANDOM NAME DISPLAY ------------------ */}
      {randomName && (
        <div className="random-name-display" style={{ marginBottom: '30px' }}>
          <h2>Your Random Name:</h2>
          <div className="name-cards">
            <NameCard key={randomName.name} nameData={randomName} />
          </div>
        </div>
      )}
      
      {/* ------------------ DYNAMICALLY RENDER FILTERED LIST ------------------ */}
      <h2>Filtered Names ({filteredNames.length} Total)</h2>
      <div className="name-cards">
        {/* IMPORTANT: This now renders the filtered list instead of the grouped list */}
        {filteredNames.map((nameData) => (
          <NameCard key={nameData.name} nameData={nameData} />
        ))}
      </div>
      
      <p style={{ marginTop: '20px' }}>
        This portfolio currently features {totalEntries} total entries.
      </p>
    </div>
  );
}

export default App;