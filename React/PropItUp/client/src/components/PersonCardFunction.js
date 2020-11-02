import React from 'react'
import PropTypes from 'prop-types'

const PersonCardFunction = props => {
    return (
        <div>
            <h1>{ props.lastName }, { props.firstName }</h1>
            <p>Age: { props.age }</p>
            <p>Hair Color: { props.hairColor }</p>

        </div>
    )
}

PersonCardFunction.propTypes = {

}

export default PersonCardFunction
