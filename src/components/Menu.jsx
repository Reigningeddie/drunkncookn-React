import { React, useState } from 'react'
import menu from './menu.module.css'
import MenuItem from './MenuItems'

export default function Menu() {
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = [
    {
      picture: 'Number #1',
      dish: 'Dish 1',
      description: 'Description #1',
      price: '$15'
    },
    {
      picture: 'Number #2',
      dish: 'Dish 2',
      description: 'Description #2',
      price: '$25'
    },
    {
      picture: 'Number #3',
      dish: 'Dish 3',
      description: 'Description #3',
      price: '$35'
    },
  ];

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= menuItems.length) {
      newIndex = menuItems.length -1;
    }

  setActiveIndex(newIndex);
  }
  return (
    <main className={menu.menuBody}>
      <div className={menu.container}>
        <h1 className={menu.title}>Our Menu</h1>
        <div className={menu.cont}>
        <div className={menu.menu}>
            <div className={menu.inner} style={{ transform: `translate(-${activeIndex * 100}%)` }}>
              {menuItems.map((item) => {
              return <MenuItem item={item} width={ '100%' }/>
            })}
            </div>
        </div>
        </div>
      </div>
      <div className={menu.lowerContainer}>
      <button onClick={() => {updateIndex(activeIndex -1);}}>&larr;</button>
        {menuItems.map((item, index) => {
          return (
              <p onClick={() => {updateIndex(index);}} className={menu.dishes}>{item.dish}</p>
          );
        })}
          <button onClick={() => {updateIndex(activeIndex +1);}}>&rarr;</button>
      </div>
      
    </main>
  )
}
