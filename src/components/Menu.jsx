import React from 'react';
import menu from './menu.module.css'

export default function Menu() {
  return (
    <body className={menu.menuBody}>
      <container className={menu.container}>
        <h1 className={menu.title}>Our Menu</h1>
        <list className={menu.menu}>

          <button>&larr;</button>
          <p className={menu.card}>description</p>
          <button>&rarr;</button>
        </list>
      </container>
    </body>
  )
}
