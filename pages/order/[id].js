import { client } from "../../components/lib/client"
import Layout from './../../components/Layout';
import css from '../../styles/order.module.css'
import {UilBill, UilBox} from '@iconscout/react-unicons'
import Cooking from '../../assets/cooking.png'
import Onway from '../../assets/onway.png'
import Spinner from '../../assets/spinner.svg'
import Image from "next/image";

export const getServerSideProps = async ({ params }) => {
    const query = `*[_type == 'order' && _id == '${params.id}']`;
    const order = await client.fetch(query);

    return{
        props: {
            order : order[0],
        },
    };
};

export default function Orders({order}) {

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
                        {order.method === 0 ? (
                          <span className={css.pending}>On Delivery</span> 
                        ) : (
                          <span className={css.completed}>Completed</span> 
                        )}
                    </div> 

                    <div className={css.status}>
                        <Image src={Cooking} width={50} height={50}/>
                        <span>Cooking</span>

                        {order.status === 1 && (
                            <div className={css.spinner}>
                                <Image src={Spinner} alt="spinner" />
                            </div>
                        )}
                    </div> 

                    <div className={css.status}>
                        <Image src={Onway} width={50} height={50}/>
                        <span>On way</span>
                    </div> 

                    <div className={css.status}>
                        <UilBox width={50} height={50}/>
                        <span>Delivered</span>
                    </div>
                </div>
            </div>

        </Layout>
    )
}