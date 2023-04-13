// import React from 'react';
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

          {menuItems.map((item) => {
            return <MenuItem item={item}/>
          })}

          <button>&rarr;</button>
        </container>
      </container>
    </body>
  )
}
