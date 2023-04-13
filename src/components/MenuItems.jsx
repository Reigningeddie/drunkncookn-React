import menu from './menu.module.css'

export default function MenuItems({ item }) {
  console.log(item)
  return (
    <>
      <card className={menu.card}>
        <p className={menu.pic}>
          <p className={menu.image}>{item.picture}</p>
        </p>
        <p className={menu.des}>
          <p className={menu.description}>{item.description}</p>
        </p>
        <p className={menu.price}>
          <p className={menu.moola}>{item.price}</p>
        </p>
      </card>
    </>
  )
}