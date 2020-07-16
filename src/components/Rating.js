import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * import other components
 */
import { ReactComponent as Star } from '../icons/star.svg'

class Rating extends Component {
    state = {
        ratingValue: 0
    }

    handleClick = (evt) => {
        evt.preventDefault()
        const target = evt.target.parentElement
        let prevSibling = target.previousSibling
        let nextSibling = target.nextSibling

        target.setAttribute('style', 'fill: yellow')

        while(prevSibling) {
            prevSibling.setAttribute('style', 'fill: yellow')
            prevSibling = prevSibling.previousSibling
        }

        while(nextSibling) {
            nextSibling.removeAttribute('style')
            nextSibling = nextSibling.nextSibling
        }
    }
    //TODO: instead of filling stars on click, use on click to pass back a new rating number then starchain matches up rating and stars
    //then the star component sets it's own fill
    //create a chain of star components for the rating of the book
    starChain = () => {
        let starChain = []

        for (let i = 0; i < 5; i++) {
            starChain.push(
                <Star key={i} id={i} onClick={this.handleClick} />
            )
        }

        return starChain
    }

    render() {
        return(
            <div className='rating-container'>
                {
                    this.starChain().map(star => (
                        star
                    ))
                }
            </div>
        )
    }
}

Rating.propTypes = {
    rating: PropTypes.number
}

export default Rating