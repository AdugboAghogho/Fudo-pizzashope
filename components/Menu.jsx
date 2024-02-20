import React from 'react'
import css from '../styles/Menu.module.css'
import Image from 'next/image'
import { urlFor } from './lib/client'
import Link from 'next/link'

const Menu = ({ pizzas }) => {
  return (
    <div className={css.container}key='menu'>
      <div className={css.heading}>
        <span>OUR MENU</span>
        <span>Menu That Always</span>
        <span>Makes You Fall In Love</span>
      </div>

      <div className={css.menu}>
        {pizzas.map((pizza, id) =>  {
          const src = urlFor(pizza.image).url()

          return (
            <Link href={`./pizza/${pizza.slug.current}`}  key={index}>
              <div className={css.bg}>
                <div className={css.pizza}>

                  <div className={css.ImageWrapper}>
                    <Image 
                    loader={() => src}
                    src={src}
                    alt='pizza'
                    objectFit='cover'
                    layout='fill'
                    />
                  </div>


                  <span>{pizza.name}</span>
                  <span>
                    <span style={{ color: 'var(--themeRed)'}}>$</span> 
                    {pizza.price[1]}
                  </span>
                </div>

              </div>
            </Link>

          )
        })}

      </div>
    </div>
  )
}

export default Menu
