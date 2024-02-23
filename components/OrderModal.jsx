import { Modal, useMantineTheme } from '@mantine/core';
import css from '.././styles/OrderModal.module.css'
import { useState } from 'react';

export default ({opened, setOpened, PaymentMethod}) => {
    const theme = useMantineTheme();
    const [FormdData, setFormData] = useState({})  


    const handleInput = (e) => {
        setFormData({...FormdData, [e.target.name]: e.target.value})
    }

  const total = typeof window !== 'undefined' && localStorage.getItem('total')

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(FormdData)
  }

  return(
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
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
    </Modal>
  )
}; 
