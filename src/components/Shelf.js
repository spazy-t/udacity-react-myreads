import React from 'react'
import PropTypes from 'prop-types'

import Book from './Book'

const Shelf = props => {
    const {books, shelfDeets} = props

    return(
        <div className='shelf'>
            <h3>{shelfDeets.title}</h3>
            <div className='shelf-books-container'>
                {
                    books.filter(book => book.shelf === shelfDeets.name)
                    .map(shelfBook => (
                        <Book key={shelfBook.id} bookDeets={shelfBook}/>
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