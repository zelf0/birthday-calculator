import React from 'react'

const Display = ({ages}) => {
    return (
        <div>
            <h1> {"You are " + ages.days + " days old"} </h1>
            <h1> {"You are " + ages.months + " months old"} </h1>
            <h1> {"You are " + ages.weeks + " weeks old"} </h1>
            <h1> {"You are " + ages.hours + " hours old"} </h1>
            <h1> {"You are " + ages.minutes + " minutes old"} </h1>
        </div>
    )
}

export default Display
