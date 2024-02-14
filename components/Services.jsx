import React from 'react'
import css from '../styles/Services.module.css'
import s1 from '../assets/s1.png'
import s2 from '../assets/s2.png'
import s3 from '../assets/s3.png'
import Image from 'next/image'

const Services = () => {
  return (
    <>
      <div className={css.heading}>
        <span>WHAT WE SERVE</span>
        <span>Your Favourite Food</span>
        <span>Delivery Partner</span>
      </div>

      <div className={css.services}>
        <div className={css.feature}>
            <div className={css.ImageWrapper}>
                <Image
                  src={s1}
                  alt=''
                  objectFit='cover'
                  layout='intrinsic'
                />
            </div>

            <span>Easy to Order</span>
            <span>You only need a few Steps in Food Ordering</span>
        </div>

        <div className={css.feature}>
            <div className={css.ImageWrapper}>
                <Image
                  src={s2}
                  alt=''
                  objectFit='cover'
                  layout='intrinsic'
                />
            </div>

            <span>Fast Delivery</span>
            <span>Delivery that is always on time even faster</span>
        </div>

        <div className={css.feature}>
            <div className={css.ImageWrapper}>
                <Image
                  src={s3}
                  alt=''
                  objectFit='cover'
                  layout='intrinsic'
                />
            </div>

            <span>Good Qulity</span>
            <span>Not Only Fast For Us, Qulity Is also Number One</span>
        </div>
      </div>
    </>
  )
}

export default Services
