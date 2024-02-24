import { client } from "../../components/lib/client"
import Layout from './../../components/Layout';
import css from '../../styles/order.module.css'

export const getServerSideProps = async ( {params}) => {
    const query = `*[_type == 'order' && _id == '${params.id}']`;
    const order = await client.fetch(query);

    return{
        props: {
            order : order[0]
        }
    }
}

export default function ({order}) {

    return(
        <Layout>
           <div className={css.container}>
               <span className={css.heading}>
                   Order in process
                </span>
               <div className={css.details}>
                    <div>
                        <span>Order ID</span>
                        <span>{order._id}</span>
                    </div>
                    <div>
                        <span>Customer Name</span>
                        <span>{order.name}</span>
                    </div>
                    <div>
                        <span>Phone</span>
                        <span>{order.phone}</span>
                    </div>
                    <div>
                        <span>Method</span>
                        <span>
                            {
                                order.method === 0 ? 'Cash On Delivery' : 'Online Payment(Paid)'
                            }
                        </span>
                    </div>
                    <div>
                        <span>Total</span>
                        <span>$ {order.total}</span>
                    </div>
               </div>
            

            <div className={css.statusConatiner}>
                <div className={css.status}>
                    <UilBill width={50} height={50}/>
                    <span>Payment</span>
                    {order.method === 0 ?
                       <span className={css.pending}>On Delivery</span> :
                       <span className={css.pending}>Completed</span> 
                    }
                </div> 
            </div>
            </div>
        </Layout>
    )
}
