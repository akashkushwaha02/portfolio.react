import React from 'react'

function Title ({ title,span }) {
    return (
        <div className="Title">
            <h3>{title}</h3>
            <span>{span}</span>
        </div>

    )
}

export default Title;