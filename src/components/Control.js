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

    showOptions = (evt) => {
        const targetButton = evt.target
        targetButton.nextSibling.classList.toggle('option-select')
    }

    handleChange = (evt) => {
        this.setState({
            currentShelf: evt.target.value
        })

        evt.target.classList.toggle('option-select')
        this.props.update(evt.target.value)
    }

    render() {
        return(
            <div className='book-control'>
                <button onClick={this.showOptions} />
                <select className='option-select' value={this.state.currentShelf} onChange={this.handleChange}>
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