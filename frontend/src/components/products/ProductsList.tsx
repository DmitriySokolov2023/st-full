import { ReactNode} from "react";
import styles from './ProductsList.module.css'
interface ProductListItemsProps<T>{
    item:T[]
    renderItem:(item:T) => ReactNode
}

export default function ProductsList<T>(props:ProductListItemsProps<T>){
    return (
        <div>
            <h1>Каталог товаров</h1>
            <div className={styles.product}>
                {props.item.map(props.renderItem)}
            </div>
        </div>

    );
}