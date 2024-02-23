import { Modal, useMantineTheme } from '@mantine/core';
import css from '.././styles/OrderModal.module.css'

export default ({opened, setOpened, PaymentMethod}) => {
  const theme = useMantineTheme();

  const total = typeof window !== 'undefined' && localStorage.getItem('total')

  return(
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      opened = {opened}
      onClose={() => setOpened(null)}
    >
        <form action="" className={css.formContainer}>
            <input type="text"  name='name' required placeholder='Name' />
            <input type="text"  name='phone' required placeholder='Phone Number' />
            <textarea name="address" id="" cols="8" rows="3" required placeholder='Name'></textarea>

            <span>
                You Will Pay <span>$ {total}</span> On Delivery
            </span>

            <button type='submit'className='btn'>Place Order</button>
        </form>
    </Modal>
  )
}; 
