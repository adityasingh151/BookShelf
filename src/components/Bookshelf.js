import React from 'react';

const Bookshelf = ({ books, onRemove, changeStatus }) => {
  const handleRemove = (book) => {
    onRemove(book);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">My Bookshelf</h2>

      {['read', 'wantToRead', 'currentlyReading'].map((status) => (
        <div key={status}>
          <h3 className="text-xl font-semibold mb-2 capitalize">{status.replace(/([A-Z])/g, ' $1')}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {books[status]?.map((book, index) => (
              <div key={index} className="p-4 border rounded-lg shadow-md relative">
                <button
                  onClick={() => handleRemove(book)}
                  className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Remove
                </button>
                <img
                  src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                  alt={book.title}
                  className="w-full h-48 object-cover mb-4 rounded-lg"
                />
                <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
                <p className="text-gray-600">{book.author_name?.join(', ') || 'Unknown Author'}</p>
                <div className="mt-2">
                  <label htmlFor="status" className="block text-sm font-medium text-gray-700">Change Status</label>
                  <select
                    id="status"
                    name="status"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    value={status}
                    onChange={(e) => changeStatus(book, e.target.value)}
                  >
                    <option value="read">Read</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="currentlyReading">Currently Reading</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bookshelf;
