import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Control from './Control'

class Book extends Component {

    //TODO: clean up props referencing

    updateShelf = (newShelf) => {
        const updateDeets = {
            newShelf: newShelf,
            book: this.props.bookDeets
        }
        this.props.updateBook(updateDeets)
    }

    render() {
        return(
            <div className='book'>
                <img src={this.props.bookDeets.imageLinks.smallThumbnail} alt='Book cover' />
                <Control update={this.updateShelf} currentShelf={this.props.bookDeets.shelf} />
                <p>{this.props.bookDeets.title}</p>
                {this.props.bookDeets.authors !== undefined && (
                    <p>{this.props.bookDeets.authors[0]}</p>
                )}
            </div>
        )
    }
}

Book.propTypes = {
    bookDeets: PropTypes.object.isRequired
}

export default Book