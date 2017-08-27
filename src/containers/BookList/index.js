import React, { Component } from 'react';
import Book from '../../components/Book';

class BookList extends Component {
  render() {
    return (
      <div className="booklist-container">
        <h1>BOOK LIST</h1>
        <ul>
          {
            this.props.books
            .filter(book => {
              if(this.props.filter) {
                return book.author.toLowerCase().indexOf(this.props.filter.toLowerCase()) > -1 ||
                book.title.toLowerCase().indexOf(this.props.filter.toLowerCase()) > -1;
              } else {
                return book;
              }
            })
            .map(book => {
              return (
                <Book
                  title={book.title}
                  author={book.author}
                  key={book._id}
                />
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default BookList;