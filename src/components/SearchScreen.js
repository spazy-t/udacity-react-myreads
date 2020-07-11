import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * import components and api files
 */
import * as booksApi from '../BooksApi'
import BookContainer from './BookContainer'

class SearchScreen extends Component {
    state = {
        value: '',
        searchedBooks: []
    }
    //called when text entered into input, uses value to search books api then
    //sets state of current value and searched books to pass to books container
    handleChange = (evt) => {
        const targetValue = evt.target.value
        console.log('handleChange', targetValue)

        //TODO: if targetValue is nowt just setState to blanks, no search on booksApi
        
        booksApi.search(targetValue)
        .then((books) => {
            this.setState({
                value: targetValue,
                searchedBooks:  books !== undefined && books.length > 0 ? [...books] : []
            })
        })
        .catch(e => {
            console.log('error', e)
        })
    }

    render() {
        return(
            <div className='search-screen'>
                <h2>Search Screen</h2>
                <form>
                    <input
                        type='text'
                        placeholder='Search Books'
                        onChange={this.handleChange}
                        value={this.state.value} />
                </form>
                {this.state.searchedBooks.length !== 0 && (
                    <BookContainer searchedBooks={this.state.searchedBooks}/>
                )}
            </div>
        )
    }
}

SearchScreen.propTypes = {
    shelvedBooks: PropTypes.array
}

export default SearchScreen