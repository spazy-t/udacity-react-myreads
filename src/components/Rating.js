import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * import other components
 */
import { ReactComponent as Star } from '../icons/star.svg'

class Rating extends Component {

    state = {
        rating: 0
    }

    componentDidMount() {
        this.setState({
            rating: this.props.rating
        })
    }
    //when the mouse rolls out of a star check the node to get releveant path to un-fill the correct stars
    revertStars = (evt) => {
        let targetElement
        
        if(evt.target.nodeName === 'path') {
            targetElement = evt.target.parentElement.parentElement
        } else if(evt.target.nodeName === 'svg') {
            targetElement = evt.target.parentElement
        }

        const stars = targetElement.children
        for (let star of stars) {
            star.removeAttribute('style')
        }
        //reset the stars fill so previous rating state is shown when mouse rolls out
        this.setState((prevState) => ({
            rating: prevState.rating
        }))
    }
    //on roll over check the target node name to get the correct path, therefore being able to fill the previous stars
    handleMouseEvent = (evt) => {

        let target
        //check what the target needs to be in order to fill the correct element
        if (evt.target.nodeName === 'path') {
            target = evt.target.parentElement
        } else if (evt.target.nodeName === 'svg') {
            target = evt.target
        }
        //setup the initial star and sibling elements
        let prevSibling = target.previousSibling
        let nextSibling = target.nextSibling

        target.setAttribute('style', 'fill: yellow')
        //whilst a next or previous sibling is valid fill or clear the fill
        while (prevSibling) {
            prevSibling.setAttribute('style', 'fill: yellow')
            prevSibling = prevSibling.previousSibling
        }

        while (nextSibling) {
            nextSibling.removeAttribute('style')
            nextSibling = nextSibling.nextSibling
        }
        //if the event is a click event grad the id and set as new rating
        if (evt.type === 'click') {
            this.setState({
                rating: Number(target.id) + 1
            })
        }
    }
    
    //create a chain of star components for the rating of the book
    starChain = () => {
        const currentRating = this.state.rating
        let fill = 'none'
        let starChain = []
        //create an explicit number of stars
        for (let i = 0; i < 5; i++) {
            if (i < currentRating) {
                fill = 'yellow'
            } else {
                fill = 'none'
            }

            starChain.push(
                <Star
                    key={i}
                    id={i}
                    fill={fill}
                    onClick={this.handleMouseEvent}
                    onMouseOver={this.handleMouseEvent}
                    onMouseOut={this.revertStars}
                />
            )
        }

        return starChain
    }

    render() {
        return (
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