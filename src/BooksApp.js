import React from 'react'
import './App.css'
import ListBooks from './ListBooks'
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks'


class BooksApp extends React.Component {

  state = {
    books: [],
    showSearchPage: false
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    console.log(BooksAPI.getAll())
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

                <ListBooks status={"Currently Reading"} books={this.state.books}/>
                <ListBooks status={"Want To Read"} books={this.state.books}/>
                <ListBooks status={"Read"} books={this.state.books}/>

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

export default BooksApp
