import { React } from 'react'
import menu from './menu.module.css'
import MenuItem from './MenuItems'

export default function Menu() {
  // const [activeIndex, setActiveIndex] = useState(0);
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
  ]
  return (
    <section className={menu.menuBody}>
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
      <div className={menu.lowerContainer}>
        
        {menuItems.map((item) => {
          return (
            
          <p className={menu.dishes}>{item.dish}</p>
          );
        })}

      </div>
    </section>
  )
}
