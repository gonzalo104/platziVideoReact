import React from 'react'

const Icon = (props) => {
    const {color, size } = props;
    return (
        <svg viewBox="0 0 32 32" width={size} height={size} fill={color}>
            {props.children}
        </svg>
    )
}

export default Icon 
