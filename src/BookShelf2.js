import React from 'react';
import './App.css';
import ListBooks from './ListBooks2';
import Book from './Book2';


class BookShelf extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      shelf: ''
    };
  }


class BookShelf extends React.Component {

  render() {
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.sectionTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.shelfStatus.map(book => {
              return (
                <div>
                  <ListBooks key={book.id} book={book}/>
                  <Book shelf={this.state.shelf}/>
                </div>
              )
            {this.props.books.map(book => {
              return <ListBooks
                        key={book.id}
                        book={book}
                      />
            })}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf;
