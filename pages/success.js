import React from 'react'
import Layout from '../components/Layout'
import OrderModal from '../components/OrderModal'

const success = () => {
  return (
    <Layout>
      <OrderModal opened={true} PaymentMethod={1} />
    </Layout>
  )
}

export default success
