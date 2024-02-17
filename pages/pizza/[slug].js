import React from 'react'
import Layout from './../../components/Layout';
import { client, urlFor } from '../../components/lib/client';
import Image from 'next/image';
import css from '../../styles/Pizza.module.css'
import LeftArrow from '../../assets/arrowLeft'
import LeftArrow from '../../assets/arrowRight'

export default function pizza ({ pizza }) {
  const src = urlFor(pizza.image).url()

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

                <span> <span style={{ color: 'var(--themeRed)'}}>$</span> {pizza.price[1]}</span>
                <div className={css.size}>
                    <span>Size</span>
                    <div className={css.sizeVaraints}>
                        <div>Small</div>
                        <div>Medium</div>
                        <div>Large</div>
                    </div>
                </div>

                <div className={css.quantity}>
                    <span>Quantity</span>

                    <div className={css.counter}>
                        <Image
                           src={LeftArrow}
                        />
                    </div>
                </div>
            </div>
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