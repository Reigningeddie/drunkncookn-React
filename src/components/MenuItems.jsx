import menu from './menu.module.css'

export default function MenuItems({ item }) {
  return (
    <>
      <main className={menu.card}>
        <div className={menu.pic}>
          <p className={menu.image}>{item.picture}</p>
        </div>
        <div className={menu.des}>
          <p className={menu.description}>{item.description}</p>
        </div>
        <div className={menu.price}>
          <p className={menu.moola}>{item.price}</p>
        </div>
      </main>
    </>
  )
}