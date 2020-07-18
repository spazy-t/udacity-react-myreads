import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Control from './Control'
import Rating from './Rating'

class Book extends Component {
    //function called by control component when a new shelf is selected in control dropdown menu
    updateShelf = (newShelf) => {
        const updateDeets = {
            shelf: newShelf,
            book: this.props.bookDeets
        }
        //function passed in to update book via books api / server
        this.props.updateBook(updateDeets)
    }
    //assign relevant props for easier access. If there are no authors then don't show them, otherwise, show each author
    //also assign a control and ratings component to this book component
    render() {
        const {imageLinks, shelf, title, authors, averageRating} = this.props.bookDeets

        return(
            <div className='book'>
                <img
                    src={imageLinks.smallThumbnail}
                    alt='Book cover'
                    className='book-img'
                />
                <Control update={this.updateShelf} currentShelf={shelf} />
                <Rating rating={averageRating} />
                <p id='title'>{title}</p>
                {authors !== undefined && (
                    authors.map(author => (
                        <p key={author} id='author'>{author}</p>
                    ))
                )}
            </div>
        )
    }
}

Book.propTypes = {
    bookDeets: PropTypes.object.isRequired,
    updateBook: PropTypes.func.isRequired
}

export default Book