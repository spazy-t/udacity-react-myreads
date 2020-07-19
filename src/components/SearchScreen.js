import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

/**
 * import components and api files
 */
import * as booksApi from '../BooksApi'
import BookContainer from './BookContainer'
/*Taken from udacity react myreads starter code 16/7/2020
https://github.com/udacity/reactnd-project-myreads-starter/blob/master/src/icons*/
import backarrow from '../icons/backarrow.svg'

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
    //init hide footer for blank screen don't need to top button yet
    componentDidMount() {
        document.querySelector('footer').setAttribute('style', 'display: none')
    }

    //called when link to root is clicked, just in case footer is not visible
    showFooter = () => {
        document.querySelector('footer').removeAttribute('style')
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
            document.querySelector('footer').setAttribute('style', 'display: none')

            clearTimeout(this.delayTimer)
            return
        } else {
            this.setState({
                value: targetValue
            })
        }
        //use timer so it doesn't search on every single letter, waits for user to stop typing
        //if books are found then save to an aary to pass into books container for comparison
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
    //called when promise resolves from books api search
    searchSuccessful = () => {
        const noBooksMsg = document.getElementById('no-books-found')
        const footer = document.querySelector('footer')
        //if there has been a search but no results, show text saying so and hide footer
        //else there are books on screen so show footer and hide no books text
        if(this.state.value.length !== 0 && this.state.searchedBooks.length === 0) {
            noBooksMsg.setAttribute('style', 'display: block')
            footer.setAttribute('style', 'display: none')
        } else {
            noBooksMsg.removeAttribute('style')
            footer.removeAttribute('style')
        }
    }
    //show search input and only the books container if there are books to show
    render() {
        return(
            <div className='search-screen'>
                <div className='search-bar'>
                    <Link to={'/'} id='back-btn' onClick={this.showFooter}>
                        <img src={backarrow} alt='back arrow' className='back-button' />
                    </Link>
                    <form id='search-input'>
                        <input
                            autoFocus
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