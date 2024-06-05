// src/pages/BookshelfPage.js
import React from 'react';
import Bookshelf from '../components/Bookshelf';

const BookshelfPage = ({ books }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">My Bookshelf</h1>
      <Bookshelf books={books} />
    </div>
  );
};

export default BookshelfPage;
