import React from 'react'
import PropTypes from 'prop-types'

const Book = props => {
    const { bookDeets } = {...props}

    return(
        <div>
            <img src={bookDeets.imageLinks.thumbNail} alt='Book cover'/>
            <p>{bookDeets.title}</p>
            {bookDeets.authors !== undefined && (
                <p>{bookDeets.authors[0]}</p>
            )}
        </div>
    )
}

Book.propTypes = {
    bookDeets: PropTypes.object.isRequired
}

export default Book