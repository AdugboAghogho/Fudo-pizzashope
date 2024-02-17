import React from 'react'
import Layout from './../../components/Layout';
import { client, urlFor } from '../../components/lib/client';
import Image from 'next/image';
import css from '../../styles/Pizza.module.css'

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
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
    const paths = await client.fetch(
        `*[_type=="pizza" && define(slug.current)][].slug.current`
    );

    return {
        paths: paths.map((slug) => ({params: {slug}})),
        fallback: 'blocking'
    }
}


export async function getStaticPaths(context){
    const { slug = ""} = context.params;
    const pizza = await client.fetch(
        `*[_type=="pizza" && slug.current == ${slug}][0]`
    );

    return {
        props: {
            pizza,
        },
    };
}