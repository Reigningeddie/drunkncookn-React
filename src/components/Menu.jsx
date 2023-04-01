import React from 'react';
import menu from './menu.module.css'

export default function Menu() {
  return (
    <body className={menu.menuBody}>
      <container className={menu.container}>
        <h1 className={menu.title}>Our Menu</h1>
        <container className={menu.menu}>

          <button>&larr;</button>
          <card className={menu.card}>
            <p className={menu.pic}>Picture</p>
            <p className={menu.des}>Description</p>
            <p className={menu.price}>$15</p>
          </card>
          <button>&rarr;</button>

        </container>
      </container>
    </body>
  )
}
