import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

/**
 * import components and api files
 */
import * as booksApi from '../BooksApi'
import BookContainer from './BookContainer'

class SearchScreen extends Component {
    constructor(props) {
        super(props)
        //value is for the search input text
        this.state = {
            value: '',
            searchedBooks: []
        }

        this.delayTimer = ''
    }

    //called when text entered into input, uses value to search books api then
    //sets state of current value and searched books to pass to books container
    handleChange = (evt) => {
        const targetValue = evt.target.value

        //if search value is empty reset the state to blank and avoid POST error
        if(targetValue === '') {
            this.setState({
                value: '',
                searchedBooks: []
            })
            document.getElementById('no-books-found').setAttribute('style', 'display: none')
            return
        } else {
            this.setState({
                value: targetValue
            })
        }
        //use timer so it doesn't search on every single letter, waits for user to stop typing
        clearTimeout(this.delayTimer)
        this.delayTimer = setTimeout(() => {
            booksApi.search(this.state.value)
            .then((books) => {
                this.setState({
                    searchedBooks:  books !== undefined && books.length > 0 ? [...books] : []
                })
            })
            .then(() => {
                this.searchSuccessful()
            })
            .catch(e => {
                console.log('error', e)
            })
        }, 1000)
    }

    searchSuccessful = () => {
        const noBooksMsg = document.getElementById('no-books-found')

        if(this.state.value.length !== 0 && this.state.searchedBooks.length === 0) {
            noBooksMsg.setAttribute('style', 'display: block')
        } else {
            noBooksMsg.setAttribute('style', 'display: none')
        }
    }

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
                <div id='no-books-found'>No books found!</div>
            </div>
        )
    }
}

SearchScreen.propTypes = {
    shelvedBooks: PropTypes.array
}

export default SearchScreen