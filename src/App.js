import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchPage from './pages/SearchPage';
import UserDashboard from './components/UserDashboard';
import Login from './components/Login';
import Register from './components/Register';
import { auth, db } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';

const App = () => {
  const [bookshelf, setBookshelf] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setBookshelf(docSnap.data().bookshelf || []);
        } else {
          await setDoc(docRef, { bookshelf: [] });
        }
      } else {
        setUser(null);
        setBookshelf([]);
      }
    });
    return () => unsubscribe();
  }, []);

  const addToBookshelf = async (book, shelfType) => {
    if (!user) return;

    const updatedBookshelf = {
      ...bookshelf,
      [shelfType]: [...(bookshelf[shelfType] || []), book]
    };

    setBookshelf(updatedBookshelf);

    const docRef = doc(db, 'users', user.uid);
    await setDoc(docRef, { bookshelf: updatedBookshelf }, { merge: true });
  };

  const handleLogout = () => {
    signOut(auth);
    navigate('/');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar user={user} onLogout={handleLogout} />
      <div className="flex-grow container mx-auto p-4">
        <Routes>
          <Route path="/" element={<SearchPage onAddToBookshelf={addToBookshelf} />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
