import React, { Component } from 'react';
import './App.css';

/**Component and api imports */
import * as bookApi from './BooksApi'
import SearchScreen from './components/SearchScreen'
import ShelfScreen from './components/ShelfScreen'

class App extends Component {
  state = {
    shelvedBooks: []
  }

  componentDidMount() {
    bookApi.getAll()
    .then((books) => {
      if(books.length > 0) {
        this.setState({
          shelvedBooks: [...books]
        })
      }
    })
  }

  //clones the current shelved books and finds the book that matches the one who's shelf has changed
  //then replaces said books' shelf property to the new one and sets the new state to show this
  updateBook = (newDeets) => {
    let currentlyShelved = [...this.state.shelvedBooks]

    currentlyShelved = currentlyShelved.map(currentBook => {
      if(currentBook.id === newDeets.id) {
        currentBook.shelf = newDeets.newShelf
      }
      return currentBook
    })

    this.setState({
      shelvedBooks: [...currentlyShelved]
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">My Reads</header>
        <ShelfScreen shelvedBooks={this.state.shelvedBooks} updateBook={this.updateBook} />
        {this.state.shelvedBooks.length === 0 && (
          <SearchScreen />
        )}
      </div>
    )
  }
}

export default App;
