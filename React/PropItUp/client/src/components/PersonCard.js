import React, { Component } from 'react'

export class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state ={
            currentAge:props.age
        };
    }

    addAge = () => {
        this.setState({currentAge: this.state.currentAge +1});
    }

    render() {
        const {firstName, lastName, age, hairColor} = this.props;
        return (
            <div>
                <h1>{lastName} {firstName}</h1>
                <p>Age: {this.state.currentAge}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.addAge}>Birthday Button for {firstName} {lastName}</button>
            </div>
        )
    }
}

export default PersonCard
