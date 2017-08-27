import React from 'react';

const BookFilterInput = ({ filterInputChange }) => {
  return (
    <div className="book-filter">
      <label htmlFor="book-filter">FILTER BOOKS</label><br />
      <input id="book-filter" type="text" onChange={filterInputChange} />
    </div>
  );
};

export default BookFilterInput;