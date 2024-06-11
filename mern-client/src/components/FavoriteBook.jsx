import React, { useEffect, useState } from 'react';
import BookCards from './BookCards';

const BestBook = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://book-task-back.onrender.com/all-books')
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.slice(0,6));
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
        setError('Failed to fetch books');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <BookCards books={books} headline="Best Books" />
    </div>
  );
}

export default BestBook;
