import React from 'react'
import PropTypes from 'prop-types'

/**
 * import components
 */
import Book from './Book'

const BookContainer = props => {
    return(
        <div>
            {props.searchedBooks.map((book, index) => (
                <Book key={index} bookDeets={book} />
            ))}
        </div>
    )
}

BookContainer.propTypes = {
    searchedBooks: PropTypes.array.isRequired
}

export default BookContainer