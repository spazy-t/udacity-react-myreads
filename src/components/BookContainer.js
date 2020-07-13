import React from 'react'
import PropTypes from 'prop-types'

/**
 * import components
 */
import Book from './Book'

const BookContainer = props => {
    //cross reference searched and shelf books to add shelf property to releveant match in searched books array
    const crossReferencedBooks = props.searchedBooks.map(searchBook => {
        //see if a shelved book matches a book that's in the searched books array
        const matchedBook = props.shelfBooks.find(shelfBook => 
            shelfBook.id === searchBook.id    
        )
        //if there is a match set the matched searched array book to have the same shelf property
        if(matchedBook) {
            searchBook.shelf = matchedBook.shelf
        }
        //return the book to be looped over with mirrored shelf property if applicable
        return searchBook
    })

    return(
        <div>
            {crossReferencedBooks.map((book, index) => (
                <Book
                    key={index}
                    bookDeets={book}
                    updateBook={props.updateBook}
                />
            ))}
        </div>
    )
}

BookContainer.propTypes = {
    searchedBooks: PropTypes.array.isRequired,
    shelfBooks: PropTypes.array
}

export default BookContainer