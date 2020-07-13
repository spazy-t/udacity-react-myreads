import React from 'react'
import PropTypes from 'prop-types'

import Book from './Book'

const Shelf = props => {
    const {books, shelfDeets} = props

    return(
        <div className='shelf'>
            <h2>{shelfDeets.title}</h2>
            <div className='book-container' id='shelf-books-container'>
                {
                    books.filter(book => book.shelf === shelfDeets.name)
                    .map(shelfBook => (
                        <Book
                            key={shelfBook.id}
                            bookDeets={shelfBook}
                            updateBook={props.updateBook}
                        />
                    ))
                }
            </div>
        </div>
    )
}

Shelf.propTypes = {
    shelfDeets: PropTypes.object.isRequired,
    books: PropTypes.array
}

export default Shelf