// src/components/BookDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
  const { id } = useParams();

  // Fetch book details based on id
  // For simplicity, assuming book details are passed as props
  const book = {
    key: id,
    title: 'Book Title',
    author_name: ['Author One', 'Author Two'],
    cover_i: '1234567' // Replace with actual cover id
    // Add more details as needed
  };

  const coverImage = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : 'https://via.placeholder.com/150';

  return (
    <div className="container mx-auto p-4">
      <div className="flex mb-4">
        <img src={coverImage} alt={book.title} className="w-48 h-auto object-cover rounded-lg mr-8" />
        <div>
          <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
          <p className="text-gray-600 mb-4">{book.author_name?.join(', ') || 'Unknown Author'}</p>
          <p className="mb-4">Book Description or Additional Details</p>
          <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition-colors duration-200 mr-4">
            Add to Bookshelf
          </button>
          <button className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition-colors duration-200">
            Remove from Bookshelf
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
