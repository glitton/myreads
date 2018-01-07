import React from 'react';
import './App.css';
import BookShelf from './BookShelf2';
import * as BooksAPI from './BooksAPI';
import SearchBooks from './SearchBooks';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showSearchPage: false
    };
    this.shelfStatus = this.shelfStatus.bind(this);
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    })
  }

  shelfStatus(shelf) {
    return this.state.books.filter(book => book.shelf === shelf);
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
                           books={this.state.books}
                           shelfStatus={this.shelfStatus("currentlyReading")}/>
                <BookShelf sectionTitle={"Want To Read"}
                           books={this.state.books}
                           shelfStatus={this.shelfStatus("wantToRead")}/>
                <BookShelf sectionTitle={"Read"}
                           books={this.state.books}
                           shelfStatus={this.shelfStatus("read")}/>
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
