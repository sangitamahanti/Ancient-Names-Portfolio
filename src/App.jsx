import allNames from './data/index.js';
import './App.css';
import NameCard from './components/NameCard.jsx';
import React, { useState, useEffect } from 'react'; // <--- Import useState and useEffect

function App() {
  // 1. Initialize theme state. Default to 'light' since that's what's currently showing.
  const [theme, setTheme] = useState('light'); 

  // 2. useEffect to update the body class whenever the theme changes
  useEffect(() => {
    // Remove all theme classes and add the current one
    document.body.classList.remove('dark-mode', 'light-mode'); 
    document.body.classList.add(`${theme}-mode`);
  }, [theme]); 

  // Function to switch the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const civilizations = Object.values(allNames);
  const totalEntries = civilizations.reduce((total, namesArray) => total + namesArray.length, 0);
  
  const buttonText = theme === 'light' ? 'Activate Dark Mode 🌙' : 'Activate Light Mode ☀️';

  return (
    <div className="App">
      
      {/* ------------------ THEME TOGGLE BUTTON ------------------ */}
      <button onClick={toggleTheme} className="theme-toggle-button" style={{ marginBottom: '20px' }}>
        {buttonText}
      </button>
      
      <h1>Ancient Names Portfolio</h1>
      
      {/* ------------------ DYNAMICALLY RENDER ALL SECTIONS ------------------ */}
      {Object.keys(allNames).map((cultureKey) => {
        const namesList = allNames[cultureKey];
        const cultureTitle = cultureKey.charAt(0).toUpperCase() + cultureKey.slice(1);

        return (
          <div key={cultureKey}>
            {/* The h2 style will be controlled by App.css for theme consistency */}
            <h2>{cultureTitle} Names ({namesList.length} Total)</h2>
            <div className="name-cards"> {/* Using your class from App.css */}
              {namesList.map((nameData) => (
                <NameCard key={nameData.name} nameData={nameData} />
              ))}
            </div>
          </div>
        );
      })}
      
      <p style={{ marginTop: '20px' }}>
        This portfolio currently features {totalEntries} entries.
      </p>
    </div>
  );
}

export default App;