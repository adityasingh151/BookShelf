// src/components/BookSearch.js
import React, { useState, useCallback } from 'react';
import axios from 'axios';
import BookCard from './BookCard';
import debounce from 'lodash/debounce';

const BookSearch = ({ onAdd }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const fetchBooks = async (query) => {
    if (query.length > 2) {
      const response = await axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`);
      setResults(response.data.docs);
    } else {
      setResults([]);
    }
  };

  const debouncedFetchBooks = useCallback(debounce(fetchBooks, 300), []);

  const handleSearch = (e) => {
    const query = e.target.value;
    setQuery(query);
    debouncedFetchBooks(query);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search for books..."
        className="w-full p-2 border rounded-lg mb-4"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {results.map((book) => (
          <BookCard key={book.key} book={book} onAdd={onAdd} />
        ))}
      </div>
    </div>
  );
};

export default BookSearch;
