// src/components/BookCard.js
import React, { useState } from 'react';

const BookCard = ({ book, onAddToBookshelf }) => {
  const [added, setAdded] = useState(false);

  const handleAddToShelf = (shelfType) => {
    onAddToBookshelf(book, shelfType);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="p-4 border rounded-lg shadow-md relative">
      <img
        src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
        alt={book.title}
        className="w-full h-48 object-cover mb-4 rounded-lg"
      />
      <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
      <p className="text-gray-600 mb-4">{book.author_name?.join(', ') || 'Unknown Author'}</p>
      <div className="flex space-x-2">
        <button
          onClick={() => handleAddToShelf('read')}
          className={`px-4 py-2 rounded ${added ? 'bg-red-500' : 'bg-blue-500'} text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500`}
        >
          {added ? 'Book Added!' : 'Add to Read'}
        </button>
        <button
          onClick={() => handleAddToShelf('currentlyReading')}
          className={`px-4 py-2 rounded ${added ? 'bg-red-500' : 'bg-blue-500'} text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500`}
        >
          {added ? 'Book Added!' : 'Add to Currently Reading'}
        </button>
        <button
          onClick={() => handleAddToShelf('wantToRead')}
          className={`px-4 py-2 rounded ${added ? 'bg-red-500' : 'bg-blue-500'} text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500`}
        >
          {added ? 'Book Added!' : 'Add to Want to Read'}
        </button>
      </div>
    </div>
  );
};

export default BookCard;
