import React from 'react'
import css from '../styles/Menu.module.css'

const Menu = ({ pizzas }) => {
  return (
    <div className={css.container}>
      <div className={css.heading}>
        <span>OUR MENU</span>
        <span>Menu That Always</span>
        <span>Makes You Fall In Love</span>
      </div>
    </div>
  )
}

export default Menu
