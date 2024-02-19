import React, { useState } from 'react';
import css from '../styles/Header.module.css';
import Image from 'next/image';
import Logo from '../assets/Logo.png';
import { UilShoppingBag, UilHamburgerMenu, UilOutlineRestaurantMenu } from '@iconscout/react-unicons';

const Header = () => {
  const [toggle, setToggle] = useState(false);

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
        <li><a href="#home">Home</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className={css.rightSide}>
        <div className={css.cart}>
          <UilShoppingBag size={35} color='#2E2E2E' />
          <div className={css.badge}>1</div>
        </div>
      </div>

      {/* <div className={css.app__navbarsmallscreen}>
        <UilHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggle(true)} />

        {toggle && (
          <div className={`css.app__navbarsmallscreen_overlay ${flex__center}slide-bottom`}>
            <UilOutlineRestaurantMenu fontSize={27} className={css.overlay__close} onClick={() => setToggle(false)} />
            <ul className="app__navbarsmallscreen_links">
              <li><a href="#home">Home</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default Header;
