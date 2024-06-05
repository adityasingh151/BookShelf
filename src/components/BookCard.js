import React, { useState } from 'react';

const BookCard = ({ book, onAdd }) => {
  const [buttonText, setButtonText] = useState('Add to Bookshelf');
  const [buttonColor, setButtonColor] = useState('bg-blue-500');

  const coverImage = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : 'https://via.placeholder.com/150';

  const handleAddClick = () => {
    onAdd(book);
    setButtonText('Book Added Successfully');
    setButtonColor('bg-red-500');
    setTimeout(() => {
      setButtonText('Add to Bookshelf');
      setButtonColor('bg-blue-500');
    }, 2000);
  };

  return (
    <div className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
      <img src={coverImage} alt={book.title} className="w-full h-48 object-cover mb-4 rounded" />
      <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
      <p className="text-gray-600 mb-4">{book.author_name?.join(', ') || 'Unknown Author'}</p>
      <button
        onClick={handleAddClick}
        className={`${buttonColor} text-white py-1 px-3 rounded transition-colors duration-200`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default BookCard;
