import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { WorkoutsContextProvider } from './context/WorkoutsContext';
import { ThemeProvider } from './context/ThemeContext'; // Import the DarkModeProvider
import 'tailwindcss/tailwind.css';

ReactDOM.render(
  <React.StrictMode>
    <WorkoutsContextProvider>
      <ThemeProvider> {/* Add the DarkModeProvider */}
        <App />
      </ThemeProvider>
    </WorkoutsContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
