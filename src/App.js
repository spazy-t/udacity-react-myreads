import React, { Component } from 'react';
import './App.css';

/**Component and api imports */
//import bookApi from './BooksApi'
import SearchScreen from './components/SearchScreen'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">My Reads</header>
        <SearchScreen />
      </div>
    )
  }
}

export default App;
