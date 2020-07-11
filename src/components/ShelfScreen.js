import React from 'react'
import PropTypes from 'prop-types'

import Shelf from './Shelf'

const ShelfScreen = props => {
    return(
        <div>
            <h2>Shelf Screen</h2>
            {props.shelfTypes.map((shelf) => (
                <Shelf key={shelf.name} shelfDeets={shelf} books={props.shelvedBooks}/>
            ))}
        </div>
    )
}

ShelfScreen.propTypes = {
    shelfTypes: PropTypes.array.isRequired,
    shelvedBooks: PropTypes.array.isRequired
}

export default ShelfScreen