import React from 'react'

const Input = ({calculateAges}) => {
    const callFunction = (e) => {
        calculateAges(e.target.value);
    }
    return (
        
        <input type = "date" onChange = {callFunction}/>
    )
}

export default Input
