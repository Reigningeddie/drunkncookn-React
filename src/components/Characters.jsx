import React from 'react'
import './characters.css'

//* resets css back to zero
const resetComponent = {
  position: 'absolute',
  color: 'white',
  padding: '200px',
  margin: '-350px',
  left: '151px',
  bottom: '830px'
}


export default function Characters() {
  return (
    <div style={resetComponent}className="hello">
      Hello Can you see me? can you see me?
    </div>
  )
}
