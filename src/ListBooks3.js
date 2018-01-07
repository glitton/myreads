import React from 'react';
import './App.css';


class ListBooks extends React.Component {

  handleChange(e) {
    const chooseShelf = e.target.value;
    this.props.changeShelf(this.props.id, chooseShelf);
  }

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
            <div className="book-shelf-changer">
              <select onChange={this.handleChange.bind(this)}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{this.props.book.authors}</div>
        </div>
      </li>
    )
  }
}

export default ListBooks;
