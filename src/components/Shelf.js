import React from 'react'
import PropTypes from 'prop-types'

import Book from './Book'

const Shelf = props => {
    //TODO: neaten up props references

    return(
        <div>
            <h3>{props.shelfDeets.title}</h3>
            {
                props.books.filter(book => book.shelf === props.shelfDeets.name)
                .map(shelfBook => (
                    <Book bookDeets={shelfBook}/>
                ))
            }
        </div>
    )
}

Shelf.propTypes = {
    shelfDeets: PropTypes.object.isRequired,
    books: PropTypes.array
}

export default Shelf