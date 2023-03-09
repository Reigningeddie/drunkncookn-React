import React from 'react';
import menu from './menu.module.css'

export default function Menu() {
  return (
    <body className={menu.menuBody}>
      <list className={menu.container}>
        <p>pic</p>
        <p>description</p>
        <p>price</p>
      </list>
    </body>
  )
}
