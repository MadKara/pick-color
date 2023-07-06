import colorNames from 'colornames';
import React from 'react'

const Input = ({ colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText }) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input
                autoFocus
                required
                type='text'
                placeholder='Add color'
                value={colorValue}
                onChange={(e) => {
                    setColorValue(e.target.value);
                    setHexValue(colorNames(e.target.value))
                }}
            />
            <button type='button'
                onClick={() => setIsDarkText(!isDarkText)}>Toggle text color</button>
        </form>
    )
}

export default Input