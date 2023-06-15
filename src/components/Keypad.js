import React from 'react';

function Keypad() {
    function handleInput() {
        return console.log("Entering password...")
    }
    return (
        <div>
            <input type="password" onChangeCapture={ handleInput } /> 
        </div>)
}
export default Keypad