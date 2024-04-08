import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="container mx-auto py-4">
      <Link to="/" className="text-2xl font-bold text-blue-700 hover:text-blue-900 transition-colors">
        Workout Buddy
      </Link>
    </div>
  );
};

export default Navbar;
