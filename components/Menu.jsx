import React from 'react'
import css from '../styles/Menu.module.css'
import Image from 'next/image'
import { urlFor } from './lib/client'

const Menu = ({ pizzas }) => {
  return (
    <div className={css.container}>
      <div className={css.heading}>
        <span>OUR MENU</span>
        <span>Menu That Always</span>
        <span>Makes You Fall In Love</span>
      </div>

      {pizzas.map((pizza, id) =>  {
            const src = urlFor(pizza.image).url()

            return (
                <div className={css.pizza} key={id}>
                    <div className={css.ImageWrapper}>
                        <Image 
                        loader={() => src}
                        src={src}
                        alt='pizza'
                        objectFit='cover'
                        layout='fill'
                        />
                    </div>
                </div>
            )
       })}
    </div>
  )
}

export default Menu
