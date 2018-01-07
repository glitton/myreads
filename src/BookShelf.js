import React from 'react';
import './App.css';
import ListBooks from './ListBooks';


class BookShelf extends React.Component {
  render() {
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.sectionTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.shelfStatus.map(book => {
              return <ListBooks
                        key={book.id}
                        book={book}
                        id={book.id}
                        changeShelf={this.props.changeShelf}
                      />
            })}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf;
