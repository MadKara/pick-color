import React from 'react'

const Square = ({ colorValue, hexValue, isDarkText }) => {
    return (
        <div className='square'
            style={{
                backgroundColor: colorValue,
                color: isDarkText ? 'black' : 'white'
            }}>
            <p>{colorValue ? colorValue : 'Empty'}</p>
            <p>{hexValue ? hexValue : null}</p>
        </div>
    )
}

Square.defaultProps = {
    colorValue: 'Empty color value'
}

export default Square