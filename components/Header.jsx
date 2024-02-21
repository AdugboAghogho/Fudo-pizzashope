import React, { useState } from 'react';
import css from '../styles/Header.module.css';
import Image from 'next/image';
import Logo from '../assets/Logo.png';
import { UilShoppingBag } from '@iconscout/react-unicons';
import { useStore } from '../store/store';
import Link from 'next/link';

const Header = () => {
  // state in terminal
  const state = useStore((state) => state)
  console.log(state)

  const items = useStore((state) => state.cart.pizzas.length)

  return (
    <div className={css.header}>
      <div className={css.logo}>
        <Image 
          src={Logo}
          alt='logo'
          width={50}
          height={50}
          className='img'
        />
        <span>Fudo</span>
      </div>

      <ul className={css.menu}>
        <Link href='/'>
          <li>Home</li>
        </Link>
        <li>Menu</li>
        <li>Contact</li>
      </ul>

      <div className={css.rightSide}>
        <Link href="/cart">
          <div className={css.cart}>
            <UilShoppingBag size={35} color='#2E2E2E' />
            <div className={css.badge}>{items}</div>
          </div>
        </Link>
      </div>

    </div>
  );
};

export default Header;
