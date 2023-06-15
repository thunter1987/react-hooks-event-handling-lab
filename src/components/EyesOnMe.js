import React from 'react';

function EyesOnMe() {
  function focusEvent() {
    return console.log("Good!")
  }
  function blurEvent() {
    return console.log(`Hey! Eyes on me!`)
  }
  return (
    <>
    <button onFocus={focusEvent} onBlur={blurEvent}>Eyes on me</button>
    </>
  )
}

export default EyesOnMe
