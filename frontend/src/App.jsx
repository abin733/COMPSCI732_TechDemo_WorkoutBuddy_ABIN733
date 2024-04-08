import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  // Define state for dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}> {/* Apply dark mode class */}
      <BrowserRouter>
        <Navbar toggleDarkMode={toggleDarkMode} /> {/* Pass toggle function to Navbar */}
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
