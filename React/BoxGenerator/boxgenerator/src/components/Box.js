import React, { Component } from 'react'

const Box = props => {
    const {color,height, width} = props;
    
        return (
            <div style={{
                
                backgroundColor: color,
                width: width,
                height: height,
                marginLeft: 10,
            }}>
                
            </div>
        )
    
}

export default Box;
