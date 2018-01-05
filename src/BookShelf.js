import React from 'react'
import './App.css'
import ListBooks from './ListBooks'


class BookShelf extends React.Component {
  render() {
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.sectionTitle}</h2>
        <div className="bookshelf-books">
          {this.props.books.map(book => {
            return <ListBooks book={book}/>
          })}

        </div>
      </div>
    )
  }
}

export default BookShelf
