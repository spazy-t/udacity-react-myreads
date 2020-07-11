import React, { Component } from 'react';
import './App.css';

/**Component and api imports */
import * as bookApi from './BooksApi'
import SearchScreen from './components/SearchScreen'
import ShelfScreen from './components/ShelfScreen'

class App extends Component {
  state = {
    shelvedBooks: [],
    shelves: [
      {title: 'Want To Read', name: 'wantToRead'},
      {title: 'Currently Reading', name: 'currentlyReading'},
      {title: 'Read', name: 'read'}
    ]
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

  render() {
    return (
      <div className="App">
        <header className="App-header">My Reads</header>
        <ShelfScreen shelfTypes={this.state.shelves} shelvedBooks={this.state.shelvedBooks}/>
        <SearchScreen />
      </div>
    )
  }
}

export default App;
