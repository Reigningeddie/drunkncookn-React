import React from 'react';
import menu from './menu.module.css'
import MenuItem from './MenuItems'

export default function Menu() {
  const menuItems = [
    {
      picture: 'Number #1',
      description: 'Description #1',
      price: '$15'
    },
    {
      picture: 'Number #2',
      description: 'Description #2',
      price: '$25'
    },
    {
      picture: 'Number #3',
      description: 'Description #3',
      price: '$35'
    },
  ]
  return (
    <body className={menu.menuBody}>
      <container className={menu.container}>
        <h1 className={menu.title}>Our Menu</h1>
        <container className={menu.menu}>
          <button>&larr;</button>

          {menuItems.map((card) => {
            return <MenuItem item={card}/>
          })}
          
          {/* <card className={menu.card}>
            <p className={menu.pic}>Picture</p>
            <p className={menu.des}>Description</p>
            <p className={menu.price}>$15</p>
          </card> */}

          <button>&rarr;</button>
        </container>
      </container>
    </body>
  )
}
