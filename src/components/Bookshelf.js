// src/components/Bookshelf.js
import React from 'react';

const Bookshelf = ({ books }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">My Bookshelf</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {books.map((book, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md">
            <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt={book.title} className="w-full h-48 object-cover mb-4" />
            <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
            <p className="text-gray-600">{book.author_name?.join(', ') || 'Unknown Author'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
