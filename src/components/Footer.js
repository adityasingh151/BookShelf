// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 mt-8">
      <div className="container mx-auto text-center text-gray-300">
        Made with <text className='text-red-400'>love</text> by 
        <a href="https://github.com/adityasingh151" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline ml-1">
          Aditya
        </a>
      </div>
    </footer>
  );
};

export default Footer;
