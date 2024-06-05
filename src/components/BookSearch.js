import React, { useState, useCallback, useEffect } from 'react';
import BookCard from './BookCard';
import axios from 'axios';

const BookSearch = ({ addToBookshelf }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const fetchBooks = useCallback(async () => {
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
  }, [query]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchBooks();
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [query, fetchBooks]);

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
            onAdd={addToBookshelf}
          />
        ))}
      </div>
    </div>
  );
};

export default BookSearch;
