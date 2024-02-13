import Image from 'next/image'
import React from 'react'
import Cherry from '../assets/Cherry.png'
import css from '../styles/Hero.module.css'

const Hero = () => {
  return (
    <div className={css.container}>
      <div className={css.left}>
        <div className={css.cherryDiv}>
          <span>More Than Faster</span>
          <Image 
            src={Cherry}
            alt='cherry'
            width={40}
            height={25}
          />
        </div>
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

      <butoon className="btn">
        Get Started
      </butoon>



      .{css.right}
    </div>
  )
}

export default Hero
