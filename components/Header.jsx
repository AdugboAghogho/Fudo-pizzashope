import React from 'react'
import css from '../styles/Header.module.css'
import Image from 'next/image'
import Logo from '../assets/Logo.png'

const Header = () => {
  return (
    <div className={css.header}>
      <div className={css.logo}>
        <Image 
          src={Logo}
          alt='logo'
          width={50}
          height={50}
        />
        <span>Fudo</span>
      </div>
    </div>
  )
}

export default Header

