import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchPage from './pages/SearchPage';
import Bookshelf from './components/Bookshelf'; // Import Bookshelf component directly

const App = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(storedBooks);
  }, []);

  const addToBookshelf = (book) => {
    const updatedBookshelf = [...bookshelf, book];
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  const removeFromBookshelf = (bookToRemove) => {
    const updatedBookshelf = bookshelf.filter((book) => book.key !== bookToRemove.key);
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow container mx-auto p-4">
        <Routes>
          <Route path="/" element={<SearchPage onAdd={addToBookshelf} />} />
          <Route
            path="/bookshelf"
            element={<Bookshelf books={bookshelf} onRemove={removeFromBookshelf} />}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
