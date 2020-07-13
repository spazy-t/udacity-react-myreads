import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'

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
    bookApi.update(newDeets.book, newDeets.newShelf)
    .then(() =>
      bookApi.getAll()
    )
    .then(books => {
      this.setState({
        shelvedBooks: [...books]
      })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">My Reads</header>
        <Route exact path='/' render={() => (
            <ShelfScreen shelvedBooks={this.state.shelvedBooks} updateBook={this.updateBook} />
          )}
        />
        <Route path={'/search'} render={() => (
            <SearchScreen updateBook={this.updateBook} />
          )}
        />
      </div>
    )
  }
}

export default App;
