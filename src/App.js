import React from 'react';
import './App.css';
import BookShelf from './BookShelf';
import * as BooksAPI from './BooksAPI';
import SearchBooks from './SearchBooks';


class App extends React.Component {
  state = {
    books: [],
    showSearchPage: false
  };

  componentWillMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    })
  }

  changeShelf(id, value) {
    const index = this.state.books.findIndex((book) => book.id === id);
    let book = this.state.books[index];
    book.shelf = value;
    let books = this.state.books;
    books[index] = book;
    this.setState({ books });
  }

  shelfBooks(shelf){
    return this.state.books.filter((book) => book.shelf === shelf);
  }

  render() {
    console.log(this.state.books);
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks />
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            <div className="list-books-content">
              <div>
                <BookShelf sectionTitle={"Currently Reading"}
                           books={this.shelfBooks("currentlyReading")}
                           changeShelf = {this.changeShelf.bind(this)}/>
                <BookShelf sectionTitle={"Want To Read"}
                           books={this.shelfBooks("wantToRead")}
                           changeShelf = {this.changeShelf.bind(this)}/>
                <BookShelf sectionTitle={"Read"}
                           books={this.shelfBooks("read")}
                           changeShelf = {this.changeShelf.bind(this)}/>
              </div>
            </div>

            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default App;
