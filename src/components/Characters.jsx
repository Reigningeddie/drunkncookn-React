import React from 'react'
import chars from './characters.module.css'



export default function Characters() {
  return (
    <container className={`${chars.reset} ${chars.hello}`}>
      <main>
        <section>
          <div className="grid">
            <div>
              <h2 className={`${chars.uppercase} ${chars.textCompressed}`}>WITH XFAI, TRADING WILL <span className= {chars.textPrimary}>NEVER</span> HAVE TO REMAIN CENTRALIZED</h2>
              <p>XFai develops tooling by graphing the DeFi space to build <strong>game changing</strong>products to benefit users</p><div className={`${chars.flexLarge}`}>
            <a href="google.com" className={`${chars.btnPrimary}`}>WHITEPAPER </a> 
            <a href="google.com" className={`${chars.btnAccentUppercase}`}>WATCH VIDEO</a></div>
            </div>
            </div>
        </section>
      </main>
    </container>
  )
}
