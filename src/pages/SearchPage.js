// src/pages/SearchPage.js
import React, { useState, useEffect } from 'react';
import BookCard from '../components/BookCard';

const SearchPage = ({ onAdd }) => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setSearchResults(data.docs);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // To prevent unnecessary API calls on initial render
    if (query.trim() !== '') {
      fetchBooks();
    } else {
      setSearchResults([]);
    }
  }, [query]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setSearchResults(data.docs);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Book Search</h1>
        <div className="flex items-center mb-4">
          <input
            type="text"
            value={query}
            onChange={handleChange}
            className="px-4 py-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
            placeholder="Enter book name..."
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2"
          >
            Search
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {searchResults.map((book) => (
          <BookCard key={book.key} book={book} onAdd={onAdd} />
        ))}
      </div>
      <div className="mt-8">
        <button
          onClick={() => window.location.href = '/bookshelf'}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Go to My Bookshelf
        </button>
      </div>
    </div>
  );
};

export default SearchPage;
