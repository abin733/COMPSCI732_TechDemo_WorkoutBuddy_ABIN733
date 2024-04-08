import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleDarkMode }) => {
  return (
    <div className="container mx-auto flex justify-between items-center py-4">
      <Link to="/" className="text-2xl font-bold text-blue-700 hover:text-blue-900 transition-colors">
        Workout Buddy
      </Link>
      <button
        className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-semibold py-2 px-4 rounded-md transition-colors"
        onClick={toggleDarkMode} // Toggle dark mode on click
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'} {/* Conditional button label */}
      </button>
    </div>
  );
};

export default Navbar;
