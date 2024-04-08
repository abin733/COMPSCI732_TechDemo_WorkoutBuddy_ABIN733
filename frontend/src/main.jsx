import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { WorkoutsContextProvider } from './context/WorkoutsContext';
import { DarkModeProvider } from './context/DarkModeContext'; // Import the DarkModeProvider
import 'tailwindcss/tailwind.css';

ReactDOM.render(
  <React.StrictMode>
    <WorkoutsContextProvider>
      <DarkModeProvider> {/* Add the DarkModeProvider */}
        <App />
      </DarkModeProvider>
    </WorkoutsContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
