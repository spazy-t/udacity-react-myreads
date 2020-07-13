import React, { Component } from 'react'

import { Shelves } from '../globals'

class Control extends Component {
    state = {
        currentShelf: 'read'
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
                    {Shelves.map(shelf => (
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