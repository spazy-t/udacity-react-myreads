import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Control from './Control'
import Rating from './Rating'

class Book extends Component {

    /*updateRating = (newRating) => {
        console.log('update rating', newRating)
        const currentBook = this.props.bookDeets
        currentBook.rating = newRating
        const updateDeets = {
            shelf: currentBook.shelf,
            book: currentBook
        }

        this.props.updateBook(updateDeets)
    }*/

    updateShelf = (newShelf) => {
        const updateDeets = {
            shelf: newShelf,
            book: this.props.bookDeets
        }
        
        this.props.updateBook(updateDeets)
    }

    render() {
        const { imageLinks, shelf, title, authors, averageRating } = this.props.bookDeets

        return(
            <div className='book'>
                <img
                    src={imageLinks.smallThumbnail}
                    alt='Book cover'
                    className='book-img'
                />
                <Control update={this.updateShelf} currentShelf={shelf} />

                {averageRating !== undefined &&(
                    <Rating rating={averageRating} />
                )}
                
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