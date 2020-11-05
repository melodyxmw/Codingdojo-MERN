import React from 'react'

const Hello = (props) =>{
    if(isNaN(props.id)){
        return <h1>The word is:{props.id}</h1>
    } else {
        return <h1>The numnber is :{props.id}</h1>
    }
}

export default Hello
