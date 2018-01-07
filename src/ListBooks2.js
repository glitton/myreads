import React from 'react';
import './App.css';
import Book from './Book2';


class ListBooks extends React.Component {
  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover"
              style={{
                width: 128, height: 193,
                backgroundImage: `url(${this.props.book.imageLinks.smallThumbnail})`
                }}>
            </div>
            <Book />
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{this.props.book.authors}</div>
        </div>
      </li>
    )
  }
}

export default ListBooks;
