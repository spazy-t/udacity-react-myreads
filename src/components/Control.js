import React, { Component } from 'react'

import { Shelves } from '../globals'

class Control extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentShelf: 'none'
        }
        //add extra none option to show it either doesn't belong to a shelf or to remove from a shelf
        this.shelves = [...Shelves, {title: 'None', name: 'none'}]
    }

    componentDidMount() {
        this.setState({
            currentShelf: this.props.currentShelf
        })
    }

    handleChange = (evt) => {
        this.setState({
            currentShelf: evt.target.value
        })

        this.props.update(evt.target.value)
    }

    render() {
        return(
            <div>
                <select value={this.state.currentShelf} onChange={this.handleChange}>
                    {this.shelves.map(shelf => (
                        <option
                            key={shelf.name}
                            value={shelf.name}>
                                {shelf.title}
                        </option>
                    ))}
                </select>
            </div>
        )
    }
}

export default Control