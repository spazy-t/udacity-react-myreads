import React from 'react'
import PropTypes from 'prop-types'

const Book = props => {
    const { bookDeets } = {...props}

    return(
        <div className='book'>
            <img src={bookDeets.imageLinks.smallThumbnail} alt='Book cover'/>
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