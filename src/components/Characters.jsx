import React from 'react'
import chars from './characters.module.css'



export default function Characters() {
  return (
    <container className={`${chars.reset} ${chars.hello}`}>
      <main>
        <section>
          <h2 className={`${chars.uppercase} ${chars.textCompressed}`}>WITH XFAI, TRADING WILL <span className={chars.textPrimary}>NEVER</span> HAVE TO REMAIN CENTRALIZED</h2>
        </section>
      </main>
    </container>
  )
}
