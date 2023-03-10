import React from 'react';
import menu from './menu.module.css'

export default function Menu() {
  return (
    <body className={menu.menuBody}>
      <container className={menu.container}>
        <h1 className={menu.title}>Our Menu</h1>
        <list className={menu.grid}>
          <p className={menu.item1}>pic</p>
          <p className={menu.item2}>description</p>
          <p className={menu.item3}>price</p>
        </list>
      </container>
    </body>
  )
}
