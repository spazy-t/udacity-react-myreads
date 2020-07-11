import React from 'react'
import PropTypes from 'prop-types'

const BookContainer = props => {
    return(
        <div>
            {console.log('BooksContainer', props.searchedBooks)}
        </div>
    )
}

BookContainer.propTypes = {
    searchedBooks: PropTypes.array.isRequired
}

export default BookContainer