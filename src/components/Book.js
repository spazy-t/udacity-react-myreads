import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Control from './Control'

class Book extends Component {

    updateShelf = (newShelf) => {
        const updateDeets = {
            newShelf: newShelf,
            book: this.props.bookDeets
        }
        
        this.props.updateBook(updateDeets)
    }

    render() {
        const { imageLinks, shelf, title, authors } = this.props.bookDeets

        return(
            <div className='book'>
                <img
                    src={imageLinks.smallThumbnail}
                    alt='Book cover'
                />
                <Control update={this.updateShelf} currentShelf={shelf} />
                <p id='title'>{title}</p>
                {authors !== undefined && (
                    authors.map(author => (
                        <p id='author'>{author}</p>
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