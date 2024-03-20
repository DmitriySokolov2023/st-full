import { ReactNode} from "react";
import styles from './List.module.css'
interface ProductListItemsProps<T>{
    item:T[]
    renderItem:(item:T) => ReactNode
    type?:string
}

export default function List<T>(props:ProductListItemsProps<T>){
    return (
        <div>
            {props.type !== 'cart' && <h1>Каталог товаров</h1>}
            <div className={styles.product}>
                {props.item.map(props.renderItem)}
            </div>
        </div>

    );
}