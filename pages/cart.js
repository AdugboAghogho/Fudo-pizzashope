import React from 'react'
import Layout from '../components/Layout'
import css from '../styles/Cart.module.css'
import { urlFor } from '../components/lib/client'
import Image from 'next/image'
import { useStore } from './../store/store';
import toast, { Toaster } from 'react-hot-toast'
import { useState } from 'react';
import OrderModal from '../components/OrderModal';
import { useRouter } from 'next/router';

const Cart = () => {
  const CartData = useStore((state) => state.cart) 
  const removePizza = useStore((state) => state.removePizza) 
  const [PaymentMethod, setPaymentMethod] = useState(null)

  const handleRemove = (i) => {
    removePizza(i);
    toast.error('Item Removed')
  }

  const router = useRouter()

  const total = () => CartData.pizzas.reduce((a,b) => a+b.quantity * b.price, 0)

  const handleOnDelivery = () => {
    setPaymentMethod(0);
    typeof window !== 'undefined' && localStorage.setItem('total', total())
  }

  const handleOnCheckout = async () => {
    typeof window !== 'undefined' && localStorage.setItem('total', total())
    setPaymentMethod(1);
    const response = await fetch ('/api/stripe' , {
        method: "POST",
        headers: {
            'Content-Type': "application/json",
        },
        body: JSON.stringify(CartData.pizzas),
    });

    if(response.status === 500) return;

    const data = await response.json();
    toast.loading("Redirecting...");
    router.push(data.url)
  }

  return (
    <Layout>
      <div className={css.container}>
        <div className={css.details}>
            <table className={css.table}>
                <thead>
                    <th>Pizza</th>
                    <th>Name</th>
                    <th>Size</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                </thead>
                <tbody className={css.tbody}>
                    {CartData.pizzas.length > 0 &&
                    CartData.pizzas.map((pizza, i) => { 

                        const src = urlFor(pizza.image).url()

                        return (
                            <tr key={i}>
                                <td className={css.imageTd}>
                                    <Image
                                      src={src}
                                      loader={() => src}
                                      alt=''
                                      objectFit='cover'
                                      width={85}
                                      height={85}
                                      unoptimized
                                    />
                                </td>

                                <td>
                                    {pizza.name}
                                </td>
                                <td>
                                    {
                                        pizza.size === 0 ?
                                        "Small" :
                                        pizza.size === 1 ?
                                        "Medium" :
                                        "Large"
                                    }
                                </td>
                                <td>
                                    {pizza.price}
                                </td>
                                <td>
                                    {pizza.quantity}
                                </td>
                                <td>
                                    {pizza.price * pizza.quantity}
                                </td>
                                <td style={{ color: 'var(--themeRed)'}} onClick={() => handleRemove(i)}> 
                                    x
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>

       {/*================= SUMMARY =================*/}
        <div className={css.cart}>
            <span>Cart</span>
            <div className={css.CartDetails}>
                <div>
                    <span>Items</span>
                    <span>{CartData.pizzas.length}</span>
                </div>

                <div>
                    <span>Total</span>
                    <span>
                        <span style={{ color: 'var(--themeRed)', fontSize: 'bold'}}>$</span>
                        {total()}
                    </span>
                </div>
            </div>

            {!Order && CartData.pizzas.length > 0 ? (
              <div className={css.button}>
                  <button className='btn' onClick={handleOnDelivery}>Pay on Delivery</button>
                  <button className='btn' onClick={handleOnCheckout}>Pay Now</button>
              </div>
            ) : null}
        </div>
      </div>

      <Toaster />

      {/* //MODAL */}
      <OrderModal
        opened ={PaymentMethod === 0}
        setOpened = {setPaymentMethod}
        PaymentMethod = {PaymentMethod}
      />
    </Layout>
  )
}

export default Cart
