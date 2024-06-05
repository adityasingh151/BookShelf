// src/components/Bookshelf.js
import React from 'react';

const Bookshelf = ({ books, onRemove }) => {
  const handleRemove = (book) => {
    onRemove(book);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">My Bookshelf</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {books.map((book, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-lg relative bg-white">
            <img
              src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
              alt={book.title}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
            <p className="text-gray-600 mb-4">{book.author_name?.join(', ') || 'Unknown Author'}</p>
            <button
              onClick={() => handleRemove(book)}
              className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition duration-200"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
