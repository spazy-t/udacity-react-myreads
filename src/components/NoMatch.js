import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class NoMatch extends Component {

    //init hide footer for blank screen don't need to top button yet
    componentDidMount() {
        document.querySelector('footer').setAttribute('style', 'display: none')
        document.title = '404 Page Not Found'
    }

    //called when link to root is clicked, just in case footer is not visible
    normalise = () => {
        document.querySelector('footer').removeAttribute('style')
        document.title = 'My Reads'
    }

    render() {
        return(
            <div className='error-page'>
                <p className='error-text'>Oh! Erm... Something isn't right here. Lets go back shall we?</p>
                <Link to={'/'} className='to-homepage' onClick={this.normalise}>To Homepage</Link>
            </div>
        )
    }
}

export default NoMatch