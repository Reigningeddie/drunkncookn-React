import React from 'react'
import chars from './characters.module.css'
import defaultImg from '../images/default.png'
import anime from '../images/character-animation.gif'



export default function Characters() {
  return (
    <container className={`${chars.reset} ${chars.hello}`}>
      <main>
        <section>
          <div className={chars.grid}>
            <div>
              <h2 className={`${chars.uppercase} ${chars.textCompressed}`}>WITH XFAI, TRADING WILL <span className= {chars.textPrimary}>NEVER</span> HAVE TO REMAIN CENTRALIZED</h2>
              <p>XFai develops tooling by graphing the DeFi space to build <strong>game changing</strong>products to benefit users</p>
              <div className={`${chars.flex} ${chars.largeGap}`}>
                <a href="google.com" className={`${chars.btn}${chars.btnPrimary}`}>WHITEPAPER </a> 
                <a href="google.com" className={`${chars.btn}${chars.btnAccent}${chars.uppercase}`}>WATCH VIDEO</a></div>
            </div>
          </div>
          <div className={`${chars.grid} ${chars.featureGrid}`}>
            <a href="google.com" aria-label="left-corner"><img src={defaultImg} alt="" /></a>
            <a href="google.com" aria-label="mid-left"><img src={defaultImg} alt="" /></a>
            <a href="google.com" aria-label="mid-right"><img src={defaultImg} alt="" /></a>
            <a href="google.com" aria-label="right-corner"><img src={defaultImg} alt="" /></a>
            <a href="google.com" aria-label="bottom-left"><img src={defaultImg} alt="" /></a>
            <a href="google.com" aria-label="main-character"><img src={defaultImg} alt="" /></a>
            <a href="google.com" aria-label="bottom-right"><img src={anime} alt="" /></a>
          </div>
        </section>
      </main>
    </container>
  )
}
