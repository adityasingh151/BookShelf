// src/components/BookCard.js
import React from 'react';

const BookCard = ({ book, onAdd }) => {
  const coverImage = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : 'https://via.placeholder.com/150';

  return (
    <div className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
      <img src={coverImage} alt={book.title} className="w-full h-48 object-cover mb-4" />
      <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
      <p className="text-gray-600 mb-4">{book.author_name?.join(', ') || 'Unknown Author'}</p>
      <button
        onClick={() => onAdd(book)}
        className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition-colors duration-200"
      >
        Add to Bookshelf
      </button>
    </div>
  );
};

export default BookCard;
