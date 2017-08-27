import React, { Component } from 'react';

class NewBookForm extends Component {
  componentWillMount() {
    // initial state
    this.state = {
      title: '',
      author: ''
    };
  }

  handleChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  handleChangeAuthor(e) {
    this.setState({
      author: e.target.value
    });
  }

  handleSubmit() {
    this.props.addNewBook(title, author);
  }

  render() {
    return (
      <div className="form-container">
        <h1>NEW BOOK FORM</h1>
        <form>
          <label>Book Title:</label><br />
          <input
            type="text"
            name="title"
            placeholder="Book Title"
            onChange={this.handleChangeTitle.bind(this)}
          />
          <br />
          <label>Book Author:</label><br />
          <input
            type="text"
            name="author"
            placeholder="Book Author"
            onChange={this.handleChangeAuthor.bind(this)}
          />
          <br />
          <br />
          <button
            type="submit"
            onChange={this.handleSubmit.bind(this)}
          >Submit Book!</button>
        </form>
      </div>
    );
  }
}

export default NewBookForm;