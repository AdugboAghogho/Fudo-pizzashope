import React from 'react'
import Layout from './../../components/Layout';
import { client } from '../../components/lib/client';

export default function pizza ({ pizza }) {
  return (
    <Layout>
      slug
    </Layout>
  )
}

export async function getStaticPaths() {
    const paths = await client.fetch(
        `*[_type=="pizza" && define(slug.current)][].slug.current`
    );
}
