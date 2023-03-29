import React from 'react'
import chars from './characters.module.css'
import defaultImg from '../images/default.png'
import anime from '../images/character-animation.gif'



export default function Characters() {
  return (
    <container className={`${chars.charsBody}`}>
      <main>
        <section>
        <div className={chars.container}>
          <div className={`${chars.grid} ${chars.gridColumns}`}>
            <div> 
              <h2 className={`${chars.fs700}${chars.uppercase} ${chars.text}`}>Character casting will be <span className= {chars.textPrimary}>Coming Soon</span></h2>
              <p>Display will be adjusted as the <strong>cast </strong>list begins to get updated</p>
              <div className={`${chars.flex} ${chars.largeGap}`}>
                <a href="www.google.com" className={`${chars.btn}${chars.btnPrimary}`}>Character </a> 
                <a href="www.google.com" className={`${chars.btn}${chars.btnAccent}${chars.uppercase}`}>Bio</a>
                </div>
              </div>
            </div>
          <div className={`${chars.grid} ${chars.featureGrid}`}>
            <a href="google.com" aria-label="left-corner bio"><img src={defaultImg} alt="" /></a>
            <a href="google.com" aria-label="mid-left bio"><img src={defaultImg} alt="" /></a>
            <a href="google.com" aria-label="mid-right bio"><img src={defaultImg} alt="" /></a>
            <a href="google.com" aria-label="right-corner bio"><img src={defaultImg} alt="" /></a>
            <a href="google.com" aria-label="bottom-left bio"><img src={defaultImg}  alt="" /></a>
            <a href="google.com" aria-label="main-character bio"><img src={anime}  alt="" /></a>
            <a href="google.com" aria-label="bottom-right bio"><img src={defaultImg}  alt="" /></a>
            </div>
          </div>
          </section>
      </main>
    </container>
  )
}
