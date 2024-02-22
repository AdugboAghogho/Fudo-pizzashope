import React, { useState } from 'react';
import Layout from './../../components/Layout';
import { client, urlFor } from '../../components/lib/client';
import Image from 'next/image';
import css from '../../styles/Pizza.module.css';
import arrowLeft from '../../assets/arrowLeft.png';
import arrowRight from '../../assets/arrowRight.png';
import { useStore } from '../../store/store';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'next/link';

export default function Pizza ({ pizza }) {
  const src = urlFor(pizza.image).url()

  const [Size, setSize] = useState(1)
  const [Quantity, setQuantity] = useState(1)

  const handleQuan = (type) => {
    type === 'inc'
    ? setQuantity((prev) => prev + 1) 
    : Quantity === 1 
    ? null 
    : setQuantity ((prev) => prev -1)
  }

  //ADD TO CART FUNCTION//
  const addPizza = useStore((state) => state.addPizza)
  const addToCart = () => {
    addPizza({...pizza, price: pizza.price[Size], quantity: Quantity, size: Size})
    toast.success("Pizza Added To Cart")
  } 

  return (
    <Layout>
       <div className={css.container}>
           <div className={css.imageWrapper}>
                <Image
                loader={() => src}
                alt=''
                src={src}
                layout='fill'
                unoptimized
                objectFit='cover '
                />
            </div> 

            <div className={css.right}>
                <span >{pizza.name}</span>
                <span>{pizza.details}</span>

                <span> <span style={{ color: 'var(--themeRed)'}}>$</span> {pizza.price[Size]}</span>
                <div className={css.size}>
                    <span>Size</span>
                    <div className={css.sizeVaraints}>
                        <div className={Size === 0 ? css.selected : ''} onClick={() => setSize(0)}>Small</div>
                        <div className={Size === 1 ? css.selected : ''} onClick={() => setSize(1)}>Medium</div>
                        <div className={Size === 2 ? css.selected : ''} onClick={() => setSize(2)}>Large</div>
                    </div>
                </div>

                <div className={css.quantity}>
                    <span>Quantity</span>

                    <div className={css.counter}>
                        <Image
                           src={arrowLeft}
                           alt=''
                           height={20}
                           width={20}
                           objectFit='contain'
                           onClick={() => handleQuan("dec")}
                        />

                        <span>{Quantity}</span>

                        <Image
                           src={arrowRight}
                           alt=''
                           height={20}
                           width={20}
                           objectFit='contain'
                           onClick={() => handleQuan("inc")}
                        />
                    </div>
                </div>

                <div className={css.button}>
                    <div className={`btn ${css.btn}`} onClick={addToCart}>
                        Add To Cart
                    </div>
                    <Link href='/cart'>
                        <div className={`btn ${css.btn}`}>
                            Go To Cart
                        </div>  
                    </Link>
                </div>
            </div>
            <Toaster />
       </div>

    </Layout>
  )
}

export async function getStaticPaths() {
    const paths = await client.fetch(
        `*[_type=="pizza" && defined(slug.current)][].slug.current`
    );

    return {
        paths: paths.map((slug) => ({params: { slug } })),
        fallback: 'blocking'
    }
}


export async function getStaticProps(context) {
    const { slug = ""} = context.params;
    const pizza = await client.fetch(
        `*[_type=="pizza" && slug.current == '${slug}'][0]`
    );

    return {
        props: {
            pizza,
        },
    };
}