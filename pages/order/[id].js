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
          </div>
        </Layout>
    )
}
