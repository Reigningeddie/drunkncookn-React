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
                <p className={cont.id}>Drunkn'Cookn Identification Card</p>
                <container className={cont.cContainer}>
                  <section className={cont.section}>
                    <p className={cont.pic}>Picture</p>
                  </section>
                  <section className={cont.section}>
                    <p className={cont.name}>Eduardo</p>
                    <p className={cont.roles}>Roles:</p>
                    <h3 className={cont.social}>Socials</h3>
                    <p className={cont.ig}>Instagram</p>
                  </section>
                </container>
            </card>

            <card className={cont.card}>
                <p className={cont.id}>Drunkn'Cookn Identification Card</p>
                <container className={cont.cContainer}>
                  <section className={cont.section}>
                    <p className={cont.pic}>Picture</p>
                  </section>
                  <section className={cont.section}>
                    <p className={cont.name}>Edward</p>
                    <p className={cont.roles}>Roles:</p>
                    <h3 className={cont.social}>Socials</h3>
                    <p className={cont.ig}>Instagram</p>
                  </section>
                </container>
            </card>

          </container>
        </container>
      </body>
    </>
  )
}