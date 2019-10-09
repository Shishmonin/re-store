import React from 'react';
import BookList from '../book-list';

const HomePage = () => {
  const books = [
      {
        id: 1,
        title: 'NNNNNN',
        author: 'NJNO Nopjkl'
      },
      {
        id: 2,
        title: 'MMMM',
        author: 'MEFOE MEWEFFE'
      },
    ];
  return (
    <BookList books={books} />
  );
};

export default HomePage;