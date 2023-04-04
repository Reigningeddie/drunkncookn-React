import React from 'react';
import cont from './contact.module.css';

export default function Contact() {
  return (
    <>
      <body className={cont.contBody}>
        <container className={cont.container}>
          <h1 className={cont.title}>Get in touch</h1>
          <h2 className={cont.subTitle}>follow Drunkn'cookn on IG:&nbsp;<a href="https://www.instagram.com/drunkncookn/" className={cont.href}>@drunkncookn</a></h2>
          <container className={cont.flex}>

            <card className={cont.card}>
              <p className={cont.pic}>Picture</p>
              <p className={cont.name}>Eddie</p>
              <p className={cont.roles}>Roles:</p>
              <h3 className={cont.social}>Socials</h3>
              <p className={cont.ig}>Instagram</p>
            </card>

            <card className={cont.card}>
              <p className={cont.pic}>Picture</p>
              <p className={cont.name}>Edward</p>
              <p className={cont.roles}>Roles:</p>
              <h3 className={cont.social}>Socials</h3>
              <p className={cont.ig}>Instagram</p>
            </card>

          </container>
        </container>
      </body>
    </>
  )
}