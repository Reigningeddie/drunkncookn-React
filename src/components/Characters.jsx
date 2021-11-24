import React from 'react'
import chars from './characters.module.css'

const resetComponent = {
  padding: '300px',
  margin: '-448px',
  left: '151px',
  bottom: '830px'
}

export default function Characters() {
  return (
    <div style={resetComponent} className={chars.hello}>
      Hello Can you see me? can you see me? can you see me?
    </div>
  )
}
