import React, { Component } from 'react';
// import logo from '../../logo.svg';
import './App.css';

import BookListAppTitle from '../../components/BookListAppTitle';
import BookFilterInput from '../../components/BookFilterInput';
import BookList from '../BookList';
import NewBookForm from '../NewBookForm';
import { getBooksFromFakeXHR, addBookToFakeXHR } from '../../lib/books.db.js';

class App extends Component {
  componentWillMount() {
    // initial state
    this.state = {
      books: [],
      bookFilterText: ''
    };

    getBooksFromFakeXHR()
      .then( books => {
        this.setState({
          books: books
        });
      }).catch( err => {
        console.log(err);
      });
  }

  handleFilterInputChange(e) {
    this.setState({
      bookFilterText: e.target.value
    });
  }

  addNewBook(title, author) {
    console.log(title + author);
  }

  render() {
    return (
      <div>
        <BookListAppTitle
          title="BOOKS"
        />

        <BookFilterInput
          filterInputChange={this.handleFilterInputChange.bind(this)}
        />

        <BookList
          filter={this.state.bookFilterText}
          books={this.state.books}
        />

        <NewBookForm
          addNewBook={this.addNewBook.bind(this)}
        />
      </div>
    );
  }
}

export default App;