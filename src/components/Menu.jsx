import React from 'react';
import menu from './menu.module.css'

export default function Menu() {
  return (
    <body className={menu.menuBody}>
      <container className={menu.container}>
        <h1 className={menu.title}>Our Menu</h1>
        <list className={menu.grid}>

          <h3 className={menu.item}>pic</h3>
          <p className={menu.cat1}>description</p>
          <p className={menu.cat2}>price</p>
        </list>
      </container>
    </body>
  )
}
