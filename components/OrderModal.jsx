import { Modal, useMantineTheme } from '@mantine/core';
import css from '.././styles/OrderModal.module.css'
import { useState } from 'react';
import { createOrder } from './lib/orderHandler';
import toast, { Toaster } from 'react-hot-toast';
import { useStore } from '../store/store';
import { useRouter } from 'next/router';

const OrderModal = ({opened, setOpened, PaymentMethod}) => {
  const theme = useMantineTheme();
  const router = useRouter();
  const [FormdData, setFormData] = useState({})  


  const handleInput = (e) => {
    setFormData({...FormdData, [e.target.name]: e.target.value})
  }

  const resetCart = useStore((state) => state.resetCart)

  const total = typeof window !== 'undefined' && localStorage.getItem('total')

  const handleSubmit =  async (e) => {
    e.preventDefault();
    const id = await createOrder({...FormdData, total, PaymentMethod})
    toast.success("Order Placed");
    resetCart();
    {
        typeof window !== 'undefined' && localStorage.setItem('order', id)
    }

    router.push(`/order/${id}`)
  }

  return(
    <Modal
      overlayColor={
        theme.colorScheme === 'dark' 
        ? theme.colors.dark[9] 
        : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      opened = {opened}
      onClose={() => setOpened(null)}
      className={css.Modal}
    >
        <form onSubmit={handleSubmit}  className={css.formContainer}>
            <input onChange={handleInput} type="text"  name='name' required placeholder='Name' />
            <input onChange={handleInput} type="text"  name='phone' required placeholder='Phone Number' />
            <textarea onChange={handleInput} name="address" id="" cols="8" rows="3" placeholder='Address'></textarea>

            <span>
                You Will Pay <span>$ {total}</span> On Delivery
            </span>

            <button type='submit'className='btn'>Place Order</button>
        </form>
        <Toaster />
    </Modal>
  )
}; 

export default OrderModal;