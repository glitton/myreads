import React from 'react';
import './App.css';
<<<<<<< HEAD
import ListBooks from './ListBooks2';
import Book from './Book2';


class BookShelf extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      shelf: ''
    };
  }
=======
import ListBooks from './ListBooks';


class BookShelf extends React.Component {
>>>>>>> b467f500283d374cba4b6769fe91b2a6a282c59d

  render() {
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.sectionTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
<<<<<<< HEAD
            {this.props.shelfStatus.map(book => {
              return (
                <div>
                  <ListBooks key={book.id} book={book}/>
                  <Book shelf={this.state.shelf}/>
                </div>
              )
=======
            {this.props.books.map(book => {
              return <ListBooks
                        key={book.id}
                        book={book}
                      />
>>>>>>> b467f500283d374cba4b6769fe91b2a6a282c59d
            })}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf;
