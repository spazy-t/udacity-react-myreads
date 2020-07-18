import React, { Component } from 'react'

import { Shelves } from '../globals'
import droparrow from '../icons/droparrow.svg'

class Control extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            currentShelf: 'none'
        }
        //add extra none option to show it either doesn't belong to a shelf or to remove from a shelf
        this.shelves = [...Shelves, {title: 'None', name: 'none'}]
    }
    //if it has a shelf assigned already then re-initialise the state to it so it auto shows correct shelf in controll dropdown
    componentDidMount() {
        this.setState({
            currentShelf: this.props.currentShelf
        })
    }
    //when controll is clicked show selection dropdown for shelves
    showOptions = (evt) => {
        const targetButton = evt.target
        targetButton.nextSibling.classList.toggle('option-select')
    }
    //if an option for the selection is clicked / changed change shelf state by calling passed in function and close dropdown
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
                <button onClick={this.showOptions}>
                    <img src={droparrow} alt='drop down arrow' className='drop-arrow' />
                </button>
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