import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-lg font-bold">Bookshelf App</Link>
        <div className="flex items-center">
          <Link to="/" className="mr-4">Home</Link>
          {user ? (
            <>
              <Link to="/dashboard" className="mr-4">Dashboard</Link>
              <button onClick={onLogout} className="bg-red-500 px-4 py-2 rounded-md">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="mr-4">Login</Link>
              <Link to="/register" className="mr-4 px-4 py-2 rounded-md border border-gray-300">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
