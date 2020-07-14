import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

/**
 * import components and api files
 */
import * as booksApi from '../BooksApi'
import BookContainer from './BookContainer'

class SearchScreen extends Component {
    //value is for the search input text
    state = {
        value: '',
        searchedBooks: []
    }

    //called when text entered into input, uses value to search books api then
    //sets state of current value and searched books to pass to books container
    handleChange = (evt) => {
        const targetValue = evt.target.value
        console.log('handleChange', targetValue)

        //if search value is empty reset the state to blank and avoid POST error
        if(targetValue === '') {
            this.setState({
                value: '',
                searchedBooks: []
            })
            return
        }
        
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
    //TODO: a way of timeout the input so it's not one character at a time for search i.e. slow!
    render() {
        return(
            <div className='search-screen'>
                <div className='search-bar'>
                    <Link to={'/'} id='back-btn'>Exit</Link>
                    <form id='search-input'>
                        <input
                            type='text'
                            placeholder='Search Books'
                            onChange={this.handleChange}
                            value={this.state.value}
                        />
                    </form>
                </div>
                {this.state.searchedBooks.length !== 0 && (
                    <BookContainer 
                        searchedBooks={this.state.searchedBooks}
                        updateBook={this.props.updateBook}
                        shelfBooks={this.props.shelvedBooks}
                    />
                )}
            </div>
        )
    }
}

SearchScreen.propTypes = {
    shelvedBooks: PropTypes.array
}

export default SearchScreen