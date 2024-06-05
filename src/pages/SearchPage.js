// src/pages/SearchPage.js
import React, { useState, useEffect } from 'react';
import BookCard from '../components/BookCard';
import axios from 'axios';

const SearchPage = ({ onAddToBookshelf }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const fetchBooks = async () => {
    if (query.length > 2) {
      try {
        const response = await axios.get(
          `https://openlibrary.org/search.json?q=${query}&limit=10&page=1`
        );
        setResults(response.data.docs);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchBooks();
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [query, fetchBooks]); // Add fetchBooks to the dependency array

  return (
    <div className="container mx-auto p-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for books..."
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {results.map((book) => (
          <BookCard
            key={book.key}
            book={book}
            onAddToBookshelf={onAddToBookshelf}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
