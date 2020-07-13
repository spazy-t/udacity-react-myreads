import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Shelf from './Shelf'
import { Shelves } from '../globals'

const ShelfScreen = props => {
    return(
        <div>
            <header className="App-header">My Reads</header>
            {Shelves.map((shelf) => (
                <Shelf
                    key={shelf.name}
                    shelfDeets={shelf}
                    books={props.shelvedBooks}
                    updateBook={props.updateBook} />
            ))}
            <Link to={'/search'}>
                <button>Search</button>
            </Link>
        </div>
    )
}

ShelfScreen.propTypes = {
    shelvedBooks: PropTypes.array.isRequired
}

export default ShelfScreen