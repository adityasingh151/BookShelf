// src/pages/SearchPage.js
import React from 'react';
import BookSearch from '../components/BookSearch';

const SearchPage = ({ onAdd }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Book Search</h1>
      <BookSearch onAdd={onAdd} />
      <button
        onClick={() => window.location.href = '/bookshelf'}
        className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors duration-200"
      >
        Go to My Bookshelf
      </button>
    </div>
  );
};

export default SearchPage;
