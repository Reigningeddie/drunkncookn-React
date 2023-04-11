import React from 'react';
import cont from './contact.module.css';

export default function Contact() {
  return (
    <>
      <body className={cont.contBody}>
        <container className={cont.container}>
          <h1 className={cont.title}>Get in touch</h1>
          <h2 className={cont.subTitle}>follow Drunkn'cookn on IG:&nbsp;<a href="https://www.instagram.com/drunkncookn/" className={cont.dTag}>@drunkncookn</a></h2>
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
                    <p className={cont.email}>Email: eaguilar92105@yahoo.com</p>
                    <p className={cont.ig}>Instagram: <a href="https://www.instagram.com/reigningeddie/" className={cont.href}>@reigningeddie</a></p>
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
                    <p className={cont.email}>Email: edward.g001@gmail.com</p>
                    <p className={cont.ig}>Instagram: <a href="https://www.instagram.com/theopticknerv/" className={cont.href}> @theopticknerv</a></p>
                  </section>
                </container>
            </card>

          </container>
        </container>
      </body>
    </>
  )
}