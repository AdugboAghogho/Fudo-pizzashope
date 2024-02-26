import Image from 'next/image'
import React from 'react'
import Cherry from '../assets/Cherry.png'
import ww from '../assets/ww.png'
import {UilPhone} from '@iconscout/react-unicons'
import Pizza1 from '../assets/p1.jpg'
import css from '../styles/Hero.module.css'

const Hero = () => {
  return (
    <div className={css.container} id='home'>
      <div className={css.left}>
        <div className={css.cherryDiv}>
          <span>More Than Faster</span>
          <Image 
            src={Cherry}
            alt='cherry'
            width={40}
            height={25}
            unoptimized
          />
        </div>

        <div className={css.heroText}>
          <span>Be The Fastest</span>
          <span>In Delivering</span>
          <span> 
            Your <span style={{ color: 'var(--themeRed)'}}>Pizza</span>
          </span>
        </div>

        <span className={css.miniText}>
          Our Mission is to Fill Your Tummy With Delicious Food and free Delivery
        </span>

        <butoon className={`btn ${css.btn}`}>
          Get Started
        </butoon>
      </div>

      {/* Right side */}

      <div className={css.right}>
        <div className={css.imageContainer}>
          <Image 
            src={ww}
            alt='hero'
            layout='intrinsic'
            priority
            unoptimized
          />
        </div>

        <div className={css.ContactUs}>
          <span>Contact Us</span>
          <div>
            <UilPhone color='white'/>
          </div>
        </div>

        <div className={css.Pizza}>
          <div>
            <Image
              src={Pizza1}
              alt='pizza'
              objectFit='cover'
              layout='intrinsic'
            />
          </div>

          <div className={css.details}>
            <span>Italian Pizza</span>
            <span> 
              <span style={{ color: 'var(--themeRed)' }}>$</span> 
              7.49
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
