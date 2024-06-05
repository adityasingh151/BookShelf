// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">Personal Bookshelf</Link>
        <div>
          <Link to="/" className="text-gray-300 hover:text-white px-3">Search</Link>
          <Link to="/bookshelf" className="text-gray-300 hover:text-white px-3">My Bookshelf</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
