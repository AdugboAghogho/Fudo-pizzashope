import Image from 'next/image'
import React from 'react'
import Cherry from '../assets'
import css from '../styles'

const Hero = () => {
  return (
    <div className={css.container}>
      
      <div className={css.cherryDiv}>
        <span>More Than Faster</span>
        <Image 
           src={Cherry}
           alt='cherry'
        />
      </div>
    </div>
  )
}

export default Hero
