import React from 'react';
import cont from './contact.module.css';

export default function Contact() {
  return (
    <>
      <main className={cont.contBody}>
        <div className={cont.container}>
          <h1 className={cont.title}>Get in touch</h1>
          <h2 className={cont.subTitle}>follow Drunkn'cookn on IG:&nbsp;<a href="https://www.instagram.com/drunkncookn/" className={cont.dTag}>@drunkncookn</a></h2>
          <div className={cont.flex}>

            <section className={cont.card}>
                <p className={cont.id}>Drunkn'Cookn Identification Card</p>
                <div className={cont.cContainer}>
                  <div className={cont.section}>
                    <p className={cont.pic}>Picture</p>
                  </div>
                  <section className={cont.section}>
                    <p className={cont.name}>Eduardo</p>
                    <p className={cont.roles}>Roles:</p>
                    <h3 className={cont.social}>Socials</h3>
                    <p className={cont.email}>Email: eaguilar92105@gmail.com</p>
                    <p className={cont.ig}>Instagram: <a href="https://www.instagram.com/reigningeddie/" className={cont.href}>@reigningeddie</a></p>
                  </section>
                </div>
            </section>

            <section className={cont.card}>
                <p className={cont.id}>Drunkn'Cookn Identification Card</p>
                <div className={cont.cContainer}>
                  <div className={cont.section}>
                    <p className={cont.pic}>Picture</p>
                  </div>
                  <section className={cont.section}>
                    <p className={cont.name}>Edward</p>
                    <p className={cont.roles}>Roles:</p>
                    <h3 className={cont.social}>Socials</h3>
                    <p className={cont.email}>Email: edward.g001@gmail.com</p>
                    <p className={cont.ig}>Instagram: <a href="https://www.instagram.com/theopticknerv/" className={cont.href}> @theopticknerv</a></p>
                  </section>
                </div>
            </section>

          </div>
        </div>
      </main>
    </>
  )
}