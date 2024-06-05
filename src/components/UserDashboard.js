// src/components/UserDashboard.js
import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const [bookshelf, setBookshelf] = useState({
    read: [],
    wantToRead: [],
    currentlyReading: []
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookshelf = async () => {
      if (auth.currentUser) {
        const docRef = doc(db, 'users', auth.currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setBookshelf(docSnap.data().bookshelf || { read: [], wantToRead: [], currentlyReading: [] });
        }
      } else {
        navigate('/login');
      }
    };

    fetchBookshelf();
  }, [navigate]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-8 text-center">My Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div className="bg-gradient-to-r from-green-400 to-green-600 text-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold mb-6">Books I Have Read</h3>
          <ul className="list-disc list-inside">
            {bookshelf.read.map((book) => (
              <li key={book.key} className="mb-4">
                <span className="font-semibold">{book.title}</span> by {book.author_name?.join(', ') || 'Unknown Author'}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold mb-6">Books I Am Currently Reading</h3>
          <ul className="list-disc list-inside">
            {bookshelf.currentlyReading.map((book) => (
              <li key={book.key} className="mb-4">
                <span className="font-semibold">{book.title}</span> by {book.author_name?.join(', ') || 'Unknown Author'}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gradient-to-r from-purple-400 to-purple-600 text-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold mb-6">Books I Want to Read</h3>
          <ul className="list-disc list-inside">
            {bookshelf.wantToRead.map((book) => (
              <li key={book.key} className="mb-4">
                <span className="font-semibold">{book.title}</span> by {book.author_name?.join(', ') || 'Unknown Author'}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
